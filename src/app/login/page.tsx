'use client'
import React,{useState, useEffect} from 'react'
import {useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import {auth} from "@/app/firebase/config"
import {useRouter} from 'next/navigation'
import Link from 'next/link'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [errorLogin, setErrorLogin] = useState('')

    const [userSession, setUserSession] = useState<string|null>('')

    const router = useRouter()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    useEffect(()=>{
        const getSession = sessionStorage.getItem('user')
        setUserSession(getSession)
        if(getSession){
            router.push('/profile')
        }
    },[])

    const handleSignIn = async (e:any)=>{
        e.preventDefault()

        try {
            const res: any = await signInWithEmailAndPassword(email, password);
            if(res){
                sessionStorage.setItem('user', res?.user.uid || '');
                setEmail('');
                setPassword('');
                router.push('/profile')
            }
            else{
                setErrorLogin('Data yang anda masukkan salah!')
            }
        } catch (err) {
            setErrorLogin('Terjadi Kesalahan')
        }
    }
    return (
        <div style={{
            backgroundImage: "url('./KV.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }} className="h-screen mx-auto overflow-y-hidden bg-fixed bg-cover bg-center bg-no-repeat shadow-lg">
            <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                <form className='bg-base-100 md:w-6/12 w-11/12 px-8 py-8'>
                    <p className='font-semibold text-lg'>RISING START <br /> 2024.</p>
                    <h3 className='font-semibold text-2xl mt-3 text-center text-white'>LOGIN WITH YOUR ACCOUNT</h3>
                    <div className='md:px-12 px-4 mt-8'>
                        <div className='flex flex-col'>
                            <label className='text-xs text-opacity-50' id="email">Email</label>
                            <input required className='px-3 py-2 bg-white text-slate-800 border-none mt-1' name="email" type='email' placeholder='email@gmail.com' value={email} onChange={(e)=>setEmail(e.currentTarget.value)} />
                        </div>
                        <div className='flex flex-col mt-6'>
                            <label className='text-xs text-opacity-50' id="password">Password</label>
                            <input required className='px-3 py-2 bg-white text-slate-800 border-none mt-1' name="password" type='password' placeholder='********' value={password} onChange={(e)=>setPassword(e.currentTarget.value)} />
                        </div>
                    </div>
                    <p className='md:px-12 px-4 mt-4 text-sm'>Belum registrasi? <Link className='underline' href="/">Klik Disini</Link></p>
                    <p className={`text-red-900 px-8 py-4 mx-auto md:w-7/12 bg-red-300 bg-opacity-80 text-center mt-5 text-sm ${errorLogin == '' ? 'hidden':'block'}`} >{errorLogin}</p>
                    <div className='md:px-12 px-4 flex justify-end'>
                        <Link href={'/'} className='text-red-700 px-8 py-2 mt-8'>Kembali</Link>
                        <button onClick={e=>handleSignIn(e)} className='bg-red-700 px-8 py-2 mt-8'>Masuk</button>
                    </div>                    
                </form>
            </div>
        </div>
    )
}

export default Login