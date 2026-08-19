import Link from 'next/link';
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
  ChevronRight,
  BriefcaseBusiness,
  Clock3,
  BadgeCheck,
  Presentation,
  Landmark,
  ReceiptText,
  Headphones,
  Quote,
} from 'lucide-react';

export default function Home() {
  const courses = [
    {
      icon: Calculator,
      title: 'Income Tax Training',
      description:
        'Build practical knowledge of Bangladesh Income Tax, return preparation, tax calculation and compliance procedures.',
      level: 'Professional',
      href: '/income-tax',
    },
    {
      icon: ReceiptText,
      title: 'VAT & Mushak Training',
      description:
        'Understand VAT, VDS, Mushak forms, documentation and practical VAT compliance procedures.',
      level: 'Professional',
      href: '/upcoming-courses',
    },
    {
      icon: Landmark,
      title: 'Customs & Compliance',
      description:
        'Develop practical knowledge of customs procedures, import-export compliance and regulatory requirements.',
      level: 'Professional',
      href: '/upcoming-courses',
    },
  ];

  const benefits = [
    {
      icon: Presentation,
      title: 'Practical Learning',
      text: 'Learn through practical examples, real-world cases and applicable professional procedures.',
    },
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
    {
      icon: TrendingUp,
      title: 'Career-Focused',
      text: 'Develop practical skills that can support your professional growth and career development.',
    },
  ];

  const trainingAreas = [
    {
      icon: Calculator,
      title: 'Income Tax',
      text: 'Practical Income Tax laws, calculation, return preparation and compliance.',
    },
    {
      icon: ReceiptText,
      title: 'VAT & Mushak',
      text: 'VAT, VDS, Mushak forms and practical VAT compliance procedures.',
    },
    {
      icon: Landmark,
      title: 'Customs',
      text: 'Import, export and customs-related practical knowledge and procedures.',
    },
    {
      icon: Scale,
      title: 'Tax & Legal Compliance',
      text: 'Corporate tax, regulatory requirements and business compliance.',
    },
  ];

  const stats = [
    {
      number: '10,000+',
      label: 'Professionals Trained',
      icon: GraduationCap,
    },
    {
      number: '500+',
      label: 'Corporate Clients',
      icon: Building2,
    },
    {
      number: '15+',
      label: 'Years Experience',
      icon: Clock3,
    },
    {
      number: '100M+',
      label: 'Tax & VAT Value Managed',
      icon: TrendingUp,
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

      {/* =====================================================
          01. HERO SECTION
      ===================================================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1b3a] via-[#11244e] to-[#0c5136] text-white">

        {/* Background Glow */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[130px]" />

        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px]" />

        {/* Background Pattern */}
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

              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-emerald-300 backdrop-blur-md">
                <Sparkles className="h-4 w-4" />
                Professional Tax, VAT & Customs Training
              </div>

              <h1 className="text-4xl font-black leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl">
                Master Tax, VAT &
                <span className="block bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  Customs with Practical Training
                </span>
              </h1>

              <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg lg:mx-0">
                Build real-world expertise in Bangladesh Tax, VAT, Customs and
                Corporate Compliance through practical, professional and
                career-focused training programs.
              </p>

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
                  'Bangladesh-focused training',
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
                    <p className="text-xs font-semibold uppercase tracking-widest text-emerald-300">
                      TaxLab Learning
                    </p>

                    <h3 className="mt-1 text-xl font-bold">
                      Practical Professional Skills
                    </h3>
                  </div>

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15">
                    <GraduationCap className="h-6 w-6 text-emerald-300" />
                  </div>

                </div>

                <div className="space-y-3">

                  {[
                    {
                      icon: Calculator,
                      title: 'Income Tax',
                      text: 'Law, calculation & compliance',
                    },
                    {
                      icon: ReceiptText,
                      title: 'VAT & Mushak',
                      text: 'VAT, VDS & practical documentation',
                    },
                    {
                      icon: Landmark,
                      title: 'Customs',
                      text: 'Import, export & customs compliance',
                    },
                    {
                      icon: FileCheck2,
                      title: 'Corporate Compliance',
                      text: 'Practical business compliance',
                    },
                  ].map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.title}
                        className="flex items-center gap-4 rounded-2xl border border-white/5 bg-slate-950/20 p-4 transition hover:bg-white/5"
                      >

                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                          <Icon className="h-5 w-5 text-emerald-300" />
                        </div>

                        <div>
                          <p className="font-bold">{item.title}</p>
                          <p className="mt-0.5 text-xs text-slate-400">
                            {item.text}
                          </p>
                        </div>

                        <ChevronRight className="ml-auto h-4 w-4 text-slate-500" />

                      </div>
                    );
                  })}

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


      {/* =====================================================
          02. TRUST STATISTICS
      ===================================================== */}
      <section className="border-b border-slate-200 bg-white">

        <div className="mx-auto grid max-w-[1400px] grid-cols-2 divide-x divide-slate-200 px-6 py-8 sm:px-8 lg:grid-cols-4 lg:px-12">

          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="flex flex-col items-center gap-2 px-4 py-4 text-center lg:flex-row lg:justify-center lg:text-left"
              >

                <Icon className="h-6 w-6 text-[#0c7844]" />

                <div>
                  <div className="text-2xl font-black text-slate-900 sm:text-3xl">
                    {stat.number}
                  </div>

                  <div className="text-xs font-medium text-slate-500 sm:text-sm">
                    {stat.label}
                  </div>
                </div>

              </div>
            );
          })}

        </div>
      </section>


      {/* =====================================================
          03. FEATURED TRAINING PROGRAMS
      ===================================================== */}
      <section className="bg-slate-50 px-6 py-20 sm:px-8 sm:py-24 lg:px-12">

        <div className="mx-auto max-w-[1400px]">

          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">

            <div className="max-w-2xl">

              <span className="text-sm font-bold uppercase tracking-widest text-[#0c7844]">
                Featured Training
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Learn Skills You Can Apply in the Real World
              </h2>

              <p className="mt-4 leading-7 text-slate-600">
                Explore practical training programs designed for professionals,
                business teams and individuals who want stronger Tax, VAT and
                compliance knowledge.
              </p>

            </div>

            <Link
              href="/upcoming-courses"
              className="group inline-flex items-center gap-2 font-bold text-[#0c7844]"
            >
              View All Courses
              <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
            </Link>

          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {courses.map((course) => {
              const Icon = course.icon;

              return (
                <div
                  key={course.title}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-emerald-200 hover:shadow-xl"
                >

                  <div className="flex items-start justify-between">

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-[#0c7844]">
                      <Icon className="h-7 w-7" />
                    </div>

                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                      {course.level}
                    </span>

                  </div>

                  <h3 className="mt-6 text-xl font-black text-slate-900">
                    {course.title}
                  </h3>

                  <p className="mt-3 min-h-[72px] text-sm leading-6 text-slate-600">
                    {course.description}
                  </p>

                  <Link
                    href={course.href}
                    className="group/link mt-6 inline-flex items-center gap-2 font-bold text-[#0c7844]"
                  >
                    View Course
                    <ArrowRight className="h-4 w-4 transition group-hover/link:translate-x-1" />
                  </Link>

                </div>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================================
          04. WHY TAXLAB
      ===================================================== */}
      <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12">

        <div className="mx-auto max-w-[1400px]">

          <div className="mx-auto mb-14 max-w-2xl text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-[#0c7844]">
              Why TaxLab
            </span>

            <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
              More Than Training. Practical Professional Development.
            </h2>

            <p className="mt-4 leading-7 text-slate-600">
              Our approach connects Tax, VAT and compliance knowledge with the
              practical situations professionals face every day.
            </p>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {benefits.map((benefit) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={benefit.title}
                  className="rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white hover:shadow-lg"
                >

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-[#0c7844]">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mt-5 text-lg font-black text-slate-900">
                    {benefit.title}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-slate-600">
                    {benefit.text}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>


      {/* =====================================================
          05. TRAINING AREAS
      ===================================================== */}
      <section className="bg-slate-100 px-6 py-20 sm:px-8 sm:py-24 lg:px-12">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid items-center gap-12 lg:grid-cols-2">

            <div>

              <span className="text-sm font-bold uppercase tracking-widest text-[#0c7844]">
                Training Areas
              </span>

              <h2 className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl">
                Build Expertise Across the Tax & Compliance Landscape
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-slate-600">
                From Income Tax and VAT to Customs and corporate compliance,
                TaxLab focuses on the knowledge professionals need to perform
                confidently in their roles.
              </p>

              <Link
                href="/services"
                className="group mt-7 inline-flex items-center gap-2 rounded-xl bg-[#11244e] px-6 py-3.5 font-bold text-white transition hover:bg-[#1a3670]"
              >
                Explore Our Services
                <ArrowRight className="h-5 w-5 transition group-hover:translate-x-1" />
              </Link>

            </div>

            <div className="grid gap-4 sm:grid-cols-2">

              {trainingAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-[#0c7844]">
                      <Icon className="h-6 w-6" />
                    </div>

                    <h3 className="mt-5 font-black text-slate-900">
                      {area.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {area.text}
                    </p>

                  </div>
                );
              })}

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          06. CORPORATE TRAINING
      ===================================================== */}
      <section className="bg-[#11244e] px-6 py-20 text-white sm:px-8 sm:py-24 lg:px-12">

        <div className="mx-auto max-w-[1400px]">

          <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/[0.07] to-emerald-500/10 p-8 sm:p-12 lg:p-14">

            <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.8fr]">

              <div>

                <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-emerald-300">
                  <Building2 className="h-4 w-4" />
                  Corporate Training
                </span>

                <h2 className="mt-6 text-3xl font-black leading-tight sm:text-4xl">
                  Train Your Team with Practical Tax & VAT Knowledge
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-slate-300">
                  Customized training programs for Finance, Accounts,
                  Commercial, Tax, VAT and Management teams. Programs can be
                  structured around your organization&apos;s practical needs.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                  {[
                    'Customized course content',
                    'Practical case studies',
                    'Corporate team sessions',
                    'Tax & VAT compliance focus',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-2 text-sm text-slate-300"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      {item}
                    </div>
                  ))}

                </div>

                <Link
                  href="/contact"
                  className="mt-8 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-6 py-3.5 font-bold text-white transition hover:bg-emerald-400"
                >
                  Request Corporate Training
                  <ArrowRight className="h-5 w-5" />
                </Link>

              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/20 p-7">

                <div className="mb-6 flex items-center gap-4">

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-400/10">
                    <Building2 className="h-7 w-7 text-emerald-300" />
                  </div>

                  <div>
                    <p className="text-sm text-slate-400">
                      Designed For
                    </p>

                    <p className="font-bold">
                      Corporate Teams
                    </p>
                  </div>

                </div>

                <div className="space-y-3">

                  {[
                    'Finance & Accounts',
                    'Commercial Departments',
                    'Tax & VAT Teams',
                    'Business Owners',
                    'Management Teams',
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-xl bg-white/5 px-4 py-3"
                    >
                      <BadgeCheck className="h-5 w-5 text-emerald-300" />

                      <span className="text-sm text-slate-200">
                        {item}
                      </span>
                    </div>
                  ))}

                </div>
              </div>

            </div>
          </div>

        </div>
      </section>


      {/* =====================================================
          07. TESTIMONIALS
      ===================================================== */}
      <section className="bg-white px-6 py-20 sm:px-8 sm:py-24 lg:px-12">

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

            {testimonials.map((testimonial) => (
              <div
                key={testimonial.name}
                className="relative rounded-3xl border border-slate-200 bg-slate-50 p-7 transition hover:-translate-y-1 hover:shadow-lg"
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
                    “{testimonial.quote}”
                  </p>

                  <div className="mt-7 border-t border-slate-200 pt-5">

                    <p className="font-black text-slate-900">
                      {testimonial.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-500">
                      {testimonial.company}
                    </p>

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          08. FAQ
      ===================================================== */}
      <section className="bg-slate-50 px-6 py-20 sm:px-8 sm:py-24 lg:px-12">

        <div className="mx-auto max-w-4xl">

          <div className="mb-12 text-center">

            <span className="text-sm font-bold uppercase tracking-widest text-[#0c7844]">
              FAQ
            </span>

            <h2 className="mt-3 text-3xl font-black text-slate-900 sm:text-4xl">
              Frequently Asked Questions
            </h2>

            <p className="mt-4 text-slate-600">
              Everything you need to know before joining a TaxLab program.
            </p>

          </div>

          <div className="space-y-4">

            {faqs.map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
              >

                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-bold text-slate-900">
                  {faq.question}

                  <ChevronRight className="h-5 w-5 shrink-0 text-[#0c7844] transition-transform group-open:rotate-90" />
                </summary>

                <p className="mt-4 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>

              </details>
            ))}

          </div>
        </div>
      </section>


      {/* =====================================================
          09. FINAL CTA
      ===================================================== */}
      <section className="bg-[#0b1b3a] px-6 py-20 text-white sm:px-8 sm:py-24 lg:px-12">

        <div className="mx-auto max-w-[1400px]">

          <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-r from-[#11244e] via-[#163368] to-[#0c7844] p-8 shadow-2xl sm:p-12 lg:p-16">

            <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-emerald-300/10 blur-3xl" />

            <div className="relative z-10 flex flex-col items-center justify-between gap-8 text-center lg:flex-row lg:text-left">

              <div>

                <div className="mb-4 inline-flex items-center gap-2 text-sm font-bold text-emerald-300">
                  <GraduationCap className="h-5 w-5" />
                  Start Your Professional Journey
                </div>

                <h2 className="text-3xl font-black sm:text-4xl">
                  Ready to Build Stronger Tax & VAT Skills?
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
                  Explore our upcoming training programs or contact TaxLab
                  Bangladesh for professional and corporate training support.
                </p>

              </div>

              <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">

                <Link
                  href="/upcoming-courses"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-7 py-4 font-black text-slate-950 transition hover:bg-emerald-300"
                >
                  Explore Courses
                  <ArrowRight className="h-5 w-5" />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/10 px-7 py-4 font-bold text-white transition hover:bg-white/15"
                >
                  Contact TaxLab
                </Link>

              </div>

            </div>
          </div>

        </div>
      </section>

    </main>
  );
}