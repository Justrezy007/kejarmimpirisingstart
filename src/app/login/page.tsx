'use client'
import React,{useState} from 'react'

const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    return (
        <div style={{
            backgroundImage: "url('./KV.jpg')",
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
                            <input className='px-3 py-2 bg-white border-none mt-1' name="email" type='text' placeholder='email@gmail.com' onChange={(e)=>setEmail(e.currentTarget.value)} />
                        </div>
                        <div className='flex flex-col mt-6'>
                            <label className='text-xs text-opacity-50' id="password">Password</label>
                            <input className='px-3 py-2 bg-white border-none mt-1' name="password" type='text' placeholder='********' onChange={(e)=>setPassword(e.currentTarget.value)} />
                        </div>
                    </div>
                    <p className='px-12 mt-4 text-sm'>Belum registrasi? <a className='underline text-red-700' href="#">Klik Disini</a></p>
                    <div className='px-12 flex justify-end'>
                        <button className='bg-red-700 px-8 py-2 mt-8'>Masuk Sekarang</button>
                    </div>                    
                </form>
            </div>
        </div>
    )
}

export default Login