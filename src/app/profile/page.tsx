'use client'
import React, { useEffect, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import {auth} from "@/app/firebase/config"
import {useRouter} from 'next/navigation'
import { signOut } from 'firebase/auth'
import { getFirestore,doc } from 'firebase/firestore';
import {useDocument} from 'react-firebase-hooks/firestore'
import {app} from "@/app/firebase/config"

const Profile = () => {
    const [editor, setEditor] = useState(false)
    const [checked, setChecked] = useState(false)
    const [fullName, setFullName] = useState('')
    const [tempatLahir, setTempatLahir] = useState('')
    const [tanggalLahir, setTanggalLahir] = useState('')
    const [email, setEmail] = useState('')
    const [tiktok, setTiktok] = useState('')
    const [phone, setPhone] = useState('')
    const [instagram, setInstagram] = useState('')
    const [city, setCity] = useState('')
    const [ktp, setKTP] = useState('')
    const [octopay, setOctopay] = useState('')
    const [linkVideo, setLinkVideo] = useState('')
    const [type, setType] = useState('')

    const [user] = useAuthState(auth)
    const router = useRouter()

    const [userSession, setUserSession] = useState<string|null>('')

    const [userData, loadingUserData, errorUserData] = useDocument(
        
        userSession ? doc(getFirestore(app),'user', userSession):null,{
            snapshotListenOptions: { includeMetadataChanges: true },
        }
    )

    const handleSignOut = (e:any) =>{
        e.preventDefault()
        signOut(auth)
        sessionStorage.removeItem('user')
    }

    useEffect(() =>{
        const getSession = sessionStorage.getItem('user')
        setUserSession(getSession)

        if(!getSession){
            router.push('/')
        }
        if(!loadingUserData){
            console.log(userData?.data())
            setFullName(userData?.data()?.fullName)
            setTempatLahir(userData?.data()?.tempatLahir)
            setTanggalLahir(userData?.data()?.tanggalLahir)
            setEmail(userData?.data()?.email)
            setPhone(userData?.data()?.phone)
            setInstagram(userData?.data()?.instagram)
            setTiktok(userData?.data()?.tiktok)
            setOctopay(userData?.data()?.nomorOcto)
            setLinkVideo(userData?.data()?.linkVideo)
            setCity(userData?.data()?.city)
            setKTP(userData?.data()?.nomorKtp)
            setType(userData?.data()?.type)
        }
    },[user, userSession, userData])
    

    return (
        <div className="bg-slate-950 shadow-lg rounded-2xl w-full ">
            {/* Pop Up Editor */}
            <img alt="profil" src="/BGProfile.jpg" className="w-full mb-4 object-cover rounded-t-lg h-80" />
            <div className="flex flex-col items-center justify-center p-4 -mt-24">
                <div className="relative block">
                    <img alt="profil" src="/avatar_boy.png" className="mx-auto object-cover rounded-full h-36 w-36  border-2 border-white" />
                </div>
                <p className="mt-2 text-xl font-medium text-slate-100">
                    {fullName}
                </p>
                <p className="mb-4 text-xs text-slate-100 capitalize">
                    {type} Participant
                </p>
                <p className='text-2xl mt-8 font-semibold text-white'>Selamat Anda Sudah Terdaftar Sebagai Berikut</p>
                <div className="md:w-5/12 w-full mx-auto p-2 mt-4 rounded-lg bg-slate-900 px-12 py-8">
                    <div className="flex items-center justify-between text-sm text-slate-300">
                        <div className='flex-1'>
                            <p className="flex flex-col">
                                Nama
                                <span className="font-semibold text-slate-100">
                                    {fullName}
                                </span>
                            </p>
                            <p className="flex flex-col mt-4">
                                No. Telp
                                <span className="font-semibold text-slate-100">
                                    {phone}
                                </span>
                            </p>
                            <p className="flex flex-col mt-4">
                                Instagram
                                <span className="font-semibold text-slate-100">
                                    {instagram}
                                </span>
                            </p>
                            <p className="flex flex-col mt-4">
                                Nomor KTP
                                <span className="font-semibold text-slate-100">
                                    {ktp}
                                </span>
                            </p>
                            <p className="flex flex-col mt-4">
                                Nomor Octopay
                                <span className="font-semibold text-slate-100">
                                    {octopay}
                                </span>
                            </p>
                        </div>
                        <div className='flex-1'>
                            <p className="flex flex-col">
                                Tempat, Tanggal Lahir
                                <span className="font-semibold text-slate-100 capitalize">
                                    {tempatLahir},{tanggalLahir}
                                </span>
                            </p>
                            <p className="flex flex-col mt-4">
                                Email
                                <span className="font-semibold text-slate-100">
                                    {email}
                                </span>
                            </p>
                            <p className="flex flex-col mt-4">
                                Tiktok
                                <span className="font-semibold text-slate-100">
                                    {instagram}
                                </span>
                            </p>
                            <p className="flex flex-col mt-4">
                                Kota Asal
                                <span className="font-semibold text-slate-100 capitalize">
                                    {city}
                                </span>
                            </p>
                            {(linkVideo == '') ? null:
                            
                            <p className="flex flex-col mt-4">
                                Link Video
                                <span className="font-semibold text-slate-100">
                                    {(linkVideo == '' )? '-' :linkVideo}
                                </span>
                            </p>
                            
                            }
                        </div>
                    </div>
                    <p className='mt-8 text-sm text-rose-500'>*Periksa Inbox E-mail Anda untuk Mendapat Detail Audisi Offline (Periksa Folder Junk dan&#47;atau Spam Apabila Tidak Ditemukan di Inbox) dan Bergabung dalam Grup Whatsapp Peserta</p>
                    <div className='flex justify-end'>
                        {/* <button onClick={e => setEditor(!editor)} className='px-8 py-1.5 bg-red-700 mt-8'>Ubah Data</button>      */}
                        <button onClick={e=> handleSignOut(e)}className='text-white bg-red-700 px-8 py-2 mt-8 rounded'>Kembali</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile