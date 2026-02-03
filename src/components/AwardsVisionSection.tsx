'use client';

import { Award } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

export default function AwardsVisionSection() {
  const t = useTranslations('awards');

  return (
    <section id="oduller" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              <Image
                src="/odul.png"
                alt={t('imageAlt')}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 text-center md:text-left order-1 md:order-2">
            <div className="inline-flex flex-wrap items-center justify-center md:justify-start gap-2 bg-green-50 text-green-700 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-6 sm:mb-8 font-semibold border border-green-100 text-sm sm:text-base">
              <Award size={18} className="sm:w-5 sm:h-5 flex-shrink-0" /> <span>{t('badge')}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#001f3f]">{t('title')}</h2>
            <p className="text-slate-600 mb-8 sm:mb-12 max-w-3xl mx-auto md:mx-0 italic text-sm sm:text-base leading-relaxed">
              &quot;{t('quote')}&quot;
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
