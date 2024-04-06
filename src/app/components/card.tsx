import Link from 'next/link';
import React from 'react'

interface CardProps {
    city: string;
    img: string;
    quota: number;
    tanggal: string;
}

const Card: React.FC<CardProps> = ({ city, img, quota, tanggal }) => {
    return (
        <div className="md:w-56 w-32 bg-base-100 bg-opacity-80 backdrop-blur flex flex-col md:p-8 py-5 border border-neutral border-opacity-50">
            <img className='border border-neutral border-opacity-60 rounded-full md:w-36 md:h-36 h-12 w-12 text-center mx-auto object-cover' src={img} alt="Shoes" />
            <h1 className='text-center font-semibold md:text-2xl text-xl mt-2'>{city}</h1>
            {/* <p className='text-center mt-2 md:text-4xl text-2xl font-black'>{quota} <sub className='text-sm font-normal'>Kuota</sub></p> */}
            {/* <h1 className='text-center font-semibold md:text-xl text-md mt-2'>{tanggal}</h1> */}
            <Link href="/register-offline" className="bg-red-700 rounded-none border-none px-8 py-2 text-sm text-center mt-4 shadow-[0_10px_50px_rgba(185,_28,_28,_0.5)] hover:bg-primary/80 hover:shadow-none">Daftar di Sini</Link>
        </div>
    );
};


export default Card