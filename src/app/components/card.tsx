import Link from 'next/link';
import React from 'react'

interface CardProps {
    city: string;
    img: string;
    quota: number;
    tanggal: string;
    data: number;
    place: string;
    isDisable: boolean;
}

const Card: React.FC<CardProps> = ({ city, img, quota, tanggal, data, place, isDisable}) => {
    return (
        <div className="w-56 bg-base-100 bg-opacity-80 backdrop-blur flex flex-col md:p-8 md:py-5 pt-5 border border-neutral md:border-opacity-50">
            <img className='border border-neutral border-opacity-60 rounded-full md:w-36 md:h-36 h-12 w-12 text-center mx-auto object-cover' src={img} alt="Shoes" />
            <h2 className='text-center font-semibold md:text-2xl text-xl mt-2'>{city}</h2>
            <p className='text-center font-semibold text-md mt-4'>{tanggal}</p>
            <p className='text-center text-sm mt-2'>{place}</p>
            {isDisable ? 
            <Link href="#" className="bg-slate-700 rounded-none border-none px-8 py-2 text-sm text-center mt-4 cursor-none hover:shadow-none ">Telah Berlangsung</Link>
            :
            <Link href="/register-offline" className="bg-red-700 rounded-none border-none px-8 py-2 text-sm text-center mt-4 shadow-[0_10px_50px_rgba(185,_28,_28,_0.5)] hover:bg-primary/80 hover:shadow-none">Daftar di Sini</Link>
            }            
            {quota - data <= 10 ? 
            (<p className='text-center text-md mt-2'>Kuota tersisa {quota-data}</p>)
            :
            null
            }
            
        </div>
    );
};


export default Card