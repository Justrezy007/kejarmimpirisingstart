import React from 'react'
import { FaAnglesRight, FaArrowRightLong } from "react-icons/fa6";


const Hero = () => {
    return (
        <div style={{
            backgroundImage: "url('./KV.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }} className="hero min-h-screen mx-auto overflow-y-hidden bg-cover bg-center bg-no-repeat shadow-lg">
            <div className="hero-content text-center"> {/* Fixed typo here */}
                <div className="w-full flex flex-col items-center">
                    {/* <h1 className="text-5xl font-bold">CIMB Niaga Rising Start 2024</h1> */}
                    {/* <p className="py-6 text-xl">Jadilah Vokalis di Konser Kejar Mimpi 2024!</p> */}
                    <div className='flex items-center justify-around w-9/12 mt-72 gap-5'>
                        <button className="btn uppercase rounded-none px-8 bg-red-700 border-none backdrop-blur hover:bg-opacity-100 btn-white shadow-[0_20px_50px_rgba(185,_28,_28,_0.7)] hover:shadow-none"><FaAnglesRight /><span>Registrasi Online</span></button>
                        <button className="btn uppercase rounded-none px-8 bg-red-700 border-none backdrop-blur hover:bg-opacity-100 btn-white shadow-[0_20px_50px_rgba(185,_28,_28,_0.7)] hover:shadow-none"><FaArrowRightLong /><span>Registrasi Offline</span></button>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Hero