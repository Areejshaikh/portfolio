'use client'
import Link from "next/link";
import Button from "@/app/components/button";

function About() {
    return (
        <div id="about" className="max-w-screen-2xl w-full mx-auto py-24 px-6">
            <div className="w-full border h-0.5 bg-base-text/20 mb-16"></div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left - Content */}
                <div>
                    <h2 className="text-3xl md:text-4xl font-bold text-base-text mb-6">About Me</h2>
                    
                    <div className="space-y-4 text-base-text">
                        <p className="text-lg leading-relaxed">
                            I&apos;m a full-stack developer based in Karachi, Pakistan. I specialize in building 
                            modern web applications with Next.js, React, and TypeScript—focusing on performance, 
                            accessibility, and clean architecture.
                        </p>
                        
                        <p className="text-lg leading-relaxed">
                            I don&apos;t just write code—I solve problems. Whether it&apos;s optimizing page load times, 
                            building scalable component systems, or integrating complex APIs, I deliver solutions 
                            that work in production and scale with your business.
                        </p>

                        <p className="text-lg leading-relaxed">
                            When I&apos;m not coding, I&apos;m exploring AI integration, contributing to open-source, 
                            or breaking down complex concepts into technical blog posts.
                        </p>
                    </div>

                    <div className="mt-8">
                        <Link href="#contact">
                            <Button name="Let&apos;s Work Together" icon="" />
                        </Link>
                    </div>
                </div>

                {/* Right - Quick Stats */}
                <div className="grid grid-cols-2 gap-6">
                    <div className="bg-base-text/5 p-6 rounded-lg">
                        <span className="text-4xl font-bold text-base-text block">6+</span>
                        <span className="text-base-text/70 mt-2 block">Projects Completed</span>
                    </div>
                    <div className="bg-base-text/5 p-6 rounded-lg">
                        <span className="text-4xl font-bold text-base-text block">2+</span>
                        <span className="text-base-text/70 mt-2 block">Years Learning</span>
                    </div>
                    <div className="bg-base-text/5 p-6 rounded-lg">
                        <span className="text-4xl font-bold text-base-text block">3+</span>
                        <span className="text-base-text/70 mt-2 block">Technologies</span>
                    </div>
                    <div className="bg-base-text/5 p-6 rounded-lg">
                        <span className="text-4xl font-bold text-base-text block">100%</span>
                        <span className="text-base-text/70 mt-2 block">Commitment</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
