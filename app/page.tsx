'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Download, Layout, Sparkles } from 'lucide-react';
import BuilderLayout from '@/components/builder/BuilderLayout';
import Header from '@/components/layout/Header';
import { useLanguage } from '@/lib/context/LanguageContext';

export default function Home() {
  const searchParams = useSearchParams();
  const cvId = searchParams.get('cvId');
  const [showWizard, setShowWizard] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    if (cvId) {
      setShowWizard(true);
    }
  }, [cvId]);

  if (showWizard) {
    return (
      <div className="h-screen flex flex-col">
        <Header />
        <BuilderLayout />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-brand-lilac/5 to-white pt-20 pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-lilac/10 text-brand-lilac font-medium text-sm mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4" />
            {t.landing.badge}
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 tracking-tight animate-fade-in [animation-delay:200ms]">
            {t.landing.headline} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-lilac to-brand-lilac-dark">
              {t.landing.headlineHighlight}
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in [animation-delay:400ms]">
            {t.landing.subheadline}
          </p>

          <button
            onClick={() => setShowWizard(true)}
            className="group inline-flex items-center gap-2 px-8 py-4 bg-brand-lilac text-white rounded-full text-lg font-semibold hover:bg-brand-lilac-dark transition-all shadow-lg hover:shadow-brand-lilac/25 hover:-translate-y-1 animate-fade-in [animation-delay:600ms]"
          >
            {t.landing.cta}
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>

          <div className="mt-12 flex items-center justify-center gap-8 text-sm text-gray-500 animate-fade-in [animation-delay:800ms]">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              {t.landing.feature1}
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              {t.landing.feature2}
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-green-500" />
              {t.landing.feature3}
            </div>
          </div>
        </div>
      </section>

      {/* Template Preview Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{t.landing.templatesTitle}</h2>
            <p className="text-gray-600">{t.landing.templatesSubtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Modern', image: '/templates/template1.png' },
              { name: 'Classic', image: '/templates/template2.png' },
              { name: 'Minimal', image: '/templates/template3.png' },
              { name: 'Bold', image: '/templates/template4.png' },
            ].map((template, index) => (
              <div key={index} className="group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100">
                <div className="aspect-[210/297] relative bg-gray-100">
                  <Image
                    src={template.image}
                    alt={`${template.name} Template`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors" />
                </div>
                <div className="p-4 text-center border-t border-gray-50">
                  <h3 className="font-semibold text-gray-900">{template.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-brand-lilac/5 transition-colors">
              <div className="w-12 h-12 bg-brand-lilac/10 text-brand-lilac rounded-xl flex items-center justify-center mx-auto mb-4">
                <Layout className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.landing.featuresTitle1}</h3>
              <p className="text-gray-600">{t.landing.featuresDesc1}</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-brand-lilac/5 transition-colors">
              <div className="w-12 h-12 bg-brand-lilac/10 text-brand-lilac rounded-xl flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.landing.featuresTitle2}</h3>
              <p className="text-gray-600">{t.landing.featuresDesc2}</p>
            </div>
            <div className="text-center p-6 rounded-2xl bg-gray-50 hover:bg-brand-lilac/5 transition-colors">
              <div className="w-12 h-12 bg-brand-lilac/10 text-brand-lilac rounded-xl flex items-center justify-center mx-auto mb-4">
                <Download className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{t.landing.featuresTitle3}</h3>
              <p className="text-gray-600">{t.landing.featuresDesc3}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 py-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="relative w-6 h-6 opacity-50">
              <Image src="/logo.png" alt="Logo" fill sizes="24px" className="object-contain" />
            </div>
            <span className="font-semibold text-gray-400">CV Builder</span>
          </div>
          <p className="text-gray-500 text-sm">
            {t.landing.footer}
          </p>
        </div>
      </footer>
    </div>
  );
}
