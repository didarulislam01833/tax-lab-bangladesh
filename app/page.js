'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
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
  ChevronLeft,
  Sparkles,
} from 'lucide-react';

export default function Home() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [mounted, setMounted] = useState(false);

  const fullText = 'Customs with Practical Training';

  // Fix hydration issue
  useEffect(() => {
    setMounted(true);
  }, []);

  // Typing effect
  useEffect(() => {
    if (!mounted) return;
    let index = 0;
    const typingInterval = setInterval(() => {
      if (index <= fullText.length) {
        setTypedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
      }
    }, 80);
    return () => clearInterval(typingInterval);
  }, [mounted]);

  // Auto-slide testimonials
  useEffect(() => {
    if (!mounted) return;
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [mounted]);

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

  return (
    <main className="min-h-screen overflow-hidden bg-slate-50 text-slate-900">
      {/* 01. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1b3a] via-[#11244e] to-[#0c5136] text-white">
        {/* Animated Gradient Orbs */}
        <div className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-emerald-500/20 blur-[130px] animate-pulse" />
        <div className="pointer-events-none absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[130px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="pointer-events-none absolute right-1/4 top-1/2 h-72 w-72 rounded-full bg-teal-500/10 blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />

        {/* Grid Pattern */}
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

        {/* Floating Particles - Fixed positions (no Math.random) */}
        <div className="pointer-events-none absolute inset-0">
          {[
            { top: '10%', left: '15%', delay: '0s' },
            { top: '20%', left: '80%', delay: '0.7s' },
            { top: '30%', left: '40%', delay: '1.4s' },
            { top: '50%', left: '70%', delay: '2.1s' },
            { top: '60%', left: '20%', delay: '2.8s' },
            { top: '70%', left: '60%', delay: '3.5s' },
            { top: '80%', left: '30%', delay: '4.2s' },
            { top: '90%', left: '50%', delay: '4.9s' },
            { top: '15%', left: '55%', delay: '5.6s' },
            { top: '45%', left: '90%', delay: '6.3s' },
          ].map((particle, i) => (
            <div
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-emerald-400/40 animate-ping"
              style={{
                top: particle.top,
                left: particle.left,
                animationDelay: particle.delay,
                animationDuration: '4s',
              }}
            />
          ))}
        </div>

        <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-32">
          <div className="grid items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
            {/* Hero Left */}
            <div className="text-center lg:text-left">
              {/* Animated Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="h-4 w-4 text-emerald-400 animate-spin" style={{ animationDuration: '8s' }} />
                Professional Training Institute
              </div>

              {/* Main Heading with Typing Effect */}
              <h1 className="text-4xl font-black leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-6xl">
                Master Tax, VAT
                <span className="mt-2 block min-h-[1.5em] bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient">
                  {mounted ? typedText : fullText}
                  {isTyping && mounted && <span className="animate-pulse">|</span>}
                </span>
              </h1>

              {/* Subtitle */}
              <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Practical training programs for professionals, business owners, and students covering Income Tax, VAT, Customs and Company Affairs.
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
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/15 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:bg-white/10 hover:-translate-y-1"
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
              <div className="absolute -inset-5 rounded-[2rem] bg-emerald-500/10 blur-2xl animate-pulse" />

              <div className="relative rounded-[2rem] border border-white/10 bg-white/[0.07] p-6 shadow-2xl backdrop-blur-xl sm:p-8 hover:border-emerald-400/30 transition-all duration-500">
                <div className="mb-7 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white sm:text-2xl">
                      Elevate Your Professional Expertise
                    </h3>
                    <p className="text-xs text-slate-400 mt-1">Real-world skills for real professionals</p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/15 animate-pulse">
                    <GraduationCap className="h-6 w-6 text-emerald-300" />
                  </div>
                </div>

                <div className="space-y-3">
                  {[
                    {
                      icon: Calculator,
                      title: 'Income Tax',
                      desc: 'Individual & Corporate',
                    },
                    {
                      icon: ReceiptText,
                      title: 'Value Added Tax (VAT)',
                      desc: 'VAT & VDS Compliance',
                    },
                    {
                      icon: Anchor,
                      title: 'Customs & Bond',
                      desc: 'Import-Export Advisory',
                    },
                    {
                      icon: Building2,
                      title: 'Company Affairs',
                      desc: 'RJSC & Licensing',
                    },
                  ].map(({ icon: Icon, title, desc }) => (
                    <div
                      key={title}
                      className="flex items-center gap-4 rounded-2xl border border-white/5 bg-slate-950/20 p-4 transition hover:bg-white/5 hover:border-emerald-400/20 hover:translate-x-1 duration-300"
                    >
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
                        <Icon className="h-5 w-5 text-emerald-300" />
                      </div>

                      <div className="flex-1">
                        <p className="font-bold text-white text-sm">{title}</p>
                        <p className="text-xs text-slate-400">{desc}</p>
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
                className="group rounded-3xl border border-slate-200 bg-slate-50 p-7 transition duration-300 hover:-translate-y-2 hover:bg-white hover:shadow-xl hover:border-emerald-300"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-100 text-[#0c7844] group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
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

      {/* 03. TESTIMONIALS - Auto Slider */}
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

          {/* Auto-sliding Testimonial */}
          <div className="relative max-w-3xl mx-auto">
            <div
              key={currentTestimonial}
              className="relative rounded-3xl border border-slate-200 bg-white p-8 sm:p-10 shadow-xl transition-all duration-500"
            >
              <Quote className="absolute right-8 top-8 h-10 w-10 text-emerald-100" />
              <div className="relative">
                <div className="mb-5 flex gap-1 text-emerald-500">
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                  <span>★</span>
                </div>
                <p className="text-base sm:text-lg leading-8 text-slate-700">
                  "{testimonials[currentTestimonial].quote}"
                </p>
                <div className="mt-7 border-t border-slate-200 pt-5">
                  <p className="font-black text-slate-900 text-lg">{testimonials[currentTestimonial].name}</p>
                  <p className="mt-1 text-xs text-slate-500">{testimonials[currentTestimonial].company}</p>
                </div>
              </div>
            </div>

            {/* Slider Controls */}
            <div className="mt-8 flex items-center justify-center gap-4">
              <button
                onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2.5 bg-white hover:bg-emerald-50 text-slate-700 rounded-xl border border-slate-200 transition-all duration-200"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${currentTestimonial === index ? 'w-8 bg-emerald-500' : 'w-2.5 bg-slate-300 hover:bg-slate-400'
                      }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                className="p-2.5 bg-white hover:bg-emerald-50 text-slate-700 rounded-xl border border-slate-200 transition-all duration-200"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Animation Styles */}
      <style jsx global>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </main>
  );
}