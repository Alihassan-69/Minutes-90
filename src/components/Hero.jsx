import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Hero(){
  const { t } = useTranslation()
  return (
    <section className="relative rounded-xl overflow-hidden mb-8">
      <div className="bg-[url('/assets/stadium.jpg')] bg-cover bg-center h-56 sm:h-72 rounded-xl shadow-inner">
        <div className="h-full w-full flex items-center justify-center bg-black/40">
          <div className="text-center px-4">
            <h1 className="text-3xl sm:text-4xl font-bold text-white">{t('home_title')}</h1>
            <p className="text-slate-200 mt-2 max-w-2xl mx-auto">Connect with players, agents and clubs — scout talent worldwide and watch highlights.</p>
            <div className="mt-4 flex justify-center gap-3">
              <a href="/register" className="px-4 py-2 rounded bg-emerald-400 text-black font-semibold">{t('cta_join')}</a>
              <a href="/search" className="px-4 py-2 rounded border border-slate-700 text-slate-200">Search players</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
