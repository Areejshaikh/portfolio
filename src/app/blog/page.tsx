"use client"
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import Image1 from "../../../public/image1.webp"
import Image2 from "../../../public/image2.jpg"
import Image3 from "../../../public/image3.jpg"
import { motion } from 'framer-motion'

const Blog = () => {
    const blogPosts = [
        {
            category: "Frontend Architecture",
            title: "What I Learned Building 6+ Production Apps",
            excerpt: "Real lessons from shipping code to real users—performance pitfalls, state management mistakes, and the patterns that actually scale.",
            image: Image1,
            link: "/",
        },
        {
            category: "AI + Development",
            title: "How AI Is Changing Frontend Development",
            excerpt: "From code generation to intelligent UIs, I explore how AI tools are augmenting developer workflows—and what it means for our careers.",
            image: Image2,
            link: "/",
        },
        {
            category: "Career Growth",
            title: "From Zero to Job-Ready Developer",
            excerpt: "The roadmap I followed to go from beginner to building full-stack applications. No bootcamps, just deliberate practice and real projects.",
            image: Image3,
            link: "/",
        },
    ]

    return (
        <div id="blog" className="py-24 px-6 bg-base-text/5">
            <div className="max-w-screen-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-text mb-4">Writing & Insights</h2>
                    <p className="text-base-text/70 text-lg max-w-2xl mx-auto">
                        Lessons learned from building real applications
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {blogPosts.map((post, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            viewport={{ once: true }}
                            className="bg-base-color rounded-lg overflow-hidden border border-base-text/10 hover:shadow-xl transition-shadow duration-300"
                        >
                            <div className="relative h-48">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            
                            <div className="p-6">
                                <span className="text-xs font-semibold text-base-text/50 uppercase tracking-wider">
                                    {post.category}
                                </span>
                                <h3 className="text-xl font-bold text-base-text mt-2 mb-3 line-clamp-2">
                                    {post.title}
                                </h3>
                                <p className="text-base-text/70 text-sm leading-relaxed line-clamp-3 mb-4">
                                    {post.excerpt}
                                </p>
                                <Link 
                                    href={post.link}
                                    className="text-base-text font-medium hover:opacity-70 transition-opacity inline-flex items-center gap-2"
                                >
                                    Read Article
                                    <span aria-hidden="true">→</span>
                                </Link>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Blog
