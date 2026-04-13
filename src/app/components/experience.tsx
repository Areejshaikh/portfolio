'use client'
import { motion } from "framer-motion";

function Experience() {
    const experiences = [
        {
            title: "Frontend Developer",
            company: "Freelance / Contract Work",
            period: "2024 - Present",
            description: "Building production-ready web applications for small businesses and startups.",
            highlights: [
                "Delivered 6+ client projects using Next.js, React, and Tailwind CSS",
                "Integrated Stripe payment processing for e-commerce clients, handling $10K+ in transactions",
                "Reduced average page load times by 40% through performance optimization techniques",
                "Implemented CMS solutions with Sanity, enabling non-technical teams to manage content independently",
            ],
        },
        {
            title: "Web Development Projects",
            company: "Self-Directed / Open Source",
            period: "2023 - Present",
            description: "Building and shipping real applications to production, learning through iteration.",
            highlights: [
                "Built and deployed full-stack applications with authentication, databases, and payment integrations",
                "Created reusable component libraries adopted by 3+ developer teams",
                "Published technical blog posts on frontend architecture and AI integration",
                "Active contributor to open-source Next.js and Tailwind CSS communities",
            ],
        },
        {
            title: "AI + Web Development",
            company: "Governor's Initiative Program",
            period: "2024",
            description: "Exploring the intersection of AI and modern web development.",
            highlights: [
                "Integrated AI-powered features (content generation, smart search) into web applications",
                "Researched and implemented LLM APIs for automated content workflows",
                "Developed prompt engineering patterns for developer tooling",
            ],
        },
    ];

    return (
        <div id="experience" className="max-w-screen-2xl w-full mx-auto py-24 px-6">
            <div className="w-full border h-0.5 bg-base-text/20 mb-16"></div>
            
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-base-text mb-4">Experience</h2>
                <p className="text-base-text/70 text-lg max-w-2xl mx-auto">
                    Where I&apos;ve applied my skills to deliver real results
                </p>
            </div>

            <div className="max-w-4xl mx-auto space-y-12">
                {experiences.map((exp, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.2 }}
                        viewport={{ once: true }}
                        className="border-l-2 border-base-text/20 pl-8 ml-4"
                    >
                        <div className="flex flex-wrap items-center gap-4 mb-2">
                            <h3 className="text-xl font-bold text-base-text">{exp.title}</h3>
                            <span className="text-sm text-base-text/50 bg-base-text/5 px-3 py-1 rounded-full">
                                {exp.period}
                            </span>
                        </div>
                        <p className="text-base-text/70 font-medium mb-2">{exp.company}</p>
                        <p className="text-base-text mb-4">{exp.description}</p>
                        <ul className="space-y-2">
                            {exp.highlights.map((highlight, i) => (
                                <li key={i} className="flex items-start gap-2 text-base-text">
                                    <span className="text-base-text mt-1">▹</span>
                                    <span>{highlight}</span>
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                ))}
            </div>
        </div>
    );
}

export default Experience;
