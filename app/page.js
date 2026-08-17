import Link from 'next/link';
import {
  FileText,
  Calculator,
  ShieldCheck,
  GraduationCap,
  ArrowRight,
  CheckCircle2,
  Scale,
  BookOpen
} from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50/50">

      {/* Hero Section */}
      <section className="relative py-20 lg:py-28 bg-gradient-to-b from-[#11244e] via-[#162d5f] to-[#11244e] text-white overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-7 space-y-8">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#0c7844]/20 border border-[#0c7844]/40 text-[#34d399] rounded-full text-xs font-semibold tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4" /> Trusted Tax & VAT Consultancy in Bangladesh
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
                Navigating Bangladesh <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#34d399] to-teal-200">
                  Tax, VAT & Customs
                </span> <br />
                with Absolute Precision.
              </h1>

              <p className="text-lg text-slate-300 max-w-2xl leading-relaxed">
                Stay compliant with updated NBR SROs, Income Tax Act 2023, VAT Act 2012, and Customs regulations. Empowering individuals and corporate entities through expert advisory and practical training.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-[#0c7844] hover:bg-emerald-600 text-white font-bold rounded-xl shadow-lg transition flex items-center gap-2"
                >
                  Book Free Consultation <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  href="/upcoming-courses"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-xl border border-white/20 backdrop-blur-sm transition"
                >
                  Explore Upcoming Courses
                </Link>
              </div>
            </div>

            {/* Quick Resource Card */}
            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md border border-white/15 p-8 rounded-3xl space-y-6 shadow-2xl">
              <h3 className="text-xl font-bold text-white border-b border-white/10 pb-4 flex items-center justify-between">
                <span>NBR Resource Board</span>
                <span className="text-xs text-[#34d399] font-normal uppercase">Updated</span>
              </h3>

              <div className="space-y-4">
                <Link href="/income-tax/sro" className="block p-4 bg-slate-900/60 hover:bg-slate-900/90 rounded-xl border border-white/10 transition group">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-[#34d399] font-semibold">Income Tax SRO</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition" />
                  </div>
                  <p className="text-sm text-slate-200 font-medium mt-1">Income Tax Act 2023 Circulars & Guidelines</p>
                </Link>

                <Link href="/vat/sro" className="block p-4 bg-slate-900/60 hover:bg-slate-900/90 rounded-xl border border-white/10 transition group">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-teal-300 font-semibold">VAT Act 2012</span>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-white transition" />
                  </div>
                  <p className="text-sm text-slate-200 font-medium mt-1">Latest VDS Rates & Special Orders</p>
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12 space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Our Key Expertise
            </h2>
            <p className="text-slate-600 text-lg">
              Comprehensive financial and regulatory solutions tailored for businesses, corporate houses, and individuals across Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-emerald-50 text-[#0c7844] rounded-2xl flex items-center justify-center">
                  <Calculator className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Income Tax Services</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Personal & Corporate Tax Return Preparation, Assessment Handling, and NBR Audit Support.
                </p>
              </div>
              <Link href="/income-tax/sro" className="inline-flex items-center gap-2 text-[#0c7844] font-bold text-sm mt-6">
                Explore Income Tax Tools <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-blue-50 text-[#11244e] rounded-2xl flex items-center justify-center">
                  <Scale className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">VAT & Supplementary Duty</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  VAT Registration, Monthly Return Filing (Mushak 9.1), VDS Calculation, and Input-Output Coefficient Preparation.
                </p>
              </div>
              <Link href="/vat/sro" className="inline-flex items-center gap-2 text-[#0c7844] font-bold text-sm mt-6">
                Explore VAT Resources <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-xl transition flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-14 h-14 bg-slate-100 text-slate-800 rounded-2xl flex items-center justify-center">
                  <BookOpen className="w-7 h-7" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Customs & Trade</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Import/Export Duty Assessment, HS Code Classification, and Bonded Warehouse Advisory.
                </p>
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 text-[#0c7844] font-bold text-sm mt-6">
                Request Consultancy <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Courses Banner */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-12">
          <div className="bg-gradient-to-r from-[#11244e] to-[#0c7844] rounded-3xl p-8 sm:p-12 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8 shadow-2xl">
            <div className="space-y-4 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-semibold text-emerald-300">
                <GraduationCap className="w-4 h-4" /> Professional Training
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold">
                Master Practical Taxation & VAT in Bangladesh
              </h2>
              <p className="text-slate-200">
                Join our expert-led courses designed for Accountants, HR Professionals, and Business Owners.
              </p>
            </div>
            <Link
              href="/upcoming-courses"
              className="px-8 py-4 bg-white text-slate-900 hover:bg-emerald-400 font-extrabold rounded-2xl transition shrink-0"
            >
              View Upcoming Courses
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}