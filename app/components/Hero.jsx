import React from 'react';

export default function Hero() {
    return (
        <section className="bg-gradient-to-r from-[#0B192C] to-[#1E3E62] text-white py-20 px-6 text-center md:text-left">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <span className="bg-[#008B8B]/20 text-teal-300 text-xs font-semibold px-3 py-1 rounded-full border border-teal-500/30 inline-block">
                        Premier Professional Training Center
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
                        YOUR GATEWAY TO <br />
                        <span className="text-teal-400">CORPORATE EXPERTISE.</span>
                    </h1>
                    <p className="text-gray-300 text-base leading-relaxed">
                        We are dedicated to empowering professionals. We provide comprehensive training on VAT, Tax, RJSC, Customs & Bond.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center md:justify-start">
                        <button className="bg-teal-500 hover:bg-teal-600 text-slate-900 font-bold px-6 py-3 rounded-lg shadow-lg transition">
                            Explore Courses
                        </button>
                        <button className="border border-gray-400 hover:bg-white/10 text-white font-semibold px-6 py-3 rounded-lg transition">
                            Contact Us
                        </button>
                    </div>
                </div>

                <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-sm shadow-2xl">
                    <h3 className="text-xl font-bold mb-4 text-teal-300 border-b border-white/10 pb-2">Why Choose TaxLab?</h3>
                    <ul className="space-y-4 text-sm text-gray-200">
                        <li className="flex items-start">
                            <span className="text-teal-400 mr-2">✓</span> Practical and real-world corporate training.
                        </li>
                        <li className="flex items-start">
                            <span className="text-teal-400 mr-2">✓</span> Guidance from experienced Tax Lawyers & Consultants.
                        </li>
                        <li className="flex items-start">
                            <span className="text-teal-400 mr-2">✓</span> Complete mastery over VAT, Tax & RJSC Compliance.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
}