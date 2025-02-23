"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [mobile, setMobile] = useState(typeof window !== "undefined" ? window.innerWidth < 768 : false);

    useEffect(() => {
        const checkScreenSize = () => {
            const isMobile = window.innerWidth < 768;
            setMobile(isMobile);

            // Close mobile menu if switching to desktop
            if (!isMobile) setIsOpen(false);
        };

        checkScreenSize();
        window.addEventListener("resize", checkScreenSize);

        return () => window.removeEventListener("resize", checkScreenSize);
    }, []);

    return (
        <nav className="navbar dark:bg-[#141414] flex items-center justify-between h-20 px-8 fixed top-0 w-full z-[999] border-b-[1px] border-b-[--border-color]">
            {/* logo */}
            <div>
                <Link href="/">
                    <Image src="/logo/arusai-light-logo-transparent.png" alt="Arusai Logo" width={100} height={150}/>
                </Link>
            </div>

            {/* desktop nav links */}
            
            <div className="hidden md:block">
                <ul className="flex list-none gap-7 text-lg font-semibold items-center">
                    <li><Link href="/" >Home</Link></li>
                    <li><Link href="/services">Services</Link></li>
                    <li><Link href="/about">About</Link></li>
                    <li>
                        <button className="bg-[#D9D9D9] text-black py-1 px-4 rounded-md font-bold text-md hover:bg-red-900">
                            <Link href="/contact">
                                Contact
                            </Link>
                        </button>
                    </li>
                </ul>
            </div>
            

            {/* Mobile Menu Button */}
            <button 
                className="md:hidden text-black dark:text-white"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <X size={30} /> : <Menu size={30} />}
            </button>

            {isOpen && mobile && (
                <div className="fixed top-0 left-0 w-screen h-screen bg-white dark:bg-[#141414] flex flex-col items-center justify-center z-50 transition-all duration-300 ease-in-out">
                    <button className="absolute top-5 right-5 text-black dark:text-white" onClick={() => setIsOpen(false)}>
                        <X size={40} />
                    </button>
                    <ul className="flex flex-col items-center gap-8 text-2xl font-bold">
                        <li><Link href="/" className="hover:text-red-500 transition" onClick={() => setIsOpen(false)}>Home</Link></li>
                        <li><Link href="/services" className="hover:text-red-500 transition" onClick={() => setIsOpen(false)}>Services</Link></li>
                        <li><Link href="/about" className="hover:text-red-500 transition" onClick={() => setIsOpen(false)}>About</Link></li>
                        <li>
                            <Link href="/contact">
                                <button 
                                    className="bg-[#D9D9D9] text-black py-1 px-4 rounded-md font-bold text-md hover:bg-red-900 hover:text-white hover:transition hover:duration-555 hover:ease-in-out"
                                    onClick={() => setIsOpen(false)}
                                >
                                    Contact
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    )
}