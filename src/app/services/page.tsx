function Services() {
    const services = [
        {
            number: "01",
            title: "Web Application Development",
            description: "I build fast, scalable web applications using Next.js and React. From MVPs to production-ready platforms, I focus on clean architecture, performance optimization, and maintainable code that grows with your team.",
        },
        {
            number: "02",
            title: "UI Implementation & Frontend Architecture",
            description: "I translate designs into pixel-perfect, accessible interfaces. I build component systems that are reusable, well-documented, and consistent—reducing development time for future features by 40% or more.",
        },
        {
            number: "03",
            title: "E-Commerce & Payment Integration",
            description: "I develop online stores with secure payment processing (Stripe), inventory management, and optimized checkout flows. Every implementation is tested for security, speed, and conversion rates.",
        },
        {
            number: "04",
            title: "CMS Integration & Content Architecture",
            description: "I integrate headless CMS platforms like Sanity to give your team full control over content—without touching code. I design content models that are flexible, queryable, and built for scale.",
        },
        {
            number: "05",
            title: "Performance Optimization & Audits",
            description: "I audit and optimize web applications for Core Web Vitals, accessibility, and SEO. Typical results: 90+ Lighthouse scores, 50% faster load times, and WCAG 2.1 AA compliance.",
        },
    ];

    return (
        <div id="services" className="bg-base-color text-base-text py-24 px-6">
            <div className="max-w-screen-2xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-text mb-4">What I Can Do For You</h2>
                    <p className="text-base-text/70 text-lg max-w-2xl mx-auto">
                        Production-ready development services—no fluff, just results
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-0">
                    {services.map((service, index) => (
                        <div key={index}>
                            <div className="group cursor-pointer py-8 border-b border-base-text/20">
                                <div className="flex items-start gap-6">
                                    <span className="text-3xl font-bold text-base-text/20 group-hover:text-base-text/40 transition-colors">
                                        {service.number}
                                    </span>
                                    <div className="flex-1">
                                        <h3 className="text-xl md:text-2xl font-bold text-base-text mb-3 group-hover:opacity-70 transition-opacity">
                                            {service.title}
                                        </h3>
                                        <p className="text-base-text/80 leading-relaxed max-w-2xl">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Services;
