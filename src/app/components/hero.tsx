'use client'
import Link from 'next/link';
import React,{useState} from 'react'
import { FaAnglesRight, FaArrowRightLong } from "react-icons/fa6";
import Loading from './loading';

const Hero = () => {
    const [isLoading, SetIsLoading] = useState<boolean>(false)

    return (
        <div id="register" style={{
            backgroundImage: "url('./KV.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }} className="hero md:min-h-screen md:h-[42rem] mx-auto bg-cover bg-center bg-no-repeat shadow-lg">
            {isLoading && <Loading />}
            <div className="hero-content text-center mx-auto w-full"> {/* Fixed typo here */}
                <div className="w-full flex flex-col items-center">
                    <div className='flex items-center justify-around w-6/12 mt-72 gap-5 flex-wrap'>
                        <Link href={'/#'} className="btn uppercase cursor-default rounded-none px-8 bg-slate-700 border-none backdrop-blur hover:bg-opacity-100 btn-white hover:shadow-none"><span>Daftar Audisi Online</span></Link>
                        <Link href={'/#'} className="btn uppercase cursor-default rounded-none px-8 bg-slate-700 border-none backdrop-blur hover:bg-opacity-100 btn-white hover:shadow-none"><span>Daftar Audisi Offline</span></Link>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Hero