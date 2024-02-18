'use client'
import React from 'react'
import { usePathname } from 'next/navigation'

const Navigation = () => {
    const path = usePathname()
    if(path === '/')
    return (
        <div className="navbar bg-base-300 bg-opacity-60 backdrop-blur fixed z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li className=''><a href='#event'>Event</a></li>
                        <li className=''><a href='#register'>Register</a></li>
                        <li className=''><a href='#timeline'>Timeline</a></li>
                        <li className=''><a href='#contact'>Contact</a></li>
                        <li className=''><a href='#faq'>FAQ</a></li>
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">daisyUI</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='uppercase hover:font-bold'><a className='hover:border-b-2 hover:bg-none rounded-none border-primary' href='#event'>Event</a></li>
                    <li className='uppercase hover:font-bold'><a className='hover:border-b-2 hover:bg-none rounded-none border-primary' href='#register'>Register</a></li>
                    <li className='uppercase hover:font-bold'><a className='hover:border-b-2 hover:bg-none rounded-none border-primary' href='#timeline'>Timeline</a></li>
                    <li className='uppercase hover:font-bold'><a className='hover:border-b-2 hover:bg-none rounded-none border-primary' href='#contact'>Contact</a></li>
                    <li className='uppercase hover:font-bold'><a className='hover:border-b-2 hover:bg-none rounded-none border-primary' href='#faq'>FAQ</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn bg-primary rounded-none px-8 uppercase text-primary-content hover:bg-primary/80">Register</a>
            </div>
        </div>
    )
    else{
        null
    }
}

export default Navigation