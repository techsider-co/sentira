'use client';

import { useEffect } from 'react';

type Props = { locale: string };

export default function SetHtmlLang({ locale }: Props) {
  useEffect(() => {
    document.documentElement.lang = locale === 'tr' ? 'tr' : 'en';
  }, [locale]);
  return null;
}
