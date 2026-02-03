'use client';

import { useTranslations } from 'next-intl';
import { BarChart2, Clock, Zap } from 'lucide-react';

export default function ProblemStatsSection() {
  const t = useTranslations('whySentira');

  const cards = [
    {
      category: t('stat1Category'),
      number: t('stat1Number'),
      text: t('stat1Text'),
      Icon: BarChart2,
      color: 'blue' as const,
    },
    {
      category: t('stat2Category'),
      number: t('stat2Number'),
      text: t('stat2Text'),
      Icon: Clock,
      color: 'indigo' as const,
    },
    {
      category: t('stat3Category'),
      number: t('stat3Number'),
      text: t('stat3Text'),
      Icon: Zap,
      color: 'cyan' as const,
    },
  ] as const;

  const colorClasses = {
    blue: {
      iconBg: 'bg-blue-100 group-hover:bg-blue-50',
      icon: 'text-blue-600',
      line: 'bg-slate-200 group-hover:bg-blue-500',
      title: 'text-slate-900 group-hover:text-blue-600',
      desc: 'text-slate-500 group-hover:text-slate-600',
      glow: 'group-hover:bg-gradient-to-br group-hover:from-blue-50/70 group-hover:to-white',
      shadow: 'group-hover:shadow-xl group-hover:shadow-blue-100/50',
    },
    indigo: {
      iconBg: 'bg-indigo-100 group-hover:bg-indigo-50',
      icon: 'text-indigo-600',
      line: 'bg-slate-200 group-hover:bg-indigo-500',
      title: 'text-slate-900 group-hover:text-indigo-600',
      desc: 'text-slate-500 group-hover:text-slate-600',
      glow: 'group-hover:bg-gradient-to-br group-hover:from-indigo-50/70 group-hover:to-white',
      shadow: 'group-hover:shadow-xl group-hover:shadow-indigo-100/50',
    },
    cyan: {
      iconBg: 'bg-cyan-100 group-hover:bg-cyan-50',
      icon: 'text-cyan-600',
      line: 'bg-slate-200 group-hover:bg-cyan-500',
      title: 'text-slate-900 group-hover:text-cyan-600',
      desc: 'text-slate-500 group-hover:text-slate-600',
      glow: 'group-hover:bg-gradient-to-br group-hover:from-cyan-50/70 group-hover:to-white',
      shadow: 'group-hover:shadow-xl group-hover:shadow-cyan-100/50',
    },
  };

  return (
    <section id="neden-sentira" className="py-12 sm:py-16 md:py-20 bg-[#F8FAFC]">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-10 sm:mb-14 text-slate-900 tracking-tight">
          {t('title')}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {cards.map(({ category, number, text, Icon, color }) => {
            const c = colorClasses[color];
            return (
              <div
                key={number}
                className={`group relative rounded-2xl bg-white p-6 sm:p-8 text-left overflow-hidden transition-all duration-300 hover:-translate-y-1 shadow-sm ${c.shadow} ${c.glow} ${color === 'cyan' ? 'sm:col-span-2 md:col-span-1' : ''}`}
              >
                {/* Üst: İkon + Kategori etiketi */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`rounded-xl p-2.5 ${c.iconBg} transition-colors`}>
                    <Icon size={22} className={c.icon} />
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`w-4 h-0.5 rounded-full ${color === 'blue' ? 'bg-blue-500' : color === 'indigo' ? 'bg-indigo-500' : 'bg-cyan-500'} opacity-60 group-hover:opacity-100 transition-opacity`} />
                    <span className="text-xs font-semibold uppercase tracking-wider text-slate-500 group-hover:text-slate-700 transition-colors">
                      {category}
                    </span>
                  </div>
                </div>

                {/* Ana başlık (sayı) */}
                <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 transition-colors ${c.title}`}>
                  {number}
                </h3>

                {/* Açıklama */}
                <p className={`text-sm sm:text-base leading-relaxed transition-colors ${c.desc}`}>
                  {text}
                </p>

                {/* Alt çizgi */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 rounded-b-2xl transition-all duration-300 ${c.line}`} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
