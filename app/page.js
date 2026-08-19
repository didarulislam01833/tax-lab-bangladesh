import Link from 'next/link';
import {
  Award,
  ArrowRight,
  Calculator,
  CheckCircle2,
  Users,
  FileCheck2,
  GraduationCap,
  MessageSquareQuote,
  ChevronRight,
  BriefcaseBusiness,
  BadgeCheck,
  ReceiptText,
  Headphones,
  Quote,
  Building2,
  Anchor,
} from 'lucide-react';

export default function Home() {
  const benefits = [
    {
      icon: Users,
      title: 'Experienced Professionals',
      text: 'Learn from professionals with practical knowledge of Tax, VAT and business compliance.',
    },
    {
      icon: FileCheck2,
      title: 'Real Documentation',
      text: 'Understand practical forms, documents, calculations and compliance processes.',
    },
    {
      icon: Award,
      title: 'Professional Certificate',
      text: 'Receive a certificate upon successful completion of applicable training programs.',
    },
    {
      icon: Headphones,
      title: 'Professional Support',
      text: 'Get guidance designed to help you apply your knowledge in real professional situations.',
    },
  ];

  const testimonials = [
    {
      quote:
        'TaxLab Bangladesh handled our corporate tax requirements professionally. Their practical understanding of tax compliance helped our finance team work with much greater confidence.',
      name: 'Head of Finance',
      company: 'Leading FMCG Enterprise, Dhaka',
    },
    {
      quote:
        'The VAT and VDS training was extremely useful for our commercial team. The practical examples made complex compliance topics much easier to understand.',
      name: 'General Manager',
      company: 'Textile Export House, Bangladesh',
    },
    {
      quote:
        'The training approach was practical, structured and directly relevant to our day-to-day professional responsibilities.',
      name: 'Finance Manager',
      company: 'Corporate Business Group, Bangladesh',
    },
  ];

  const faqs = [
    {
      question: 'Who can join TaxLab training programs?',
      answer:
        'Our programs can be suitable for finance and accounts professionals, commercial executives, tax and VAT practitioners, business owners, students and anyone interested in developing practical knowledge of Bangladesh Tax, VAT and Customs.',
    },
    {
      question: 'Are the courses practical or only theoretical?',
      answer:
        'Our training approach focuses on practical understanding. Depending on the course, participants may work with real-world examples, calculations, documents, compliance procedures and practical case scenarios.',
    },
    {
      question: 'Do you provide corporate training?',
      answer:
        'Yes. TaxLab can arrange customized Tax, VAT, Customs and compliance training programs for corporate finance, accounts, commercial and management teams.',
    },
    {
      question: 'Will I receive a certificate?',
      answer:
        'Applicable training programs may include a course completion certificate. Please check the individual course details for specific certification information.',
    },
  ];

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      {/* 01. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1b3a] via-[#11244e] to-[#0c5136] text-white">
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[130px]" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="pointer-events-none absolute inset-0 opacity-[0.05]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                'radial-gradient(circle at 20px 20px, white 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Hero Left */}
            <div className="text-center lg:text-left">
              {/* Animated & Styled Main Heading */}

              <h1 className="text-xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-5xl">
                Master Tax, VAT
                <span className="mt-2 block bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-[length:200%_auto] bg-clip-text text-transparent transition-all duration-500 hover:bg-right">
                  Customs with Practical Training
                </span>
              </h1>


              {/* CTA Buttons */}
              <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  href="/upcoming-courses"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#0c7844] px-7 py-4 font-bold text-white shadow-xl shadow-emerald-950/30 transition duration-300 hover:-translate-y-1 hover:bg-emerald-500"
                >
                  Explore Training Programs
                  <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/10"
                >
                  Talk to an Expert
                  <BriefcaseBusiness className="h-5 w-5 text-emerald-300" />
                </Link>
              </div>

              {/* Trust Points */}
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-3 border-t border-white/10 pt-7 sm:grid-cols-2 lg:mx-0">
                {[
                  'Career based training',
                  'Practical case-based learning',
                  'Experienced professionals',
                  'Corporate training available',
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-center gap-2 text-sm text-slate-300 lg:justify-start"
                  >
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Hero Right */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-5 rounded-[2rem] bg-emerald-500/10 blur-2xl" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl sm:p-8">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      Elevate Your Professional Expertise
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15">
                    <GraduationCap className="h-6 w-6 text-emerald-300" />
                  </div>
                </div>


                <div className="space-y-3">
                  {[
                    {
                      icon: Calculator,
                      title: 'Income Tax',
                    },
                    {
                      icon: ReceiptText,
                      title: 'Value Added Tax (VAT)',
                    },
                    {
                      icon: Anchor,
                      title: 'Customs & Bond',
                    },
                    {
                      icon: Building2,
                      title: 'Company Affairs',
                    },
                  ].map(({ icon: Icon, title }) => (
                    <div
                      key={title}
                      className="flex items-center gap-4 rounded-2xl border border-white/5 bg-slate-950/20 p-4 transition hover:bg-white/5"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                        <Icon className="h-5 w-5 text-emerald-300" />
                      </div>

                      <div className="flex-1">
                        <p className="font-bold text-white">{title}</p>
                      </div>

                      <ChevronRight className="h-4 w-4 text-slate-500" />
                    </div>
                  ))}
                </div>

                <div className="mt-6 rounded-2xl border border-emerald-400/10 bg-emerald-400/5 p-4">
                  <div className="flex items-center gap-3">
                    <BadgeCheck className="h-6 w-6 text-emerald-300" />
                    <div>
                      <p className="text-sm font-bold">
                        Learn. Practice. Apply.
                      </p>
                      <p className="text-xs text-slate-400">
                        Skills designed for real professional situations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 02. WHY TAXLAB Section */}
      <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-sm font-bold uppercase tracking-widest text-[#0c7844]">
              Why TaxLab
            </span>
            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              Transforming Knowledge into Professional Excellence
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Shaping the next generation of compliance experts. Gain practical mastery and real-world skills in Income Tax, VAT, Customs & Bond, and Company Affairs.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map(({ icon: Icon, title, text }) => (
              <div
                key={title}
                className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-[#0c7844]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 text-lg font-black text-slate-900">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 03. TESTIMONIALS */}
      <section className="bg-slate-100 px-6 py-20 sm:px-8 sm:py-24 lg:px-12">
        <div className="mx-auto max-w-[1400px]">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <MessageSquareQuote className="mx-auto h-11 w-11 text-[#0c7844]" />
            <span className="mt-4 block text-sm font-bold uppercase tracking-widest text-[#0c7844]">
              Professional Feedback
            </span>
            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              What Professionals Say
            </h2>
            <p className="mt-4 text-slate-600">
              Trusted by professionals and corporate teams across Bangladesh.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-3">
            {testimonials.map(({ name, quote, company }) => (
              <div
                key={name}
                className="relative rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg"
              >
                <Quote className="absolute right-6 top-6 h-9 w-9 text-emerald-100" />
                <div className="relative">
                  <div className="mb-5 flex gap-1 text-emerald-500">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <p className="text-sm leading-7 text-slate-700">
                    “{quote}”
                  </p>
                  <div className="mt-7 border-t border-slate-200 pt-5">
                    <p className="font-black text-slate-900">{name}</p>
                    <p className="mt-1 text-xs text-slate-500">{company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}