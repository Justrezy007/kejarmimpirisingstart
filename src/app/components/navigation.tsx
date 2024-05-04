'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Navigation = () => {
    const path = usePathname()
    if(path === '/' || path === '/prize')
    return (
        <div className="navbar bg-base-300 bg-opacity-60 backdrop-blur fixed z-50 md:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className=''><a href='#event'>Tentang Program</a></li>
                        <li className=''><a href='#register'>Pendaftaran</a></li>
                        <li className=''><a href='#timeline'>Agenda</a></li>
                        <li className=''><Link href='/prize'>Hadiah</Link></li>
                        <li className=''><a href='#contact'>Kontak</a></li>
                        <li className=''><a href='#faq'>FAQ</a></li>
                    </ul>
                </div>
                <a className="">
                    <img className='md:w-48 w-28' src={'/Logo_1.png'} />
                </a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='uppercase hover:font-bold'><a className='hover:border-b-2 hover:bg-none rounded-none border-red-700' href='/#event'>Tentang Program</a></li>
                    <li className='uppercase hover:font-bold'><a className='hover:border-b-2 hover:bg-none rounded-none border-red-700' href='/#register'>Pendaftaran</a></li>
                    <li className='uppercase hover:font-bold'><a className='hover:border-b-2 hover:bg-none rounded-none border-red-700' href='/#timeline'>Agenda</a></li>
                    <li className='uppercase hover:font-bold'><Link className='hover:border-b-2 hover:bg-none rounded-none border-red-700' href='/prize'>Hadiah</Link></li>
                    <li className='uppercase hover:font-bold'><a className='hover:border-b-2 hover:bg-none rounded-none border-red-700' href='/#contact'>Kontak</a></li>
                    <li className='uppercase hover:font-bold'><a className='hover:border-b-2 hover:bg-none rounded-none border-red-700' href='/#faq'>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                {/* <Link href="/login" className=" bg-red-700 text-white rounded-none py-2.5 text-sm px-6 uppercase border-none hover:bg-primary/80">Login</Link> */}
            </div>
        </div>
    )
    else{
        null
    }
}

export default Navigation