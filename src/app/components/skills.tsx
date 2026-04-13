'use client'
import { FaReact, FaNodeJs, FaGitAlt, FaGithub, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiJavascript, SiTailwindcss, SiVercel, SiPostgresql, SiMongodb, SiSanity, SiPrisma } from "react-icons/si";

function Skills() {
    const frontend = [
        { name: "React", icon: <FaReact className="w-8 h-8" /> },
        { name: "Next.js", icon: <SiNextdotjs className="w-8 h-8" /> },
        { name: "TypeScript", icon: <SiTypescript className="w-8 h-8" /> },
        { name: "JavaScript", icon: <SiJavascript className="w-8 h-8" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="w-8 h-8" /> },
    ];

    const languages = [
        { name: "HTML5", icon: <span className="text-2xl font-bold">H5</span> },
        { name: "CSS3", icon: <span className="text-2xl font-bold">C3</span> },
        { name: "SQL", icon: <SiPostgresql className="w-8 h-8" /> },
        { name: "REST APIs", icon: <FaNodeJs className="w-8 h-8" /> },
    ];

    const tools = [
        { name: "Git", icon: <FaGitAlt className="w-8 h-8" /> },
        { name: "GitHub", icon: <FaGithub className="w-8 h-8" /> },
        { name: "Vercel", icon: <SiVercel className="w-8 h-8" /> },
        { name: "Sanity CMS", icon: <SiSanity className="w-8 h-8" /> },
        { name: "Figma", icon: <FaFigma className="w-8 h-8" /> },
        { name: "MongoDB", icon: <SiMongodb className="w-8 h-8" /> },
        { name: "Prisma", icon: <SiPrisma className="w-8 h-8" /> },
    ];

    return (
        <div id="skills" className="max-w-screen-2xl w-full mx-auto py-24 px-6 bg-base-text/5">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-base-text mb-4">Technical Skills</h2>
                <p className="text-base-text/70 text-lg max-w-2xl mx-auto">
                    Tools and technologies I use to build production-ready applications
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                {/* Frontend */}
                <div className="bg-base-color p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-base-text mb-6">Frontend</h3>
                    <div className="space-y-4">
                        {frontend.map((skill) => (
                            <div key={skill.name} className="flex items-center gap-4 text-base-text">
                                {skill.icon}
                                <span className="text-lg">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Languages */}
                <div className="bg-base-color p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-base-text mb-6">Languages & Backend</h3>
                    <div className="space-y-4">
                        {languages.map((skill) => (
                            <div key={skill.name} className="flex items-center gap-4 text-base-text">
                                {skill.icon}
                                <span className="text-lg">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Tools */}
                <div className="bg-base-color p-8 rounded-lg">
                    <h3 className="text-xl font-bold text-base-text mb-6">Tools & Platforms</h3>
                    <div className="grid grid-cols-2 gap-4">
                        {tools.map((skill) => (
                            <div key={skill.name} className="flex flex-col items-center gap-2 text-base-text p-3 bg-base-text/5 rounded">
                                {skill.icon}
                                <span className="text-sm text-center">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
