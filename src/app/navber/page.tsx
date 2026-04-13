"use client"
import { useState } from 'react';
import Link from "next/link";
import { HiOutlineBars3, HiXMark } from 'react-icons/hi2';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#skills", label: "Skills" },
        { href: "#projects", label: "Projects" },
        { href: "#experience", label: "Experience" },
        { href: "#services", label: "Services" },
        { href: "#contact", label: "Contact" },
    ];

    return (
        <div className="w-full max-w-screen-2xl z-30 fixed justify-between mx-auto px-6 flex bg-base-text h-20 items-center text-center">
            {/* Logo */}
            <div>
                <Link href="#home" className="text-base-color font-bold text-xl md:text-3xl">
                    Areej Z.
                </Link>
            </div>

            {/* Mobile Toggle */}
            <button 
                onClick={toggleNavbar} 
                className="w-12 h-12 text-base-color md:hidden flex items-center justify-center"
                aria-label="Toggle navigation"
            >
                {isOpen ? <HiXMark className="w-8 h-8" /> : <HiOutlineBars3 className="w-8 h-8" />}
            </button>

            {/* Navigation */}
            <nav className={`
                absolute md:relative left-0 md:top-0 top-20 right-0 w-full
                h-auto md:h-auto md:w-auto flex-col md:flex-row
                flex md:flex md:items-center
                bg-base-text text-base-color md:text-sm text-lg gap-6 md:gap-8
                ${isOpen ? "flex" : "hidden"} md:flex
            `}>
                {navLinks.map((link) => (
                    <Link 
                        key={link.href} 
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="hover:opacity-70 transition-opacity"
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        </div>
    );
}
