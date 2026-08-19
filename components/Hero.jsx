'use client';

import Link from 'next/link';
import {
    ArrowRight,
    BookOpen,
    ShieldCheck,
    Users,
    Award,
    CheckCircle2,
    Sparkles,
    Play
} from 'lucide-react';

export default function Hero() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-blue-950 to-slate-900 text-white pt-12 pb-20 lg:pt-20 lg:pb-28">

            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none opacity-20">
                <div className="absolute top-10 left-10 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
                <div className="absolute bottom-10 right-10 w-96 h-96 bg-amber-500 rounded-full blur-[140px]" />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Headline & Action */}
                    <div className="lg:col-span-7 space-y-6 text-center lg:text-left">

                        {/* Top Badge */}
                        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 backdrop-blur-md text-amber-400 text-xs sm:text-sm font-semibold">
                            <Sparkles className="w-4 h-4 animate-pulse" />
                            <span>Professional Tax & VAT Training Platform</span>
                        </div>

                        {/* Main Headline */}
                        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.15]">
                            Master <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-500">Taxation & VAT</span> with Practical Expertise
                        </h1>

                        {/* Sub-headline */}
                        <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                            আয়কর আইন ২০২৩, ভ্যাট ও সম্পূরক শুল্ক আইন এবং কর্পোরেট কমপ্লায়েন্স শিখুন বাস্তব উদাহরণের সাথে। প্র্যাকটিক্যাল কোর্স ও এক্সপার্ট কনসালটেন্সি সার্ভিস নিয়ে আপনার ক্যারিয়ার বা ব্যবসাকে এগিয়ে নিন।
                        </p>

                        {/* Call to Action Buttons */}
                        <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                            <Link
                                href="/upcoming-courses"
                                className="w-full sm:w-auto px-7 py-4 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-extrabold text-base rounded-2xl shadow-lg shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2 group"
                            >
                                <span>Explore Courses</span>
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link
                                href="/contact"
                                className="w-full sm:w-auto px-7 py-4 bg-white/10 hover:bg-white/20 border border-white/20 font-bold text-base rounded-2xl backdrop-blur-md transition-all flex items-center justify-center gap-2 text-white"
                            >
                                <span>Get Consultation</span>
                            </Link>
                        </div>

                        {/* Quick Trust Highlights */}
                        <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-left max-w-lg mx-auto lg:mx-0">
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                <span className="text-xs sm:text-sm text-slate-300 font-medium">Updated Tax Act 2023</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                <span className="text-xs sm:text-sm text-slate-300 font-medium">Hands-on Return Filing</span>
                            </div>
                            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
                                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                                <span className="text-xs sm:text-sm text-slate-300 font-medium">Expert Mentors</span>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Dynamic Feature Card & Stats */}
                    <div className="lg:col-span-5 relative">

                        {/* Feature Card */}
                        <div className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 sm:p-8 backdrop-blur-xl shadow-2xl space-y-6 relative overflow-hidden">
                            <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl" />

                            <div className="flex items-center justify-between">
                                <span className="px-3 py-1 bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-xs rounded-lg uppercase tracking-wide">
                                    Upcoming Batch
                                </span>
                                <span className="text-xs text-slate-400 flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                    Live Online & Offline
                                </span>
                            </div>

                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Comprehensive Income Tax & VAT Masterclass
                                </h3>
                                <p className="text-sm text-slate-300 leading-relaxed">
                                    বাস্তবভিত্তিক কেইস স্টাডি, চালান প্রিপারেশন এবং ই-রিটার্ন ফাইলিংয়ের সরাসরি অভিজ্ঞতা পেতে যুক্ত হন আমাদের নতুন ব্যাচে।
                                </p>
                            </div>

                            {/* Stats Grid inside Card */}
                            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-700/60">
                                <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-700/40">
                                    <div className="flex items-center gap-2 text-blue-400 mb-1">
                                        <Users className="w-4 h-4" />
                                        <span className="text-lg font-black text-white">5,000+</span>
                                    </div>
                                    <p className="text-xs text-slate-400 font-medium">Trained Professionals</p>
                                </div>

                                <div className="bg-slate-900/60 rounded-2xl p-4 border border-slate-700/40">
                                    <div className="flex items-center gap-2 text-amber-400 mb-1">
                                        <Award className="w-4 h-4" />
                                        <span className="text-lg font-black text-white">98%</span>
                                    </div>
                                    <p className="text-xs text-slate-400 font-medium">Satisfaction Rate</p>
                                </div>
                            </div>

                            {/* Callout Button */}
                            <Link
                                href="/upcoming-courses"
                                className="w-full py-3.5 bg-blue-900 hover:bg-blue-800 text-white font-bold text-sm rounded-xl transition flex items-center justify-center gap-2 border border-blue-700/50"
                            >
                                <BookOpen className="w-4 h-4" />
                                <span>View Course Modules & Syllabus</span>
                            </Link>

                        </div>

                    </div>

                </div>
            </div>
        </section>
    );
}