import React from 'react'

interface CardProps {
    city: string;
    img: string;
    quota: number;
}

const Card: React.FC<CardProps> = ({ city, img, quota }) => {
    return (
        <div className="w-56 bg-base-100 bg-opacity-80 backdrop-blur flex flex-col p-8 border border-neutral border-opacity-50">
            <img className='border border-neutral border-opacity-60 rounded-full h-36 w-36 text-center mx-auto object-cover' src={img} alt="Shoes" />
            <h1 className='text-center font-semibold text-2xl mt-2'>{city}</h1>
            <p className='text-center mt-2 text-4xl font-black'>{quota}</p>
            <p className='text-center'>Kuota</p>
        </div>
    );
};


export default Card