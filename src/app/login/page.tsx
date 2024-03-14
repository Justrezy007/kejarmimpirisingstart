'use client'
import React,{useState} from 'react'
import {useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth'
import {auth} from "@/app/firebase/config"
import {useRouter} from 'next/navigation'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    const router = useRouter()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    const handleSignIn = async (e:any)=>{
        e.preventDefault()

        try {
            const res: any = await signInWithEmailAndPassword(email, password);
            sessionStorage.setItem('user', res?.user.uid || '');
            setEmail('');
            setPassword('');
            router.push('/profile')
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <div style={{
            backgroundImage: "url('./KV.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }} className="h-screen mx-auto overflow-y-hidden bg-fixed bg-cover bg-center bg-no-repeat shadow-lg">
            <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                <form className='bg-base-100 w-6/12 px-8 py-8'>
                    <p className='font-semibold text-lg'>RISING START <br /> 2024.</p>
                    <h3 className='font-semibold text-2xl mt-3 text-center text-white'>LOGIN WITH YOUR ACCOUNT</h3>
                    <div className='px-12 mt-8'>
                        <div className='flex flex-col'>
                            <label className='text-xs text-opacity-50' id="email">Email</label>
                            <input className='px-3 py-2 bg-white text-slate-800 border-none mt-1' name="email" type='email' placeholder='email@gmail.com' value={email} onChange={(e)=>setEmail(e.currentTarget.value)} />
                        </div>
                        <div className='flex flex-col mt-6'>
                            <label className='text-xs text-opacity-50' id="password">Password</label>
                            <input className='px-3 py-2 bg-white text-slate-800 border-none mt-1' name="password" type='password' placeholder='********' value={password} onChange={(e)=>setPassword(e.currentTarget.value)} />
                        </div>
                    </div>
                    <p className='px-12 mt-4 text-sm'>Belum registrasi? <a className='underline text-red-700' href="#">Klik Disini</a></p>
                    <div className='px-12 flex justify-end'>
                        <button onClick={e=>handleSignIn(e)} className='bg-red-700 px-8 py-2 mt-8'>Masuk Sekarang</button>
                    </div>                    
                </form>
            </div>
        </div>
    )
}

export default Login