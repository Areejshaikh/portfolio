"use client"
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// Project images
import Project1 from "../../../public/hourse-club.jpg";
import Project2 from "../../../public/e-commerce.jpg";
import Project3 from "../../../public/admin-dashboard.jpg";
import Project4 from "../../../public/css-portfolio.jpg";
import Project5 from "../../../public/block-website.jpg";

const projects = [
  {
    id: 1,
    title: "Horse Club Website",
    problem: "Local equestrian clubs struggle with online visibility and member engagement.",
    solution: "Built a responsive marketing site with event calendars, membership signup, and photo galleries to increase community engagement.",
    tech: ["Next.js", "Tailwind CSS", "React"],
    achievements: [
      "Reduced page load time by 40% with image optimization and SSR",
      "Increased member signups by 25% through streamlined UX flows",
    ],
    image: Project1,
    live: "https://horse-club-website.vercel.app/",
    github: "#",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    problem: "Small retailers need affordable, fast online stores without complex setups.",
    solution: "Developed a full-featured e-commerce platform with product catalogs, cart management, and Stripe payment integration.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
    achievements: [
      "Achieved 95+ Lighthouse performance score across all metrics",
      "Implemented secure checkout flow handling 100+ concurrent users",
    ],
    image: Project2,
    live: "https://nexj-js-website-css.vercel.app/",
    github: "#",
  },
  {
    id: 3,
    title: "Admin Dashboard",
    problem: "Business owners lack real-time visibility into their operations.",
    solution: "Created a responsive admin dashboard with data visualization, user management, and real-time analytics panels.",
    tech: ["React", "Tailwind CSS", "Chart.js", "REST API"],
    achievements: [
      "Built 12+ reusable chart components for consistent data visualization",
      "Reduced data load times by 60% through API caching strategies",
    ],
    image: Project3,
    live: "https://admin-dashboardvercelapp.vercel.app/",
    github: "#",
  },
  {
    id: 4,
    title: "Portfolio Website",
    problem: "Developers need strong personal brands to stand out in competitive markets.",
    solution: "Designed and built a custom portfolio with smooth animations, dark mode, and optimized asset delivery.",
    tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
    achievements: [
      "Implemented scroll-triggered animations with 60fps performance",
      "Achieved perfect accessibility scores with semantic HTML and ARIA",
    ],
    image: Project4,
    live: "https://resume1-2.vercel.app/",
    github: "#",
  },
  {
    id: 5,
    title: "Block Educational Platform",
    problem: "Students need interactive learning platforms with progress tracking.",
    solution: "Built an educational platform with course modules, progress tracking, and interactive code examples.",
    tech: ["Next.js", "Sanity CMS", "Tailwind CSS"],
    achievements: [
      "Integrated Sanity CMS for non-technical content management",
      "Supported 500+ monthly active users with sub-second page loads",
    ],
    image: Project5,
    live: "https://milestone3-eta-tan.vercel.app/",
    github: "#",
  },
];

const Projects = () => {
  return (
    <div id="projects" className="py-20 bg-white">
      <div className="max-w-screen-2xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-base-text mb-4">Featured Projects</h2>
          <p className="text-base-text/70 text-lg max-w-2xl mx-auto">
            Real applications built to solve real problems—each with measurable outcomes
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 items-center bg-base-color rounded-lg overflow-hidden border border-base-text/10"
            >
              {/* Image */}
              <div className="relative h-64 md:h-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-base-text mb-3">{project.title}</h3>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-sm font-semibold text-base-text/50 uppercase">Problem</span>
                    <p className="text-base-text mt-1">{project.problem}</p>
                  </div>
                  <div>
                    <span className="text-sm font-semibold text-base-text/50 uppercase">Solution</span>
                    <p className="text-base-text mt-1">{project.solution}</p>
                  </div>
                </div>

                {/* Achievements */}
                <ul className="space-y-2 mb-6">
                  {project.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-base-text">
                      <span className="text-base-text mt-1">▹</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-base-text/10 text-base-text text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <Link
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-base-text hover:opacity-70 transition-opacity"
                  >
                    <FaExternalLinkAlt className="w-4 h-4" />
                    <span className="text-sm">Live Demo</span>
                  </Link>
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-base-text hover:opacity-70 transition-opacity"
                  >
                    <FaGithub className="w-4 h-4" />
                    <span className="text-sm">Source Code</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
