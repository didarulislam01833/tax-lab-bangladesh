'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  ShieldCheck,
  BookOpen,
  Award,
  ArrowRight,
  Calculator,
  CheckCircle2,
  TrendingUp,
  Users,
  FileCheck2,
  Building2,
  Sparkles,
  GraduationCap,
  MessageSquareQuote,
  Scale,
  ChevronRight
} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">

      {/* 1. HERO SECTION WITH IMPROVED HEADLINE */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#11244e] via-[#162d5f] to-[#11244e] text-white overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0c7844]/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />

        {/* Decorative grid pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="h-full w-full" style={{ backgroundImage: 'radial-gradient(circle at 20px 20px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        </div>

        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

            {/* Left Column - Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-full text-xs font-bold tracking-wider uppercase backdrop-blur-md mx-auto lg:mx-0">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                Leading NBR Tax, VAT & Legal Advisory Platform
              </div>

              {/* Improved Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-tight">
                <span className="text-white">Secure Your Business.</span><br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Optimize Your Taxes.
                </span>
              </h1>

              <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed mx-auto lg:mx-0">
                TaxLab Bangladesh simplifies complex Income Tax Act 2023, VAT Act 2012, Customs,
                and Corporate Legal Compliance for companies and professionals across Bangladesh.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center lg:justify-start gap-4 pt-4">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto px-8 py-4 bg-[#0c7844] hover:bg-emerald-600 text-white font-bold rounded-2xl transition-all duration-300 shadow-lg shadow-emerald-900/40 hover:scale-105 flex items-center justify-center gap-2 group"
                >
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </Link>

                <Link
                  href="/upcoming-courses"
                  className="w-full sm:w-auto px-8 py-4 bg-slate-800/80 hover:bg-slate-700/80 border border-slate-700 text-white font-bold rounded-2xl transition backdrop-blur-md flex items-center justify-center gap-2"
                >
                  Explore Training Programs <GraduationCap className="w-5 h-5 text-emerald-400" />
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-8 grid grid-cols-2 gap-4 max-w-2xl border-t border-slate-700/60 text-slate-300 text-sm mx-auto lg:mx-0">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" /> NBR Registered Experts
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" /> 100% Tax Audit Safety
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-emerald-400 shrink-0" /> Corporate Retainers
                </div>
                <div className="flex items-center gap-2">
                  <Award className="w-5 h-5 text-emerald-400 shrink-0" /> Certified Trainers
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div className="hidden lg:flex justify-center items-center">
              <div className="relative w-full max-w-md aspect-square">
                <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/20 to-transparent rounded-3xl blur-2xl" />
                <div className="relative bg-slate-800/40 backdrop-blur-sm rounded-3xl p-8 border border-slate-700/50 h-full flex flex-col items-center justify-center">
                  <div className="text-center space-y-6">
                    <div className="w-24 h-24 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto">
                      <ShieldCheck className="w-12 h-12 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold">Trusted by 500+</h3>
                    <p className="text-slate-300">Corporate Clients Across Bangladesh</p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                      <span className="px-3 py-1 bg-slate-700/50 rounded-full">15+ Years Experience</span>
                      <span className="px-3 py-1 bg-slate-700/50 rounded-full">100M+ Tax Saved</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TESTIMONIALS / CLIENT FEEDBACK */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-2xl mx-auto space-y-4 mb-16">
          <MessageSquareQuote className="w-12 h-12 text-[#0c7844] mx-auto" />
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900">What Corporate Leaders Say</h2>
          <p className="text-slate-600 text-sm">
            Trusted by CFOs, Finance Directors, and Tax Consultants in Bangladesh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">

          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-4 hover:shadow-xl transition">
            <p className="text-slate-700 text-sm italic leading-relaxed">
              "TaxLab Bangladesh handled our corporate tax audit seamlessly. Their knowledge of the
              Income Tax Act 2023 saved us significant time and penalties."
            </p>
            <div>
              <h5 className="font-bold text-slate-900 text-base">Head of Finance</h5>
              <p className="text-slate-500 text-xs">Leading FMCG Enterprise, Dhaka</p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-md space-y-4 hover:shadow-xl transition">
            <p className="text-slate-700 text-sm italic leading-relaxed">
              "Their VAT & VDS practical training was extremely helpful for our commercial team.
              Highly professional and result-oriented team!"
            </p>
            <div>
              <h5 className="font-bold text-slate-900 text-base">General Manager</h5>
              <p className="text-slate-500 text-xs">Textile Export House, Chittagong</p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. CALL TO ACTION */}
      <section className="py-20 bg-[#11244e] text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-r from-[#11244e] via-[#162d5f] to-[#0c7844] rounded-3xl p-8 sm:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-700 shadow-2xl">
            <div className="space-y-4 text-center lg:text-left">
              <h3 className="text-3xl sm:text-4xl font-black">Ready to Streamline Your Tax & VAT?</h3>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl">
                Get in touch with our certified Tax Lawyers and VAT Consultants today for personalized guidance.
              </p>
            </div>

            <Link
              href="/contact"
              className="px-8 py-4 bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-black rounded-2xl transition shadow-xl shrink-0 flex items-center gap-2 hover:scale-105 group"
            >
              Book Advisory Session <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}