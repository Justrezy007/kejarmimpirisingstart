import React from 'react'

interface CardProps {
    city: string;
    img: string;
    quota: number;
}

const Card: React.FC<CardProps> = ({ city, img, quota }) => {
    return (
        <div className="md:w-56 w-32 bg-base-100 bg-opacity-80 backdrop-blur flex flex-col md:p-8 py-5 border border-neutral border-opacity-50">
            <img className='border border-neutral border-opacity-60 rounded-full md:w-36 md:h-36 h-12 w-12 text-center mx-auto object-cover' src={img} alt="Shoes" />
            <h1 className='text-center font-semibold md:text-2xl text-xl mt-2'>{city}</h1>
            <p className='text-center mt-2 md:text-4xl text-2xl font-black'>{quota}</p>
            <p className='text-center md:text-md text-sm'>Kuota</p>
        </div>
    );
};


export default Card