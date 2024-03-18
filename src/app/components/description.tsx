import React from 'react'

const Description = () => {
    return (

        <div id="event" className="bg-base-100 w-full md:w-10/12 flex flex-col md:flex-row mx-auto pt-28 overflow-hidden relative lg:items-center">
            <div className="flex-1 md:order-1 order-2 py-12 px-8 md:px-6 lg:py-16  z-20">
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
            <div className="flex justify-center md:order-2 order-1 flex-1 items-center gap-2 lg:p-24">
                <img src={'./Desc.png'} className="w-96 rounded-lg drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]" alt="Tree" />
            </div>
        </div>

    )
}

export default Description