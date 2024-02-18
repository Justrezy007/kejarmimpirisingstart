"use client"
import React,{useState} from 'react'

const Requirement = () => {
    const [isModalOfflineOpen, setModalOfflineOpen] = useState(false);
    const [isModalOnlineOpen, setModalOnlineOpen] = useState(false);
    return (
        <div className="bg-base-100 w-11/12 mx-auto overflow-hidden relative lg:flex lg:items-center">
            {isModalOfflineOpen && (
                <div className="modal" id="my_modal_1">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                    <button className="btn" onClick={()=>setModalOfflineOpen(!isModalOfflineOpen)}>
                        Close
                    </button>
                    </div>
                </div>
                </div>
            )}
            {isModalOnlineOpen && (
                <div className="modal" id="my_modal_1">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Hello!</h3>
                    <p className="py-4">Press ESC key or click the button below to close</p>
                    <div className="modal-action">
                    <button className="btn" onClick={()=>setModalOnlineOpen(!isModalOfflineOpen)}>
                        Close
                    </button>
                    </div>
                </div>
                </div>
            )}
            <div className="flex-1 order-2 py-12 px-4 sm:px-6 lg:py-20 lg:px-2 z-20">
                <h2 className="text-3xl font-extrabold text-black dark:text-white sm:text-4xl">
                    <span className="block">Syarat & Ketentuan Peserta</span>
                </h2>
                <p className="text-lg font-bold mt-4 text-neutral-100">
                    Syarat Peserta
                </p>
                <ul className='list-disc ml-4'>
                    <li className='my-1'>Berkewarganegaraan Indonesia dengan rentang usia 12 - 40 tahun</li>
                    <li className='my-1'>Peserta hanya diperbolehkan untuk mengikuti kompetisi dalam satu skema saja (Offline/Online)</li>
                    <li className='my-1'>Peserta yang berdomisili di kota tempat skema offline dilaksanakan (Palembang, Malang, Manado, Jakarta), wajib mengikuti kompetisi secara Offline</li>
                    <li className='my-1'>Apabila kuota kompetisi offline dalam domisili tersebut telah habis, maka diperbolehkan untuk melakukan kompetisi secara online</li>
                </ul>
                <div className='mt-4 flex flex-row flex-wrap gap-5'>
                    <button className="btn px-6 btn-primary" onClick={()=>setModalOfflineOpen(!isModalOfflineOpen)}>Ketentuan Offline</button>
                    <button className="btn text-primary" onClick={()=>setModalOnlineOpen(!isModalOnlineOpen)}>Ketentuan Online</button>
                </div>
            </div>
            <div className="flex order-1 items-center gap-2 lg:p-28">
                <img src={'./Requirement.png'} className="w-80 rounded-lg drop-shadow-[0_20px_50px_rgba(255,_255,_255,_0.5)]" alt="Tree" />
            </div>
        </div>


    )
}

export default Requirement