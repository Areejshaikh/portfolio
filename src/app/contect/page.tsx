import Link from "next/link"

function Contact() {
    return (
        <section id="contact" className="bg-base-color body-font text-base-text overflow-hidden py-24 px-6">
            <div className="max-w-screen-2xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-base-text mb-4">Let&apos;s Build Something Together</h2>
                    <p className="text-base-text/70 text-lg max-w-2xl mx-auto">
                        I&apos;m currently available for full-time roles, contract work, and freelance projects. 
                        If you need a developer who ships fast and writes clean code, let&apos;s talk.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Left - Contact Info */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-xl font-bold text-base-text mb-4">Get In Touch</h3>
                            <p className="text-base-text/70 leading-relaxed">
                                Whether you have a project in mind, a role to fill, or just want to connect—I&apos;d love to hear from you. 
                                I typically respond within 24 hours.
                            </p>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-sm font-semibold text-base-text/50 uppercase tracking-wider mb-2">Email</h4>
                                <Link href="mailto:areejzaheer@gmail.com" className="text-base-text hover:opacity-70 transition-opacity text-lg">
                                    areejzaheer@gmail.com
                                </Link>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-base-text/50 uppercase tracking-wider mb-2">Location</h4>
                                <p className="text-base-text text-lg">Karachi, Pakistan (Open to Remote)</p>
                            </div>

                            <div>
                                <h4 className="text-sm font-semibold text-base-text/50 uppercase tracking-wider mb-4">Connect</h4>
                                <div className="flex gap-4">
                                    <Link href="https://github.com/" target="_blank" rel="noopener noreferrer" 
                                        className="text-base-text hover:opacity-70 transition-opacity">
                                        GitHub
                                    </Link>
                                    <span className="text-base-text/30">•</span>
                                    <Link href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"
                                        className="text-base-text hover:opacity-70 transition-opacity">
                                        LinkedIn
                                    </Link>
                                    <span className="text-base-text/30">•</span>
                                    <Link href="https://dribbble.com/" target="_blank" rel="noopener noreferrer"
                                        className="text-base-text hover:opacity-70 transition-opacity">
                                        Dribbble
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right - Form */}
                    <div>
                        <form
                            action="https://formspree.io/f/xanqdpdj"
                            method="POST"
                            className="space-y-6"
                        >
                            <div>
                                <label htmlFor="name" className="block text-sm font-semibold text-base-text/70 mb-2">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    placeholder="Your full name"
                                    className="w-full bg-transparent border border-base-text/30 rounded-md px-4 py-3 text-base-text placeholder-base-text/30 focus:outline-none focus:border-base-text transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-semibold text-base-text/70 mb-2">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    placeholder="you@company.com"
                                    className="w-full bg-transparent border border-base-text/30 rounded-md px-4 py-3 text-base-text placeholder-base-text/30 focus:outline-none focus:border-base-text transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="subject" className="block text-sm font-semibold text-base-text/70 mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    placeholder="Job opportunity / Project inquiry"
                                    className="w-full bg-transparent border border-base-text/30 rounded-md px-4 py-3 text-base-text placeholder-base-text/30 focus:outline-none focus:border-base-text transition-colors"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-semibold text-base-text/70 mb-2">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    placeholder="Tell me about your project or role..."
                                    className="w-full bg-transparent border border-base-text/30 rounded-md px-4 py-3 text-base-text placeholder-base-text/30 focus:outline-none focus:border-base-text transition-colors resize-none"
                                />
                            </div>

                            <button 
                                type="submit" 
                                className="w-full bg-base-text text-base-color font-semibold py-3 px-6 rounded-md hover:opacity-90 transition-opacity text-lg"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
