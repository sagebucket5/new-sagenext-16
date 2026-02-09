'use client'
import { usePathname } from 'next/navigation';
import PagesNotHaveTopbar from '@lib/topbarNotHaveUrls';

import { useLayoutEffect } from 'react';

export default function ArticleCssLoader() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    if (PagesNotHaveTopbar.includes(pathname)) {
      const existing = document.querySelector('link[href="/longform.css"]');
      if (!existing) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = '/longform.css';
        document.head.appendChild(link);
      }
    }
  }, [pathname]);

  return null;
}