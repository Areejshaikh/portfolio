'use client'
import { FaLinkedinIn } from "react-icons/fa6";
import { SlSocialDribbble } from "react-icons/sl";
import { IoLogoGithub } from "react-icons/io";
import Typewriter from 'typewriter-effect';
import Link from "next/link";
import TransitionOptions from "./image";
import Button from "@/app/components/button";

function Hero() {
    return (
        <main className="bg-base-color h-full max-w-screen-2xl w-full grid md:grid-cols-2 grid-cols-1 mx-auto md:pt-44 pt-28 md:px-12 px-8">
            {/* Left Side */}
            <div>
                <span className="text-base-text font-bold text-2xl mb-4 block">Areej Zaheer</span>
                
                <h1 className="text-base-text font-bold text-4xl md:text-5xl leading-tight">
                    I Build Web Applications That 
                    <Typewriter
                        onInit={(typewriter) => {
                            typewriter
                                .typeString(' Perform.')
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString(' Scale.')
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString(' Convert.')
                                .pauseFor(2000)
                                .deleteAll()
                                .start();
                        }}
                    />
                </h1>
                
                <p className="text-xl text-base-text mt-6 leading-relaxed max-w-lg">
                    Full-stack developer specializing in Next.js, React, and modern web architectures. 
                    I turn complex requirements into fast, accessible, and maintainable applications.
                </p>
                
                <div className="mt-8 flex flex-wrap gap-4">
                    <Link href="#projects">
                        <Button name="View My Work" icon="" />
                    </Link>
                    <Link href="#contact">
                        <Button name="Get In Touch" icon="" />
                    </Link>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 mt-8 text-base-text">
                    <Link href="https://github.com/" target="_blank" rel="noopener noreferrer">
                        <IoLogoGithub className="w-6 h-6 hover:opacity-70 transition-opacity" />
                    </Link>
                    <Link href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedinIn className="w-6 h-6 hover:opacity-70 transition-opacity" />
                    </Link>
                    <Link href="https://dribbble.com/" target="_blank" rel="noopener noreferrer">
                        <SlSocialDribbble className="w-6 h-6 hover:opacity-70 transition-opacity" />
                    </Link>
                </div>
            </div>

            {/* Right Side */}
            <div className="md:ml-44 ml-0 pb-8 flex items-center justify-center">
                <TransitionOptions />
            </div>
        </main>
    )
}

export default Hero