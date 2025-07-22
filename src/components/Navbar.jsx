import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { CiSearch } from "react-icons/ci";
import { RiShoppingBag2Fill } from "react-icons/ri";

export default function Navbar() {
    const navMenu = () => {
        return (
            <>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Services</a></li>
                <li><a>Blogs</a></li>
                <li><a>Contact</a></li>
            </>
        )
    }
    return (
        <div>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navMenu()}
                        </ul>
                    </div>
                    <Link href={"/"} className='flex items-center justify-center'>
                        <Image src={'/assets/logo.svg'} width={50} height={50} alt='logo' />
                        <p>Buddy Garage</p>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navMenu()}
                    </ul>
                </div>
                <div className="navbar-end space-x-2">
                    <RiShoppingBag2Fill size={20}/>
                    <CiSearch size={20}/>
                    <button className="btn btn-outline btn-error rounded">Appointment</button>
                </div>
            </div>
        </div>
    )
}
