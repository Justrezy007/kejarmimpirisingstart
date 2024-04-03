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
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [instagram, setInstagram] = useState('')
    const [city, setCity] = useState('')
    const [ktp, setKTP] = useState('')
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
            setCity(userData?.data()?.city)
            setKTP(userData?.data()?.ktp)
            setType(userData?.data()?.type)
        }
    },[user, userSession, userData])
    

    return (
        <div className="bg-white shadow-lg rounded-2xl w-full dark:bg-gray-800">
            {/* Pop Up Editor */}
            {editor ? 
            <div className='fixed bg-black bg-opacity-80 w-full h-screen flex justify-center items-center z-50 y-16'>
                {/* <form className='bg-base-100 w-7/12 h-full px-8 py-8 overflow-y-auto '>
                    <p className='font-semibold text-lg'>RISING START <br /> 2024.</p>
                    <h3 className='font-semibold text-2xl mt-3 text-center text-white'>CIMB Niaga Rising Start 2024</h3>
                    <h3 className='font-semibold text-lg mt-1 text-center text-white uppercase'>{type} REGISTRATION</h3>
                    <div className='px-12 mt-8'>
                        <div className='flex justify-between gap-5'>
                            <div className='flex flex-col mt-6'>
                                <label className='text-xs text-opacity-50' id="first-name">Nama Depan</label>
                                <input className='px-3 py-2 bg-white border-none mt-1' name="first-name" type='text' placeholder='Nama Awal' onChange={(e) => setFirstName(e.currentTarget.value)} />
                            </div>
                            <div className='flex flex-col mt-6'>
                                <label className='text-xs text-opacity-50' id="last-name">Nama Akhir</label>
                                <input className='px-3 py-2 bg-white border-none mt-1' name="last-name" type='text' placeholder='Nama Akhir' onChange={(e) => setLastName(e.currentTarget.value)} />
                            </div>
                        </div>
                        <div className='flex flex-col mt-6'>
                            <label className='text-xs text-opacity-50' id="tempat-tanggal-lahir">Tempat, Tanggal Lahir</label>
                            <input className='px-3 py-2 bg-white border-none mt-1' name="tempat-tanggal-lahir" type='text' placeholder='Jakarta, 3 Oktober 2000' onChange={(e) => setTempatTanggalLahir(e.currentTarget.value)} />
                        </div>
                        <div className='flex justify-between gap-5'>
                            <div className='flex flex-col mt-6'>
                                <label className='text-xs text-opacity-50' id="email">Email</label>
                                <input className='px-3 py-2 bg-white border-none mt-1' name="email" type='text' placeholder='email@gmail.com' onChange={(e) => setEmail(e.currentTarget.value)} />
                            </div>
                            <div className='flex flex-col mt-6'>
                                <label className='text-xs text-opacity-50' id="password">Password</label>
                                <input className='px-3 py-2 bg-white border-none mt-1' name="password" type='password' placeholder='********' onChange={(e) => setPassword(e.currentTarget.value)} />
                            </div>
                        </div>
                        <div className='flex justify-between gap-5'>
                            <div className='flex flex-col mt-6'>
                                <label className='text-xs text-opacity-50' id="phone">No. Telephone</label>
                                <input className='px-3 py-2 bg-white border-none mt-1' name="phone" type='text' placeholder='08111111111' onChange={(e) => setPhone(e.currentTarget.value)} />
                            </div>
                            <div className='flex flex-col mt-6'>
                                <label className='text-xs text-opacity-50' id="instagram">Akun Instagram</label>
                                <input className='px-3 py-2 bg-white border-none mt-1' name="instagram" type='text' placeholder='@risingstart2024' onChange={(e) => setInstagram(e.currentTarget.value)} />
                            </div>
                        </div>
                        <div className='flex flex-col mt-6'>
                            <label className='text-xs text-opacity-50' id="city">Asal Kota</label>
                            <input className='px-3 py-2 bg-white border-none mt-1' name="city" type='text' placeholder='Semarang' onChange={(e) => setCity(e.currentTarget.value)} />
                        </div>
                        <div className='flex flex-col mt-6'>
                            <label className='text-xs text-opacity-50' id="city">Foto KTP</label>
                            <input type="file" className="file-input mt-1 file-input-bordered file-input-red-700 w-full" />
                        </div>
                    </div>
                    <div className='px-12 flex justify-end'>
                        <button className='bg-red-700 px-8 py-2 mt-8'>Simpan Perubahan</button>
                        <button onClick={e => setEditor(!editor)} className='text-red-700 px-8 py-2 mt-8'>Kembali</button>
                    </div>
                </form> */}
            </div>
            : null}
            <img alt="profil" src="/KV.png" className="w-full mb-4 object-cover rounded-t-lg h-80" />
            <div className="flex flex-col items-center justify-center p-4 -mt-24">
                <div className="relative block">
                    <img alt="profil" src="/avatar_boy.png" className="mx-auto object-cover rounded-full h-36 w-36  border-2 border-white dark:border-gray-800" />
                </div>
                <p className="mt-2 text-xl font-medium text-gray-800 dark:text-white">
                    {fullName}
                </p>
                <p className="mb-4 text-xs text-gray-400 capitalize">
                    {type} Participant
                </p>
                <div className="md:w-5/12 w-full mx-auto p-2 mt-4 rounded-lg">
                    <div className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-200">
                        <div>
                            <p className="flex flex-col">
                                Nama
                                <span className="font-bold text-black dark:text-white">
                                    {fullName}
                                </span>
                            </p>
                            <p className="flex flex-col mt-4">
                                No. Telp
                                <span className="font-bold text-black dark:text-white">
                                    {phone}
                                </span>
                            </p>
                            <p className="flex flex-col mt-4">
                                Instagram
                                <span className="font-bold text-black dark:text-white">
                                    {instagram}
                                </span>
                            </p>
                        </div>
                        <div>
                            <p className="flex flex-col">
                                Tempat, Tanggal Lahir
                                <span className="font-bold text-black dark:text-white">
                                    {tempatLahir},{tanggalLahir}
                                </span>
                            </p>
                            <p className="flex flex-col mt-4">
                                Email
                                <span className="font-bold text-black dark:text-white">
                                    {email}
                                </span>
                            </p>
                            <p className="flex flex-col mt-4">
                                Kota Asal
                                <span className="font-bold text-black dark:text-white">
                                    {city}
                                </span>
                            </p>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        {/* <button onClick={e => setEditor(!editor)} className='px-8 py-1.5 bg-red-700 mt-8'>Ubah Data</button>      */}
                        <button onClick={e=> handleSignOut(e)}className='text-white bg-red-700 px-8 py-2 mt-8'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Profile