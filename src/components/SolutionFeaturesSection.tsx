'use client';

import { Shield, Zap, Activity } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function SolutionFeaturesSection() {
  const t = useTranslations('solutions');

  return (
    <section id="cozumler" className="py-12 sm:py-16 md:py-20 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 sm:gap-10 md:gap-12">
          <div className="w-full md:w-1/2 order-2 md:order-1">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-[#001f3f] text-center md:text-left">{t('title')}</h2>
            <div className="space-y-4 sm:space-y-6">
              <div className="flex gap-3 sm:gap-4">
                <div className="bg-cyan-100 p-2.5 sm:p-3 rounded-xl text-cyan-700 h-fit flex-shrink-0"><Zap size={22} className="sm:w-6 sm:h-6" /></div>
                <div className="min-w-0">
                  <h3 className="font-bold text-base sm:text-lg">{t('yoloTitle')}</h3>
                  <p className="text-slate-600 text-sm">{t('yoloDesc')}</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="bg-blue-100 p-2.5 sm:p-3 rounded-xl text-blue-700 h-fit flex-shrink-0"><Shield size={22} className="sm:w-6 sm:h-6" /></div>
                <div className="min-w-0">
                  <h3 className="font-bold text-base sm:text-lg">{t('iotTitle')}</h3>
                  <p className="text-slate-600 text-sm">{t('iotDesc')}</p>
                </div>
              </div>
              <div className="flex gap-3 sm:gap-4">
                <div className="bg-indigo-100 p-2.5 sm:p-3 rounded-xl text-indigo-700 h-fit flex-shrink-0"><Activity size={22} className="sm:w-6 sm:h-6" /></div>
                <div className="min-w-0">
                  <h3 className="font-bold text-base sm:text-lg">{t('dashboardTitle')}</h3>
                  <p className="text-slate-600 text-sm">{t('dashboardDesc')}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2 bg-[#001f3f] rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-2xl">
            <div className="aspect-video bg-slate-800 rounded-xl sm:rounded-2xl overflow-hidden">
              <video
                className="w-full h-full object-cover"
                controls
                playsInline
                preload="metadata"
              >
                <source src="/SentiraDemo.mp4" type="video/mp4" />
                {t('videoNotSupported')}
              </video>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
