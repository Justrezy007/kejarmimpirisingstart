import React from 'react'

const Description = () => {
    return (

        <div className="bg-base-100 w-10/12 mx-auto pt-28 overflow-hidden relative lg:flex lg:items-center">
            <div className="flex-1 py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block">
                        CIMB Niaga Rising Start 2024
                    </span>
                </h2>
                <p className="text-md mt-4 text-gray-400">
                    Raih kesempatan untuk tampil menjadi vokalis di Konser
                    Kejar Mimpi 2024 dengan sederet artis papan atas dari
                    Indonesia dan dapatkan total hadiah sebesar x rupiah!
                </p>
            </div>
            <div className="flex flex-1 items-center gap-2 lg:p-24">
                <img src={'./Desc.png'} className="w-96 rounded-lg drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.5)]" alt="Tree" />
            </div>
        </div>

    )
}

export default Description