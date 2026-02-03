'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { Globe, Check, Menu, X } from 'lucide-react';
import { useTranslations, useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/navigation';

export default function HeroHeader() {
  const t = useTranslations('nav');
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const locales = [
    { code: 'tr' as const, labelKey: 'languages.tr' },
    { code: 'en' as const, labelKey: 'languages.en' },
  ] as const;

  const selectedLocale = (locale === 'tr' || locale === 'en') ? locale : 'tr';

  const navLinks = [
    { id: 'neden-sentira', key: 'whySentira' },
    { id: 'cozumler', key: 'solutions' },
    { id: 'oduller', key: 'awards' },
    { id: 'iletisim', key: 'contact' },
  ] as const;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsLanguageOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMobileMenuOpen]);

  const handleLanguageSelect = (code: 'tr' | 'en') => {
    router.replace(pathname, { locale: code });
    setIsLanguageOpen(false);
  };

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 p-4 md:p-8 flex items-center justify-between z-50">
      {/* Sol: Logo - masaüstünde eşit alan için flex-1 */}
      <div className="flex-shrink-0 md:flex-1 flex items-center">
        <a href="#hero" onClick={(e) => handleSmoothScroll(e, 'hero')}>
          <Image
            src="/logo.png"
            alt="Sentira Logo"
            width={150}
            height={64}
            className=""
            priority
          />
        </a>
      </div>

      {/* Orta: Masaüstü menü */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-8 text-sm font-medium text-gray-600">
        {navLinks.map(({ id, key }) => (
          <a
            key={id}
            href={`#${id}`}
            onClick={(e) => handleSmoothScroll(e, id)}
            className="hover:text-blue-700 transition-colors"
          >
            {t(key)}
          </a>
        ))}
      </div>

      {/* Sağ: Dil seçici + mobil hamburger */}
      <div className="flex flex-1 justify-end items-center gap-3">
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setIsLanguageOpen(!isLanguageOpen)}
            className="flex items-center gap-2 bg-blue-100 hover:bg-blue-200 px-3 py-2 md:px-4 md:py-2.5 rounded-full text-sm font-semibold text-blue-700 transition-all shadow-sm"
          >
            <span>{selectedLocale.toUpperCase()}</span>
            <Globe size={18} className="text-blue-600 md:w-4 md:h-4" />
          </button>
          {isLanguageOpen && (
            <div className="absolute top-full right-0 mt-2 w-52 bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden z-50">
              {locales.map(({ code, labelKey }) => (
                <button
                  key={code}
                  onClick={() => handleLanguageSelect(code)}
                  className={`w-full px-4 py-3.5 text-left text-sm transition-colors flex items-center justify-between ${
                    selectedLocale === code
                      ? 'bg-blue-50 text-blue-700 font-semibold'
                      : 'text-slate-600 hover:bg-slate-50'
                  }`}
                >
                  <span>{t(labelKey)}</span>
                  {selectedLocale === code && <Check size={16} className="text-blue-600" />}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Mobil hamburger butonu */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-white/10 hover:text-blue-700 transition-colors"
          aria-label={isMobileMenuOpen ? 'Menüyü kapat' : 'Menüyü aç'}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobil menü overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 top-0 z-40 md:hidden bg-black/50 backdrop-blur-sm"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden
        />
      )}
      <div
        className={`fixed top-0 right-0 z-40 h-full w-full max-w-[280px] bg-white shadow-2xl transform transition-transform duration-300 ease-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col pt-20 px-6 gap-1">
          {navLinks.map(({ id, key }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => handleSmoothScroll(e, id)}
              className="py-4 text-base font-medium text-slate-700 hover:text-blue-600 border-b border-slate-100 last:border-0"
            >
              {t(key)}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
