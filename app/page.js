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
  ChevronRight // NEW
} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 overflow-hidden">

      {/* 1. HERO SECTION WITH IMPROVED HEADLINE */}
      <section className="relative py-24 sm:py-32 bg-gradient-to-b from-[#11244e] via-[#162d5f] to-[#11244e] text-white overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0c7844]/20 rounded-full blur-[140px] pointer-events-none animate-pulse" />

        {/* NEW: Decorative grid pattern */}
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

              {/* NEW: Improved Headline */}
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

            {/* NEW: Right Column - Hero Image */}
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

      {/* 2. STATS HIGHLIGHT BAR */}
      <section className="bg-emerald-600 text-white py-10 shadow-xl relative z-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl font-black">500+</h2>
            <p className="text-emerald-100 text-xs sm:text-sm font-semibold">Corporate Clients</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl font-black">৳100M+</h2>
            <p className="text-emerald-100 text-xs sm:text-sm font-semibold">Tax & VAT Saved</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl font-black">10,000+</h2>
            <p className="text-emerald-100 text-xs sm:text-sm font-semibold">Trained Professionals</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-3xl sm:text-4xl font-black">15+ Yrs</h2>
            <p className="text-emerald-100 text-xs sm:text-sm font-semibold">Industry Experience</p>
          </div>
        </div>
      </section>

      {/* 3. NEW: TRUSTED BY SECTION */}
      <section className="py-12 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 bg-white border-y border-slate-100">
        <p className="text-center text-slate-500 text-xs font-semibold uppercase tracking-wider mb-6">
          Trusted by leading organizations
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale">
          {/* Replace these with your actual client logos */}
          <div className="h-8 w-24 bg-slate-200 rounded flex items-center justify-center text-xs text-slate-400">Logo 1</div>
          <div className="h-8 w-24 bg-slate-200 rounded flex items-center justify-center text-xs text-slate-400">Logo 2</div>
          <div className="h-8 w-24 bg-slate-200 rounded flex items-center justify-center text-xs text-slate-400">Logo 3</div>
          <div className="h-8 w-24 bg-slate-200 rounded flex items-center justify-center text-xs text-slate-400">Logo 4</div>
          <div className="h-8 w-24 bg-slate-200 rounded flex items-center justify-center text-xs text-slate-400">Logo 5</div>
        </div>
      </section>

      {/* 4. MODIFIED: SERVICES OVERVIEW (Now links to /services page) */}
      <section className="py-24 max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <span className="text-xs font-bold text-[#0c7844] uppercase tracking-widest bg-emerald-100 px-4 py-1.5 rounded-full">
            Tailored Solutions for Your Business
          </span>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-900">
            Protect Your Business & Maximize Growth
          </h2>
          <p className="text-slate-600">
            Comprehensive tax, VAT, and legal services designed to ensure 100% regulatory compliance
            while optimizing your financial liabilities.
          </p>
        </div>

        {/* Simplified Service Cards - Now with "Learn More" links */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Service 1 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-emerald-50 text-[#0c7844] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#0c7844] group-hover:text-white transition">
              <Calculator className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Income Tax Advisory</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              Individual return filing (IT-11GA), corporate assessment, withholding tax (TDS) management,
              and NBR dispute resolution.
            </p>
            <Link href="/income-tax" className="inline-flex items-center gap-2 text-[#0c7844] font-bold text-sm group-hover:gap-3 transition">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-blue-50 text-[#11244e] rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#11244e] group-hover:text-white transition">
              <FileCheck2 className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">VAT & VDS Consultancy</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              VAT registration, monthly Mushak 9.1 returns, Mushak 4.3 input-output coefficient filing,
              and VDS compliance.
            </p>
            <Link href="/vat" className="inline-flex items-center gap-2 text-[#11244e] font-bold text-sm group-hover:gap-3 transition">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Service 3 */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200/80 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
            <div className="w-14 h-14 bg-teal-50 text-teal-700 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-teal-700 group-hover:text-white transition">
              <Scale className="w-7 h-7" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900 mb-3">Customs & Trade Law</h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-6">
              HS Code classification, customs valuation, import-export duties, bonded warehouse license
              support, and LC vetting.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 text-teal-700 font-bold text-sm group-hover:gap-3 transition">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

        {/* NEW: View All Services CTA */}
        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#11244e] hover:bg-[#1a3a6e] text-white font-bold rounded-2xl transition-all shadow-lg hover:scale-105 group"
          >
            Explore All Services <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
          </Link>
        </div>
      </section>

      {/* 5. NEW: WHY US / OUR PROCESS SECTION */}
      <section className="py-20 bg-slate-100">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <span className="text-xs font-bold text-[#0c7844] uppercase tracking-widest bg-emerald-100 px-4 py-1.5 rounded-full">
              Our Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900">
              How We Ensure 100% Compliance
            </h2>
            <p className="text-slate-600">
              A systematic approach to protect your business from tax-related risks and optimize your financial position.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-white p-8 rounded-3xl shadow-md text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#11244e] text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">In-Depth Diagnosis</h4>
              <p className="text-slate-600 text-sm">
                We start with a comprehensive review of your current financial and compliance landscape
                to identify risks and opportunities.
              </p>
            </div>
            {/* Step 2 */}
            <div className="bg-white p-8 rounded-3xl shadow-md text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#11244e] text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Strategic Advisory</h4>
              <p className="text-slate-600 text-sm">
                Our experts develop a tailored plan to optimize your tax liabilities, ensure compliance,
                and mitigate risks.
              </p>
            </div>
            {/* Step 3 */}
            <div className="bg-white p-8 rounded-3xl shadow-md text-center hover:shadow-xl transition">
              <div className="w-16 h-16 bg-[#11244e] text-white rounded-full flex items-center justify-center text-2xl font-black mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-2">Implementation & Support</h4>
              <p className="text-slate-600 text-sm">
                We manage filing, represent you before authorities, and provide ongoing support for
                all compliance matters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED EXECUTIVE TRAINING */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 space-y-12">

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 border-b border-slate-800 pb-8">
            <div className="space-y-3">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest">
                Practical Upskilling
              </span>
              <h2 className="text-3xl sm:text-4xl font-black">Upcoming Professional Courses</h2>
            </div>
            <Link
              href="/upcoming-courses"
              className="px-6 py-3 bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold rounded-xl text-sm transition flex items-center gap-2 group"
            >
              View All 13 Courses <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 space-y-4 hover:border-emerald-500/50 transition">
              <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 rounded-lg text-xs font-bold uppercase">
                ITP Exam Special
              </span>
              <h4 className="text-xl font-bold text-white">Income Tax Practitioner (ITP) Prep</h4>
              <p className="text-slate-400 text-sm">
                Full coverage for NBR syllabus, past question analysis, and mock viva tests.
              </p>
            </div>

            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 space-y-4 hover:border-blue-500/50 transition">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-300 border border-blue-500/30 rounded-lg text-xs font-bold uppercase">
                Finance Act 2026
              </span>
              <h4 className="text-xl font-bold text-white">Analysis of Finance Act, 2026</h4>
              <p className="text-slate-400 text-sm">
                In-depth breakdown of new direct and indirect tax amendments and corporate impact.
              </p>
            </div>

            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700 space-y-4 hover:border-amber-500/50 transition">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-300 border border-amber-500/30 rounded-lg text-xs font-bold uppercase">
                VAT & VDS
              </span>
              <h4 className="text-xl font-bold text-white">Input Output Co-efficient (Mushak 4.3)</h4>
              <p className="text-slate-400 text-sm">
                Calculation, raw material costing, and online submission with zero penalty risk.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 7. TESTIMONIALS / CLIENT FEEDBACK */}
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

      {/* 8. CALL TO ACTION */}
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