"use client"
import React, { useState } from 'react'

const Requirement = () => {
    const [isModalOfflineOpen, setModalOfflineOpen] = useState(false);
    const [isModalOnlineOpen, setModalOnlineOpen] = useState(false);
    return (
        <div className="bg-base-100 md:w-10/12 w-full mx-auto overflow-hidden relative flex md:flex-row flex-col lg:items-center">

            {isModalOfflineOpen && (
                <div className="w-screen h-screen fixed bg-black bg-opacity-50 flex justify-center items-center top-0 left-0 z-50" id="my_modal_1">
                    <div className="modal-box px-12">
                        <h3 className="font-bold text-lg">Ketentuan Skema Offline</h3>
                        <ul className="list-disc">
                            <li>Registrasikan diri peserta pada link registrasi cimb.id/RisingStart dan pilih sesuai domisili peserta</li>
                            <li>Dalam waktu maksimal 2x24 jam, kami akan mengirimkan pesan Whatsapp terkait informasi lebih detail beserta konfirmasi jadwal audisi di kota domisili yang peserta pilih.</li>
                            <li>Apabila kuota audisi offline penuh, peserta dapat mendaftarkan diri pada skema online</li>
                            <li>Persiapkan diri peserta dalam menyanyikan lagu Kejar Mimpimu - Dee Lestari (Indonesia/English Version) dari bagian intro hingga reff di hari audisi</li>
                            <li>Datang ke tempat audisi 1 jam sebelumnya dari jadwal yang terlampir dalam pesan Whatsapp konfirmasi  </li>
                            <li>Lakukan registrasi ulang dan pengambilan nomor antrian audisi</li>
                            <li>Tunggu hingga nomor pendaftaran audisi peserta dipanggil oleh panitia</li>
                            <li>Waktu audisi akan berlangsung kurang lebih 5 menit, peserta dapat menggunakan instrumen musik dan atau diiringi dengan lagu Kejar Mimpimu - Dee Lestari (Minus One)</li>
                        </ul>
                        <div className="modal-action">
                            <button className="btn bg-red-600" onClick={() => setModalOfflineOpen(!isModalOfflineOpen)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
            {isModalOnlineOpen && (
                <div className="w-screen h-screen fixed bg-black bg-opacity-50 flex justify-center items-center top-0 left-0 z-50" id="my_modal_1">
                    <div className="modal-box px-12">
                        <h3 className="font-bold text-lg">Ketentuan Skema Online</h3>
                        <ul className="list-disc">
                            <li>Peserta menyanyikan lagu Kejar Mimpimu - Dee Lestari (Indonesia/English Version) dan mempublikasikannya ke akun Instagram atau TikTok pribadi dengan format video yang dibebaskan.</li>
                            <li>Dalam pembuatan video, boleh menggunakan instrumen dan dilarang dalam menggunakan filter suara atau mixing. Jangan lupa disertai tampilan video yang memperlihatkan wajah secara keseluruhan</li>
                            <li>Perkenalkan secara singkat diri peserta dalam caption serta alasan mengapa ingin terpilih menjadi pemenang. Gunakan Hashtag #RisingStartSingerIDN, tag @cimb_niaga & @kejarmimpi.id, serta pastikan akun sosial media telah terbuka secara umum </li>
                            <li>Apabila video sudah dipublikasi, registrasikan diri peserta dengan data yang sesuai dengan identitas dan  jangan lupa untuk melampirkan bukti upload sesuai dengan prosedur pada form.</li>
                        </ul>
                        <div className="modal-action">
                            <button className="btn bg-red-600" onClick={() => setModalOnlineOpen(!isModalOnlineOpen)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex-1  order-2 py-12 px-8 md:px-4 sm:px-6 lg:py-20 lg:px-2 z-20">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">Syarat & Ketentuan Peserta</span>
                </h2>
                <p className="text-lg font-bold mt-4 text-neutral-100">
                    Syarat Peserta
                </p>
                <ul className='list-disc ml-4'>
                    <li className='my-1'>Berkewarganegaraan Indonesia dengan rentang usia 12 - 40 tahun</li>
                    <li className='my-1'>Peserta wajib memiliki akun OCTO Pay di OCTO Mobile dengan minimal deposit Rp10.000</li>
                    <li className='my-1'>Peserta hanya diperbolehkan untuk mengikuti kompetisi dalam satu skema SAJA (offline/online)</li>
                    <li className='my-1'>Peserta yang berdomisili di kota tempat Skema offline dilaksanakan (Manado, Jogja, dan Jakarta), wajib mengikuti kompetisi secara offline. Apabila kuota kompetisi offline dalam domisili tersebut telah habis, maka diperbolehkan untuk melakukan kompetisi secara online</li>
                </ul>
                <div className='mt-4 flex flex-row flex-wrap gap-5'>
                    <button className="btn px-6 bg-red-700 rounded-none border-none" onClick={() => setModalOfflineOpen(!isModalOfflineOpen)}>Ketentuan Offline</button>
                    <button className="btn text-red-700 rounded-none" onClick={() => setModalOnlineOpen(!isModalOnlineOpen)}>Ketentuan Online</button>
                </div>
            </div>
            <div className="flex justify-center order-1 items-center md:py-0 py-14 gap-2 lg:p-28">
                <img src={'./Requirement.png'} className="w-80 rounded-lg drop-shadow-[0_20px_50px_rgba(255,_255,_255,_0.2)]" alt="Tree" />
            </div>
        </div>


    )
}

export default Requirement