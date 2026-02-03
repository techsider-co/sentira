'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, Sparkles, X } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function WhiteBlueHero() {
  const t = useTranslations('hero');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLButtonElement>, targetId: string) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  return (
    <div id="hero" className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-[#F8FAFC]">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-5%] right-[-5%] w-[45%] h-[45%] rounded-full bg-blue-200/40 blur-[100px]" />
        <div className="absolute bottom-[10%] left-[-5%] w-[50%] h-[50%] rounded-full bg-indigo-100/50 blur-[120px]" />
        <div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] rounded-full bg-cyan-50/60 blur-[80px]" />
      </div>

      <div className="absolute inset-0 opacity-40 bg-[url('https://www.transparenttextures.com/patterns/pinstripe.png')] z-0" />

      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-4 sm:py-6 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1.5 sm:px-4 rounded-full text-xs font-semibold text-blue-600 mb-6 sm:mb-10 shadow-sm">
          <Sparkles size={14} className="animate-pulse flex-shrink-0" />
          <span className="text-center">{t('badge')}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tight text-slate-900 leading-[1.15] px-1">
          {t('title')} <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-500 to-cyan-500">
            {t('titleHighlight')}
          </span>
        </h1>

        <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-slate-600 max-w-3xl mx-auto leading-relaxed font-light px-1">
          {t('description')} <br className="hidden sm:block" />
          <span className="text-blue-700 font-medium">{t('descriptionHighlight')}</span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center items-center">
          <button
            onClick={openModal}
            className="w-full sm:w-auto group relative bg-blue-600 text-white px-8 py-3.5 sm:px-10 sm:py-4 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-xl shadow-blue-200 hover:shadow-blue-300 hover:-translate-y-1 active:scale-95 flex items-center justify-center gap-2 overflow-hidden"
          >
            <span className="relative z-10">{t('watchDemo')}</span>
            <ChevronRight size={20} className="relative z-10 group-hover:translate-x-1 transition-transform" />
            <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>

          <a
            href="mailto:contact@techsider.co"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:px-10 sm:py-4 rounded-2xl font-bold text-sm sm:text-base text-blue-600 border-2 border-blue-100 bg-white/50 backdrop-blur-md hover:bg-blue-50 transition-all shadow-sm"
          >
            {t('contact')}
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent" />

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeModal}
            aria-hidden
          />
          <div
            className="relative w-full max-w-4xl rounded-xl sm:rounded-2xl overflow-hidden bg-slate-900 shadow-2xl mx-2 sm:mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors touch-manipulation"
              aria-label={t('modalClose')}
            >
              <X size={24} />
            </button>
            <video
              ref={videoRef}
              src="/SentiraDemo.mp4"
              className="w-full aspect-video object-contain"
              controls
              autoPlay
              playsInline
              preload="auto"
            >
              {t('videoNotSupported')}
            </video>
          </div>
        </div>
      )}
    </div>
  );
}
