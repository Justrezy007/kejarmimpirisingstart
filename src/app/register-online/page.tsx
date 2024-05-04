'use client'
import React, { useState, ChangeEvent, useEffect } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, app } from '@/app/firebase/config'
import { getFirestore, collection, Timestamp, doc, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { uploadFile, getFile } from '../utils/uploader'
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, SubmitHandler } from "react-hook-form"
import Loading from '../components/loading'
import dataCity from '@/app/utils/province.json'
import emailjs from '@emailjs/browser';

interface FormRegistration {
    checked: boolean
    fullName: string
    tempatLahir: string
    tanggalLahir: Date
    email: string
    password: string
    phone: string
    instagram: string
    tiktok : string
    city: string
    getInformation : string
    nomorOcto : string
    nomorKtp: string
    linkVideo: string
}

interface City {
    city_id: string;
    province_id: string;
    province: string;
    type: string;
    city_name: string;
    postal_code: string;
  }

const RegisterOnline = () => {
    const { register, handleSubmit, formState: { errors }, } = useForm<FormRegistration>()
    const [captcha, setCaptcha] = useState<string | null>('')
    const [errCaptcha, setErrCaptcha] = useState<boolean>(false)
    const [loadImage, setLoadImage] = useState<boolean>(false)
    const [proveOcto, setProveOcto] = useState('')
    const [errProveOcto, setErrProveOcto] = useState('')
    const [profilePict, setProfilePict] = useState('')
    const [errProfilePict, setErrProfilePict] = useState('')
    const [errorSignUp, setErrorSignUp] = useState('')

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [userSession, setUserSession] = useState<string | null>('')

    const [cities, setCities] = useState<City[]>([]); // State untuk menyimpan data kota

    // Router Hook for redirect to Profile
    const router = useRouter()

    // Create User to Firebase Auth
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    // Starting Point
    useEffect(() => {
        const getSession = sessionStorage.getItem('user')
        setUserSession(getSession)
        if (getSession) {
            router.push('/profile')
        }
        setCities(dataCity.rajaongkir.results);
    }, [])

    // Handle Upload Prove
    const handleUploadProve = async (e: ChangeEvent<HTMLInputElement>) => {
        const validImageTypes = ['jpg', 'jpeg', 'png'];
        setLoadImage(true)
        if (e.target.files?.length) {
            const folder = 'user/ktp';
            let ext = e.target.files[0].name.split('.').pop();
            ext = ext ? ext : ''; // To ensure ext is not undefined

            if (validImageTypes.includes(ext.toLowerCase())) {
                const imagePath = await uploadFile(e.target.files[0], folder);
                const imageUrl = await getFile(imagePath);
                setProveOcto(imageUrl); 
                setLoadImage(false);
            } else {
                setErrProveOcto('wrong file extension');
                setLoadImage(false)
            }
        }
        setLoadImage(false)
    }

    // Handle Upload Foto Diri
    const handleUploadProfile = async (e: ChangeEvent<HTMLInputElement>) => {
        const validImageTypes = ['jpg', 'jpeg', 'png'];
        setLoadImage(true)
        if (e.target.files?.length) {
            const folder = 'user/profile';
            let ext = e.target.files[0].name.split('.').pop();
            ext = ext ? ext : ''; // To ensure ext is not undefined

            if (validImageTypes.includes(ext.toLowerCase())) {
                const imagePath = await uploadFile(e.target.files[0], folder);
                const imageUrl = await getFile(imagePath);
                setProfilePict(imageUrl); 
                setLoadImage(false);
            } else {
                setErrProfilePict('wrong file extension');
                setLoadImage(false)
            }
        }
        setLoadImage(false)
    }

    // Send Email to user
    const sendEmail = (receiver:string) => {
        emailjs
            .send(process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID ?? "",
                process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ONLINE ?? "",
                {receiver:receiver},
                process.env.NEXT_PUBLIC_EMAIL_API_KEY ?? "")
            .then(
                () => {
                    console.log('SUCCESS!');
                },
                (error) => {
                    console.log('FAILED...', error);
                },
            );
    };

    const onSubmit: SubmitHandler<FormRegistration> = async (data) => {
        setIsLoading(true)
        setErrorSignUp('')
        if (captcha != '') {
            const timeStamp = Date.now().toString()
            try {
                const res = await createUserWithEmailAndPassword(data.email, timeStamp)
                if (res?.user) {
                    const createUser = await createUserToFirestore(res?.user.uid, data, timeStamp);
                    sessionStorage.setItem('user', res?.user.uid);
                    sendEmail(data.email)
                    router.push('/profile')
                } else {
                    throw new Error('User was found');
                }

            } catch (err) {
                console.log(err)
                setIsLoading(false)
                setErrorSignUp('Email Telah digunakan!')
            }
        }
        else {
            setIsLoading(false)
            setErrCaptcha(true)
        }
    }


    // Handle Create Doc based on UID
    const createUserToFirestore = async (uid: string, data: FormRegistration, timeStamp:string) => {
        const { checked, fullName, tempatLahir, tanggalLahir, email, phone, instagram, city, nomorKtp, nomorOcto, getInformation, linkVideo } = data
        try {
            const dataCollection = collection(getFirestore(app), 'user');
            const dataDoc = doc(dataCollection, uid)
            setDoc(dataDoc, {
                uid,
                type: "online",
                checked,
                fullName,
                tempatLahir,
                tanggalLahir,
                email,
                phone,
                instagram,
                city,
                nomorKtp,
                profilePict,
                proveOcto,
                nomorOcto,
                getInformation,
                verified: 'false',
                timeStamp:timeStamp,
                linkVideo,
                createdAt: Timestamp.now()
            })
        }
        catch (err) {
            setIsLoading(false)
            console.log(err)
        }
    }

    return (
        <div style={{
            backgroundImage: "url('./KV.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }} className="min-h-screen mx-auto overflow-y-hidden bg-fixed bg-cover bg-center bg-no-repeat shadow-lg">
            {(isLoading || loadImage) && <Loading />}
            <div className="container flex items-center justify-center flex-1 h-full mx-auto py-8">
                <form onSubmit={handleSubmit(onSubmit)} className='bg-base-100 w-11/12 md:w-7/12 px-8 py-8'>
                    <img className='font-semibold text-lg w-32' src={'cimb_niaga.png'} />
                    {/* <h3 className='font-semibold text-2xl md:mt-3 my-3 text-center text-white'>Kejar Mimpi Rising Start 2024</h3> */}
                    <h3 className='font-semibold text-lg mt-1 text-center text-white'>PENDAFTARAN AUDISI ONLINE</h3>
                    <div className='md:px-12 px-2 mt-8'>
                    <p className='text-sm text-white font-semibold'>Publication Confirmation</p>
                        <p className='text-white text-sm text-justify my-1.5'>Saya memberikan izin kepada PT CIMB Niaga Tbk untuk melakukan publikasi terhadap materi konten yang mencakup partisipasi saya dalam keseluruhan proses audisi Rising Start CIMB Niaga. Saya mengerti bahwa konten tersebut dapat berupa video, audio, foto, atau tulisan yang menampilkan atau menggambarkan saya dalam konteks audisi. Saya dengan sadar memberikan hak kepada PT Bank CIMB Niaga Tbk untuk menggunakan dan mempublikasikan konten tersebut di berbagai media, termasuk namun tidak terbatas pada media sosial, website, iklan, dan publikasi lainnya.</p>
                        <p className='text-white text-sm text-justify my-1.5'>Saya menyadari bahwa konten yang dipublikasikan oleh PT Bank CIMB Niaga Tbk dapat diakses oleh masyarakat luas di seluruh dunia. Saya juga memahami bahwa saya tidak akan menerima kompensasi atau penggantian atas penggunaan konten tersebut oleh PT Bank CIMB Niaga Tbk.</p>
                        <p className='text-white text-sm text-justify my-1.5'>Saya mengonfirmasi bahwa saya memiliki hak untuk memberikan izin ini kepada PT Bank CIMB Niaga Tbk, dan saya menjamin bahwa konten tersebut tidak melanggar hak cipta, privasi, atau hak lainnya dari pihak yang bersangkutan.</p>
                        <p className='text-white text-sm text-justify my-1.5'>Selain itu,  apabila terpilih sebagai pemenang tahap 2 &amp; 3 dari proses kompetisi ini, saya setuju untuk menjadi model dalam pembuatan video musik &apos;Kejar Mimpimu&apos; oleh Dee Lestari, bersedia mengikuti seluruh rangkaian audisi, persiapan, dan penampilan di Konser Kejar Mimpi untuk Indonesia 2024 hingga selesai, serta rangkaian photoshoot sesuai dengan jadwal yang berlaku dengan penggunaan assetnya untuk kalender 2025 CIMB Niaga.</p>
                        <p className='text-white text-sm text-justify my-1.5'>Dengan ini, saya menyatakan persetujuan saya secara sukarela dan tanpa paksaan dari pihak manapun.</p>         <input {...register("checked", { required: true })} type="checkbox" className="mt-2 cursor-pointer" /><span className='text-white ml-2 mt-2 text-sm'>Saya Setuju</span> {errors.checked && <span className='text-xs text-red-500'>Required Check</span>}
                        <div className='flex flex-col md:flex-row justify-between md:gap-5'>
                            <div className='flex flex-col mt-6 flex-1'>
                                <label className='text-xs text-opacity-50' id="first-name">Nama Lengkap </label>
                                {errors.fullName && <p className='text-xs text-red-500'>Required 3-20 characters</p>}
                                <input {...register("fullName", { required: true, minLength: 3, maxLength: 20 })} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' type='text' placeholder='Nama Lengkap' />
                            </div>
                            {/* <div className='flex flex-col mt-6 flex-1'>
                                <label className='text-xs text-opacity-50' id="last-name">Nama Akhir</label>
                                {errors.lastName && <p className='text-xs text-red-500'>Required 3-20 characters</p>}
                                <input {...register("lastName",{required:true, minLength:3, maxLength:20})} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' type='text' placeholder='Nama Akhir'  />
                            </div> */}
                        </div>
                        <div className='flex flex-col md:flex-row justify-between md:gap-5'>
                            <div className='flex flex-col mt-6 flex-1'>
                                <label className='text-xs text-opacity-50' id="tempat-lahir">Tempat Lahir</label>
                                {errors.tempatLahir && <p className='text-xs text-red-500'>Required 3-20 characters</p>}
                                <input {...register("tempatLahir", { required: true, minLength: 3, maxLength: 20 })} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' type='text' placeholder='Jakarta' />
                            </div>
                            <div className='flex flex-col mt-6 flex-1'>
                                <label className='text-xs text-opacity-50' id="tanggal-lahir">Tanggal Lahir</label>
                                {errors.tanggalLahir && <p className='text-xs text-red-500'>Required</p>}
                                <input {...register("tanggalLahir", { required: true })} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' type='date' placeholder='dd/mm/yy' />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between md:gap-5'>
                            <div className='flex flex-col mt-6 flex-1'>
                                <label className='text-xs text-opacity-50' id="email">Email</label>
                                {errors.email && <p className='text-xs text-red-500'>Required 3-100 characters</p>}
                                <input {...register("email", { required: true, minLength: 3, maxLength: 100 })} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' type='email' placeholder='email@gmail.com' />
                            </div>
                            {/* <div className='flex flex-col mt-6 flex-1'>
                                <label className='text-xs text-opacity-50' id="password">Password</label>
                                {errors.password && <p className='text-xs text-red-500'>Required 3-20 characters</p>}
                                <input {...register("password", { required: true, minLength: 3, maxLength: 20 })} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' type='password' placeholder='********' />
                            </div> */}
                        </div>
                        <div className='flex flex-col md:flex-row justify-between md:gap-5'>
                            <div className='flex flex-col mt-6 flex-1'>
                                <label className='text-xs text-opacity-50' id="phone">No. Telephone</label>
                                {errors.phone && <p className='text-xs text-red-500'>Required 3-20 characters</p>}
                                <input {...register("phone", { required: true, minLength: 3, maxLength: 20 })} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' type='text' placeholder='08111111111' />
                            </div>
                            <div className='flex flex-col mt-6 flex-1'>
                                <label className='text-xs text-opacity-50' id="ktp">Nomor KTP/KK</label>
                                {errors.nomorKtp && <p className='text-xs text-red-500'>Required 3-20 characters</p>}
                                <input {...register("nomorKtp", { required: true, minLength: 3, maxLength: 20 })} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' type='text' placeholder='3312412312421' />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between md:gap-5'>
                            <div className='flex flex-col mt-6 flex-1'>
                                <label className='text-xs text-opacity-50' id="phone">Akun Tiktok</label>
                                {errors.tiktok && <p className='text-xs text-red-500'>Required 3-20 characters</p>}
                                <input {...register("tiktok", { required: true, minLength: 3, maxLength: 20 })} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' type='text' placeholder='@risingstart2024' />
                            </div>
                            <div className='flex flex-col mt-6 flex-1'>
                                <label className='text-xs text-opacity-50' id="instagram">Akun Instagram</label>
                                {errors.instagram && <p className='text-xs text-red-500'>Required 3-20 characters</p>}
                                <input {...register("instagram", { required: true, minLength: 3, maxLength: 20 })} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' type='text' placeholder='@risingstart2024' />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between md:gap-5'>
                            <div className='flex flex-col mt-6 flex-1'>
                                <label className='text-xs text-opacity-50' id="linkVideo">Link Video (Instagram/Tiktok)</label>
                                {errors.linkVideo && <p className='text-xs text-red-500'>Required 3-100 characters</p>}
                                <input {...register("linkVideo", { required: true, minLength: 3, maxLength: 100 })} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' type='text' placeholder='https://instagram.com/o' />
                            </div>
                        </div>
                        <div className='flex flex-col mt-6 flex-1'>
                            <label className='text-xs text-opacity-50' id="city">Asal Kota</label>
                            {errors.city && <p className='text-xs text-red-500'>Pilih Kota yang tersedia</p>}
                            <select className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' {...register("city",{required:true})}>
                                {cities.map(city=>{
                                    return(<option key={city.city_id} value={city.city_name}>{city.city_name}</option>)
                                })}
                            </select>
                            {/* <input {...register("city",{required:true, minLength:3, maxLength:20})} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1'  type='text' placeholder='Jakarta'  /> */}
                        </div>

                        <div className='flex flex-col mt-6 flex-1'>
                            <p className='text-xs text-red-500'>{errProfilePict}</p>
                            <label className='text-xs text-opacity-50' id="city">Foto Diri Terbaru</label>
                            <input required onChange={e=>handleUploadProfile(e)} type="file" accept='image/*'  className="file-input mt-1 file-input-bordered file-input-red-700 w-full" />                        
                        </div>

                        <div className='flex flex-col mt-6 flex-1'>
                            <label className='text-xs text-opacity-50' id="city">Nomor OCTO Pay</label>
                            {errors.nomorOcto && <p className='text-xs text-red-500'>Required 3-20 characters</p>}
                            <input {...register("nomorOcto", { required: true, minLength: 3, maxLength: 20 })} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' type='text' placeholder='32111111111' />
                        </div>

                        <div className='flex flex-col mt-6 flex-1'>
                            <p className='text-xs text-red-500'>{errProveOcto}</p>
                            <label className='text-xs text-opacity-50' id="city">Foto Bukti Akun OCTO Pay dengan Minimum Deposit Rp10.000</label>
                            <input required onChange={e=>handleUploadProve(e)} type="file" accept='image/*'  className="file-input mt-1 file-input-bordered file-input-red-700 w-full" />                        
                        </div>

                        <div className='flex flex-col mt-6 flex-1'>
                            <p className='text-xs text-opacity-50' >Contoh foto yang dilampirkan</p>
                            <a target='_blank' href='./SS_Octopay.jpeg'>
                            <img className='w-5/12 mt-2 mx-auto rounded-md' src={'./SS_Octopay.jpeg'} />
                            </a>
                        </div>

                        <div className='flex flex-col mt-6 flex-1'>
                            <label className='text-xs text-opacity-50' id="city">Dari Mana Anda Memperoleh Informasi?</label>
                            {errors.getInformation && <p className='text-xs text-red-500'>Required 3-20 characters</p>}
                            <input {...register("getInformation", { required: true, minLength: 3, maxLength: 20 })} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' type='text' placeholder='Dari Komunitas/Sosial Media/Lainnya' />
                        </div>


                        <div className='flex flex-col mt-6 flex-1'>
                            {errCaptcha && <p className='text-xs text-red-500 text-center mb-2'>verifikasi diperlukan!</p>}
                            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_CLIENT_SIDE!} className='mx-auto' onChange={setCaptcha} />
                        </div>
                    </div>
                    {/* <p className='px-12 mt-4 text-sm'>Sudah registrasi? <Link className='underline' href="/login">Masuk Disini</Link></p> */}
                    <p className={`text-red-900 px-8 py-4 mx-auto md:w-7/12 bg-red-300 bg-opacity-80 text-center mt-5 text-sm ${errorSignUp == '' ? 'hidden' : 'block'}`}>{errorSignUp}</p>
                    <div className='md:px-12 px-4 flex justify-end gap-5'>
                        <Link href={'/'} className='text-red-700 px-8 py-2 mt-8 btn'>Kembali</Link>
                        <button type="submit" className='bg-red-700 px-8 py-2 mt-8'>Daftar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterOnline