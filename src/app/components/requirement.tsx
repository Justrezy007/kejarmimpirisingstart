"use client"
import React, { useState, useEffect } from 'react'

const Requirement = () => {
    const [isModalOfflineOpen, setModalOfflineOpen] = useState(false);
    const [isModalOnlineOpen, setModalOnlineOpen] = useState(false);
    const [count, setCount] = useState<number>(0)

    const imageShow = ["DSC05974.JPG", "DSC06168.JPG", "DSC06353.JPG", "DSC06274.JPG", "DSC06107.JPG", "DSC06254.JPG"]

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
        <div style={{
            backgroundImage: "url('./KV3.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }}
        >
        <div className="md:w-11/12 w-full mx-auto overflow-hidden relative flex md:flex-row flex-col lg:items-center">

            {isModalOfflineOpen && (
                <div className="w-screen h-screen fixed bg-black bg-opacity-50 flex justify-center items-center top-0 left-0 z-50" id="my_modal_1">
                    <div className="w-7/12 bg-base-100 rounded-lg px-14 py-8">
                        <h3 className="font-bold text-lg">Ketentuan Skema Offline</h3>
                        <ul className="list-disc">
                            <li className='my-2'>Registrasikan diri peserta pada link registrasi <a href="https://cimb.id/risingstart">https://cimb.id/risingstart</a> dan pilih sesuai domisili peserta</li>
                            <li className='my-2'>Dalam waktu maksimal 2x24 jam, kami akan mengirimkan pesan Whatsapp dan atau email terkait informasi lebih detail beserta konfirmasi jadwal audisi di kota domisili yang peserta pilih.</li>
                            <li className='my-2'>Apabila kuota audisi offline penuh, peserta dapat mendaftarkan diri pada skema online</li>
                            <li className='my-2'>Persiapkan diri peserta dalam menyanyikan lagu Kejar Mimpimu - Dee Lestari versi Indonesia dari bagian intro hingga reff di hari audisi.</li>
                            <li className='my-2'>Datang ke tempat audisi 1 jam sebelumnya dari jadwal yang terlampir dalam pesan Whatsapp dan atau Email konfirmasi.</li>
                            <li className='my-2'>Lakukan registrasi ulang dan pengambilan nomor antrian audisi</li>
                            <li className='my-2'>Tunggu hingga nomor pendaftaran audisi peserta dipanggil oleh panitia</li>
                            <li className='my-2'>Waktu audisi akan berlangsung kurang lebih 5 menit, peserta dapat menggunakan instrumen musik dan atau diiringi dengan lagu Kejar Mimpimu - Dee Lestari (Minus One)</li>
                            <li className='my-2'>Datang ke tempat audisi 30 menit sebelumnya dari jadwal yang terlampir dalam pesan Whatsapp dan/atau Email konfirmasi.</li>
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
                    <div className="w-7/12 bg-base-100 rounded-lg px-14 py-8">
                        <h3 className="font-bold text-lg mt-6">Ketentuan Skema Online</h3>
                        <ul className="list-disc">
                            <li className='my-2'>Peserta menyanyikan lagu Kejar Mimpimu - Dee Lestari versi Indonesia dan mempublikasikannya ke akun Instagram atau TikTok pribadi dengan format video yang dibebaskan.</li>
                            <li className='my-2'>Dalam pembuatan video, boleh menggunakan instrumen dan dilarang dalam menggunakan filter suara atau mixing. Jangan lupa disertai tampilan video yang memperlihatkan wajah secara keseluruhan</li>
                            <li className='my-2'>Perkenalkan secara singkat diri peserta dalam caption serta alasan mengapa ingin terpilih menjadi pemenang. Gunakan Hashtag #RisingStartSinger serta #KejarMimpi, tag @cimb_niaga & @kejarmimpi.id, serta pastikan akun sosial media telah terbuka secara umum.</li>
                            <li className='my-2'>Apabila video sudah dipublikasi, registrasikan diri peserta di link cimb.id/RisingStart dengan data yang sesuai dengan identitas dan jangan lupa untuk melampirkan bukti upload sesuai dengan prosedur pada form.</li>
                        </ul>
                        <div className="modal-action">
                            <button className="btn bg-red-600" onClick={() => setModalOnlineOpen(!isModalOnlineOpen)}>
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
            <div className="flex-1 order-2 py-12 px-8 md:px-4 sm:px-6 lg:py-20 lg:px-2 lg:pr-16 z-20">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                    <span className="block">Syarat & Ketentuan Peserta</span>
                </h2>
                <p className="text-lg font-bold mt-4 text-neutral-100">
                    Syarat Peserta
                </p>
                <ul className='list-disc ml-4'>
                    <li className='my-1'>Berkewarganegaraan Indonesia dengan rentang usia 12 - 40 tahun</li>
                    <li className='my-1'>Peserta wajib memiliki akun OCTO Pay di OCTO Mobile dengan minimal deposit Rp10.000</li>
                    <li className='my-1'>Peserta hanya diperbolehkan untuk mengikuti kompetisi dalam satu skema SAJA (<i>offline/online</i>)</li>
                    <li className='my-1'>Peserta yang berdomisili di kota tempat Skema <i>offline</i> dilaksanakan (Jakarta, Manado, Yogyakarta), wajib mengikuti kompetisi secara <i>offline</i>. Apabila kuota kompetisi <i>offline</i> dalam domisili tersebut telah habis, maka diperbolehkan untuk melakukan kompetisi secara <i>online</i></li>
                </ul>
                <div className='mt-4 flex flex-row flex-wrap gap-5'>
                    <button className="btn px-6 bg-red-700 rounded-none border-none" onClick={() => setModalOfflineOpen(!isModalOfflineOpen)}>Ketentuan Offline</button>
                    <button className="btn px-6 bg-red-700 rounded-none border-none" onClick={() => setModalOnlineOpen(!isModalOnlineOpen)}>Ketentuan Online</button>
                    <a className="btn px-6 bg-red-700 rounded-none border-none capitalize" target='_blank' href={'https://drive.google.com/drive/folders/13l_MRSra4QCyBpWo3wNBTYwjLwlSnr6P?usp=sharing'}>download minus one & lirik lagu</a>
                </div>
            </div>
            <div className="flex justify-center order-1 items-center md:py-0 py-14 gap-2 lg:p-28">
                <iframe
                    width="420"
                    height="300"
                    src="https://www.youtube.com/embed/i-7AO8rA-1w?autoplay=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                {/* <img src={`./Gallery_Peserta/${imageShow[count]}`} className="w-96 rounded-lg drop-shadow-[0_20px_50px_rgba(255,_255,_255,_0.2)]" alt="Tree" /> */}
            </div>
        </div>
    </div>
    )
}

export default Requirement