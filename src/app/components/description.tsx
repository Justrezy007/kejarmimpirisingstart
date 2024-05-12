'use client'
import React, { useState, useEffect } from 'react'

const Description = () => {
    const [count, setCount] = useState<number>(0)

    const imageShow = ["DSC06639.jpg", "DSC06474.jpg", "DSC00002.jpeg", "DSC06652.jpg"]

    useEffect(() => {
        if (count < imageShow.length) {
            const timer = setTimeout(() => {
                setCount(count + 1);
            }, 1500);
            return () => clearTimeout(timer);
        }
        else {
            setCount(0)
        }
    }, [count, imageShow.length]);

    return (
            <div
                id="event" className="w-full md:w-10/12 flex flex-col md:flex-row mx-auto pt-28 overflow-hidden relative lg:items-center">
                <div className="flex-1 md:order-1 order-2 md:py-12 pt-8 px-8 md:px-2 lg:py-16 z-20">
                    <h2 className="md:text-3xl text-2xl font-extrabold text-white sm:text-4xl">
                        <span className="block">
                        Kejar Mimpi Rising Start: <br />Singing Competition 2024
                        </span>
                    </h2>
                    <p className="text-md mt-4 text-gray-300 text-justify">
                    Kejar Mimpi Rising Start Singing Competition 2024 adalah salah satu aktivasi program Kejar Mimpi, dimana CIMB Niaga mencari penyanyi bertalenta di seluruh Indonesia. Pemenang akan berkesempatan untuk menyanyikan lagu &quot;Kejar Mimpimu&quot; karya Dee Lestari bersama penyanyi papan atas Indonesia di Konser Kejar Mimpi untuk Indonesia 2024. 
                    </p>
                    <p className="text-md mt-4 text-gray-300">
                    Tahun ini, kompetisi akan diadakan lintas negara-negara di ASEAN yang merupakan bagian dari CIMB Group. 
                    </p>
                    <p className="text-md mt-4 text-gray-300">
                    Yuk, #KejarMimpi bersama CIMB Niaga!
                    </p>
                </div>
                <div className="flex justify-center md:order-2 order-1 flex-1 items-center gap-2 lg:p-24">
                    <img src={`./Gallery_Judges/${imageShow[count]}`} className="md:w-96 w-72 rounded-lg drop-shadow-[0_20px_50px_rgba(8,_112,_184,_0.2)]" alt="Tree" />
                </div>
            </div>

    )
}

export default Description