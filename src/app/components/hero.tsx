import Link from 'next/link';
import React from 'react'
import { FaAnglesRight, FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
    return (
        <div id="register" style={{
            backgroundImage: "url('./KV.png')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }} className="hero md:min-h-screen h-[42rem] mx-auto overflow-y-hidden bg-cover bg-center bg-no-repeat shadow-lg">
            <div className="hero-content text-center"> {/* Fixed typo here */}
                <div className="w-full flex flex-col items-center">
                    {/* <h1 className="text-5xl font-bold">CIMB Niaga Rising Start 2024</h1> */}
                    {/* <p className="py-6 text-xl">Jadilah Vokalis di Konser Kejar Mimpi 2024!</p> */}
                    <div className='flex items-center justify-around w-9/12 mt-72 gap-5'>
                        <Link href={'/register-online'} className="btn uppercase rounded-none px-4 md:px-8 bg-red-700 border-none backdrop-blur hover:bg-opacity-100 btn-white shadow-[0_20px_50px_rgba(185,_28,_28,_0.7)] hover:shadow-none"><FaAnglesRight /><span>Registrasi Online</span></Link>
                        <Link href={'/register-offline'} className="btn uppercase rounded-none px-4 md:px-8 bg-red-700 border-none backdrop-blur hover:bg-opacity-100 btn-white shadow-[0_20px_50px_rgba(185,_28,_28,_0.7)] hover:shadow-none"><FaArrowRightLong /><span>Registrasi Offline</span></Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Hero