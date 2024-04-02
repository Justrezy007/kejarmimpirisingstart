'use client'
import React, { useState, ChangeEvent, useEffect  } from 'react'
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import {auth,app} from '@/app/firebase/config'
import { getFirestore, collection, Timestamp, doc, setDoc } from 'firebase/firestore'
import {useRouter} from 'next/navigation'
import Link from 'next/link'
import { uploadFile, getFile } from '../utils/uploader'
import ReCAPTCHA from "react-google-recaptcha";
import { useForm, SubmitHandler } from "react-hook-form"
import Loading from '../components/loading'

interface FormRegistration {
    checked: boolean
    firstName : string
    lastName : string
    tempatLahir : string
    tanggalLahir : Date
    email : string
    password : string
    phone : string
    instagram : string
    city : string
}

const RegisterOnline = () => {
    const {register, handleSubmit, formState: { errors },} = useForm<FormRegistration>()
    const [captcha, setCaptcha] = useState<string | null>('')
    const [errCaptcha, setErrCaptcha] = useState<boolean>(false)
    const [loadImage, setLoadImage] = useState<boolean>(false)
    const [ktp, setKTP] = useState('')
    const [errKtp, setErrKtp] = useState('')
    const [errorSignUp, setErrorSignUp] = useState('')

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [userSession, setUserSession] = useState<string|null>('')

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
    useEffect(()=>{
        const getSession = sessionStorage.getItem('user')
        setUserSession(getSession)
        if(getSession){
            router.push('/profile')
        }
    },[])

    // Handle Upload KTP
    const handleUploadKTP = async (e: ChangeEvent<HTMLInputElement>) => {
        const validImageTypes = ['jpg', 'jpeg', 'png'];
        setLoadImage(true)
        if(e.target.files?.length) { 
            const folder = 'user/';
            let ext = e.target.files[0].name.split('.').pop();
            ext = ext ? ext : ''; // To ensure ext is not undefined
          
            if (validImageTypes.includes(ext.toLowerCase())) {
                const imagePath = await uploadFile(e.target.files[0], folder);
                const imageUrl = await getFile(imagePath);
                setKTP(imageUrl); // Assuming setKTP is a state setter or function somewhere in your code
                setLoadImage(false);
            } else {
                setErrKtp('wrong file extension');
                setLoadImage(false)
            }
        }  
        setLoadImage(false)      
    }

    const onSubmit: SubmitHandler<FormRegistration> = async (data) => {
        setErrorSignUp('')
        if(captcha != ''){
        try{
            const res = await createUserWithEmailAndPassword(data.email, data.password)
            if (res?.user) {
                const createUser = await createUserToFirestore(res?.user.uid, data);
                sessionStorage.setItem('user', res?.user.uid);
                router.push('/profile')
            } else {
                throw new Error('User was found');
            }

        } catch(err){
            console.log(err)
            setErrorSignUp('Email Telah digunakan!')
        }
        }
        else{
            setErrCaptcha(true)
        }
    }


    // Handle Create Doc based on UID
    const createUserToFirestore = async (uid:string, data:FormRegistration) =>{
        const {checked, firstName, lastName, tempatLahir, tanggalLahir, email, password, phone, instagram, city} = data
        try{
            const dataCollection = collection(getFirestore(app),'user');
            const dataDoc = doc(dataCollection, uid)
            setDoc(dataDoc,{
                uid,
                type : "online",
                checked, 
                firstName, 
                lastName, 
                tempatLahir, 
                tanggalLahir, 
                email, 
                password, 
                phone, 
                instagram, 
                city,
                ktp,
                createdAt : Timestamp.now()
            })
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div style={{
            backgroundImage: "url('./KV.png')",
            backgroundRepeat: "no-repeat", 
            backgroundSize: "cover",
        }} className="min-h-screen mx-auto overflow-y-hidden bg-fixed bg-cover bg-center bg-no-repeat shadow-lg">
            {(isLoading || loadImage) && <Loading />}
            <div className="container flex items-center justify-center flex-1 h-full mx-auto py-8">
                <form onSubmit={handleSubmit(onSubmit)} className='bg-base-100 w-11/12 md:w-7/12 px-8 py-8'>
                    {/* <img className='font-semibold text-lg w-32' src={'cimb_niaga.png'}/> */}
                    <h3 className='font-semibold text-2xl md:mt-3 my-3 text-center text-white'>CIMB Niaga Rising Start 2024</h3>
                    <h3 className='font-semibold text-lg mt-1 text-center text-white'>ONLINE REGISTRATION</h3>
                    <div className='md:px-12 px-2 mt-8'>
                        <p className='text-sm text-white font-semibold'>Publication Conformation</p>
                        <p className='text-white text-sm text-justify my-1.5'>Saya dengan ini memberikan persetujuan untuk mempublikasi material konten yang mengandung keterlibatan saya dalam proses audisi dari Rising Start CIMB Niaga. Saya mengerti bahwa konten tersebut dapat berupa video, audio, foto, atau tulisan yang menampilkan atau menggambarkan diri saya dalam konteks audisi, dan saya dengan sadar memberikan hak kepada CIMB Niaga untuk menggunakan dan mempublikasikan konten tersebut di berbagai media termasuk namun tidak terbatas pada media sosial, website, iklan, dan publikasi lainnya. </p>
                        <p className='text-white text-sm text-justify my-1.5'>Saya memahami bahwa konten yang dipublikasikan oleh CIMB Niaga dapat dilihat oleh masyarakat luas dan dapat diakses oleh siapa saja di seluruh dunia. Saya juga mengerti bahwa saya tidak akan menerima kompensasi atau penggantian apapun atas penggunaan konten tersebut oleh CIMB Niaga. </p>
                        <p className='text-white text-sm text-justify my-1.5'>Saya menyatakan bahwa saya memiliki hak untuk memberikan persetujuan ini kepada CIMB Niaga. Saya juga menjamin bahwa konten tersebut tidak melanggar hak cipta, hak privasi, atau hak lainnya dari pihak ketiga. </p>
                        <p className='text-white text-sm text-justify my-1.5'>Dengan ini, saya menyatakan persetujuan saya secara sukarela dan tanpa paksaan untuk mempublikasikan konten audisi saya dalam talent search CIMB Niaga.</p>
                        <input {...register("checked",{required:true})} type="checkbox" className="mt-2 cursor-pointer"  /><span className='text-white ml-2 mt-2 text-sm'>Saya Setuju</span> {errors.checked && <span className='text-xs text-red-500'>Required Check</span>}
                        <div className='flex flex-col md:flex-row justify-between md:gap-5'>
                            <div className='flex flex-col mt-6 flex-1'>
                                <label className='text-xs text-opacity-50' id="first-name">Nama Depan </label>
                                {errors.firstName && <p className='text-xs text-red-500'>Required 3-20 characters</p>}
                                <input {...register("firstName",{required:true, minLength: 3, maxLength: 20})} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' type='text' placeholder='Nama Depan' />
                            </div>
                            <div className='flex flex-col mt-6 flex-1'>
                                <label className='text-xs text-opacity-50' id="last-name">Nama Akhir</label>
                                {errors.lastName && <p className='text-xs text-red-500'>Required 3-20 characters</p>}
                                <input {...register("lastName",{required:true, minLength:3, maxLength:20})} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' type='text' placeholder='Nama Akhir'  />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between md:gap-5'>
                            <div className='flex flex-col mt-6 flex-1'>
                            <label className='text-xs text-opacity-50' id="tempat-lahir">Tempat Lahir</label>
                            {errors.tempatLahir && <p className='text-xs text-red-500'>Required 3-20 characters</p>}
                            <input {...register("tempatLahir",{required:true, minLength:3, maxLength:20})} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1'  type='text' placeholder='Jakarta'  />
                            </div>
                            <div className='flex flex-col mt-6 flex-1'>
                            <label className='text-xs text-opacity-50' id="tanggal-lahir">Tanggal Lahir</label>
                            {errors.tanggalLahir && <p className='text-xs text-red-500'>Required</p>}
                            <input {...register("tanggalLahir",{required:true})} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1'  type='date' placeholder='dd/mm/yy'  />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between md:gap-5'>
                            <div className='flex flex-col mt-6 flex-1'>
                                <label className='text-xs text-opacity-50' id="email">Email</label>
                                {errors.email && <p className='text-xs text-red-500'>Required 3-100 characters</p>}
                                <input {...register("email",{required:true, minLength:3, maxLength:100})} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' type='email' placeholder='email@gmail.com'  />
                            </div>
                            <div className='flex flex-col mt-6 flex-1'>
                                <label className='text-xs text-opacity-50' id="password">Password</label>
                                {errors.password && <p className='text-xs text-red-500'>Required 3-20 characters</p>}
                                <input {...register("password",{required:true, minLength:3, maxLength:20})} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1'  type='password' placeholder='********'  />
                            </div>
                        </div>
                        <div className='flex flex-col md:flex-row justify-between md:gap-5'>
                            <div className='flex flex-col mt-6 flex-1'>
                                <label className='text-xs text-opacity-50' id="phone">No. Telephone</label>
                                {errors.phone && <p className='text-xs text-red-500'>Required 3-20 characters</p>}
                                <input {...register("phone",{required:true, minLength:3, maxLength:20})} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' type='text' placeholder='08111111111' />
                            </div>
                            <div className='flex flex-col mt-6 flex-1'>
                                <label className='text-xs text-opacity-50' id="instagram">Akun Instagram</label>
                                {errors.instagram && <p className='text-xs text-red-500'>Required 3-20 characters</p>}
                                <input {...register("instagram",{required:true, minLength:3, maxLength:20})} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1' type='text' placeholder='@risingstart2024'  />
                            </div>
                        </div>
                        <div className='flex flex-col mt-6 flex-1'>
                            <label className='text-xs text-opacity-50' id="city">Asal Kota</label>
                            {errors.city && <p className='text-xs text-red-500'>Required 3-20 characters</p>}
                            <input {...register("city",{required:true, minLength:3, maxLength:20})} className='px-3 py-2 bg-white text-md text-slate-800 border-none mt-1'  type='text' placeholder='Semarang'  />
                        </div>
                        <div className='flex flex-col mt-6 flex-1'>
                            <p className='text-xs text-red-500'>{errKtp}</p>
                            <label className='text-xs text-opacity-50' id="city">Foto KTP</label>
                            <input required onChange={e=>handleUploadKTP(e)} type="file" accept='image/*'  className="file-input mt-1 file-input-bordered file-input-red-700 w-full" />                        
                        </div>
                        <div className='flex flex-col mt-6 flex-1'>
                            {errCaptcha && <p className='text-xs text-red-500 text-center mb-2'>verifikasi diperlukan!</p>}
                            <ReCAPTCHA sitekey={process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_CLIENT_SIDE!} className='mx-auto' onChange={setCaptcha} />
                        </div>
                    </div>
                    {/* <p className='px-12 mt-4 text-sm'>Sudah registrasi? <Link className='underline' href="/login">Masuk Disini</Link></p> */}
                    <p className={`text-red-900 px-8 py-4 mx-auto md:w-7/12 bg-red-300 bg-opacity-80 text-center mt-5 text-sm ${errorSignUp == '' ? 'hidden': 'block'}`}>{errorSignUp}</p>
                    <div className='md:px-12 px-4 flex justify-end gap-5'>
                        <Link href={'/'} className='text-red-700 px-8 py-2 mt-8 btn'>Kembali</Link>
                        <button onClick={()=>setIsLoading(!isLoading)} type="submit" className='bg-red-700 px-8 py-2 mt-8'>Daftar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterOnline