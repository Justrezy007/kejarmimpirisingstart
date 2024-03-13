'use client'
import React, { useState } from 'react'

const RegisterOnline = () => {
    const [checked, setChecked] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [tempatTanggalLahir, setTempatTanggalLahir] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phone, setPhone] = useState('')
    const [instagram, setInstagram] = useState('')
    const [city, setCity] = useState('')
    const [ktp, setKTP] = useState('')
    return (
        <div style={{
            backgroundImage: "url('./KV.jpg')",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
        }} className="min-h-screen mx-auto overflow-y-hidden bg-fixed bg-cover bg-center bg-no-repeat shadow-lg">
            <div className="container flex items-center justify-center flex-1 h-full mx-auto py-8">
                <form className='bg-base-100 w-7/12 px-8 py-8'>
                    <p className='font-semibold text-lg'>RISING START <br /> 2024.</p>
                    <h3 className='font-semibold text-2xl mt-3 text-center text-white'>CIMB Niaga Rising Start 2024</h3>
                    <h3 className='font-semibold text-lg mt-1 text-center text-white'>ONLINE REGISTRATION</h3>
                    <div className='px-12 mt-8'>
                        <p className='text-sm text-white font-semibold'>Publication Conformation</p>
                        <p className='text-white text-sm text-justify'>Saya dengan ini memberikan persetujuan untuk mempublikasi material konten yang mengandung keterlibatan saya dalam proses audisi dari Rising Start CIMB Niaga. Saya mengerti bahwa konten tersebut dapat berupa video, audio, foto, atau tulisan yang menampilkan atau menggambarkan diri saya dalam konteks audisi, dan saya dengan sadar memberikan hak kepada CIMB Niaga untuk menggunakan dan mempublikasikan konten tersebut di berbagai media termasuk namun tidak terbatas pada media sosial, website, iklan, dan publikasi lainnya. </p>
                        <p className='text-white text-sm text-justify'>Saya memahami bahwa konten yang dipublikasikan oleh CIMB Niaga dapat dilihat oleh masyarakat luas dan dapat diakses oleh siapa saja di seluruh dunia. Saya juga mengerti bahwa saya tidak akan menerima kompensasi atau penggantian apapun atas penggunaan konten tersebut oleh CIMB Niaga. </p>
                        <p className='text-white text-sm text-justify'>Saya menyatakan bahwa saya memiliki hak untuk memberikan persetujuan ini kepada CIMB Niaga. Saya juga menjamin bahwa konten tersebut tidak melanggar hak cipta, hak privasi, atau hak lainnya dari pihak ketiga. </p>
                        <p className='text-white text-sm text-justify'>Dengan ini, saya menyatakan persetujuan saya secara sukarela dan tanpa paksaan untuk mempublikasikan konten audisi saya dalam talent search CIMB Niaga.</p>
                        <input type="checkbox" defaultChecked className="mt-2 cursor-pointer" onClick={e => setChecked(!checked)} /><span className='text-white ml-2 mt-2 text-sm'>Saya Setuju</span>
                        <div className='flex justify-between gap-5'>
                            <div className='flex flex-col mt-6'>
                                <label className='text-xs text-opacity-50' id="first-name">Nama Depan</label>
                                <input className='px-3 py-2 bg-white border-none mt-1' name="first-name" type='text' placeholder='Nama Awal' onChange={(e) => setFirstName(e.currentTarget.value)} />
                            </div>
                            <div className='flex flex-col mt-6'>
                                <label className='text-xs text-opacity-50' id="last-name">Nama Akhir</label>
                                <input className='px-3 py-2 bg-white border-none mt-1' name="last-name" type='text' placeholder='Nama Akhir' onChange={(e) => setLastName(e.currentTarget.value)} />
                            </div>
                        </div>
                        <div className='flex flex-col mt-6'>
                            <label className='text-xs text-opacity-50' id="tempat-tanggal-lahir">Tempat, Tanggal Lahir</label>
                            <input className='px-3 py-2 bg-white border-none mt-1' name="tempat-tanggal-lahir" type='text' placeholder='Jakarta, 3 Oktober 2000' onChange={(e) => setTempatTanggalLahir(e.currentTarget.value)} />
                        </div>
                        <div className='flex justify-between gap-5'>
                            <div className='flex flex-col mt-6'>
                                <label className='text-xs text-opacity-50' id="email">Email</label>
                                <input className='px-3 py-2 bg-white border-none mt-1' name="email" type='text' placeholder='email@gmail.com' onChange={(e) => setEmail(e.currentTarget.value)} />
                            </div>
                            <div className='flex flex-col mt-6'>
                                <label className='text-xs text-opacity-50' id="password">Password</label>
                                <input className='px-3 py-2 bg-white border-none mt-1' name="password" type='password' placeholder='********' onChange={(e) => setPassword(e.currentTarget.value)} />
                            </div>
                        </div>
                        <div className='flex justify-between gap-5'>
                            <div className='flex flex-col mt-6'>
                                <label className='text-xs text-opacity-50' id="phone">No. Telephone</label>
                                <input className='px-3 py-2 bg-white border-none mt-1' name="phone" type='text' placeholder='08111111111' onChange={(e) => setPhone(e.currentTarget.value)} />
                            </div>
                            <div className='flex flex-col mt-6'>
                                <label className='text-xs text-opacity-50' id="instagram">Akun Instagram</label>
                                <input className='px-3 py-2 bg-white border-none mt-1' name="instagram" type='text' placeholder='@risingstart2024' onChange={(e) => setInstagram(e.currentTarget.value)} />
                            </div>
                        </div>
                        <div className='flex flex-col mt-6'>
                            <label className='text-xs text-opacity-50' id="city">Asal Kota</label>
                            <input className='px-3 py-2 bg-white border-none mt-1' name="city" type='text' placeholder='Semarang' onChange={(e) => setCity(e.currentTarget.value)} />
                        </div>
                        <div className='flex flex-col mt-6'>
                            <label className='text-xs text-opacity-50' id="city">Foto KTP</label>
                            <input type="file" className="file-input mt-1 file-input-bordered file-input-red-700 w-full" />                        
                        </div>
                    </div>
                    <p className='px-12 mt-4 text-sm'>Sudah registrasi? <a className='underline text-red-700' href="#">Masuk Disini</a></p>
                    <div className='px-12 flex justify-end'>
                        <button className='bg-red-700 px-8 py-2 mt-8'>Masuk Sekarang</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterOnline