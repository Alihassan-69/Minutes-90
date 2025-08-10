import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import ThemeToggle from './ThemeToggle'
import clsx from 'clsx'

function getUser(){ try{ return JSON.parse(localStorage.getItem('m90_user')) }catch(e){return null} }

export default function Navbar(){
  const { t, i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const nav = useNavigate()
  const user = getUser()
  function logout(){ localStorage.removeItem('m90_user'); nav('/') }

  return (
    <header className="bg-gradient-to-b from-slate-900/60 to-transparent border-b border-slate-800 sticky top-0 z-50 backdrop-blur">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-cyan-400 flex items-center justify-center font-bold text-black">M9</div>
          <div className="hidden sm:block">
            <div className="text-lg font-semibold">{t('app_name')}</div>
            <div className="text-xs text-slate-400">Find football talent</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-4">
          <Link to="/search" className="text-sm text-slate-200 hover:text-white">{t('search_placeholder')}</Link>
          <Link to="/feed" className="text-sm text-slate-200 hover:text-white">Feed</Link>
          <Link to="/messages" className="text-sm text-slate-200 hover:text-white">Messages</Link>
          <Link to="/subscribe" className="text-sm text-slate-200 hover:text-white">Plans</Link>
          <ThemeToggle />
          <div className="flex items-center gap-2 ml-2">
            <button onClick={()=>{ i18n.changeLanguage('en'); document.documentElement.dir='ltr' }} className="text-xs px-2 py-1 rounded bg-slate-800/50">EN</button>
            <button onClick={()=>{ i18n.changeLanguage('ar'); document.documentElement.dir='rtl' }} className="text-xs px-2 py-1 rounded bg-slate-800/50">AR</button>
            <button onClick={()=>{ i18n.changeLanguage('de'); document.documentElement.dir='ltr' }} className="text-xs px-2 py-1 rounded bg-slate-800/50">DE</button>
          </div>

          {user ? (
            <>
              <div className="px-3 py-1 bg-slate-800/40 rounded text-sm">{user.name || user.email}</div>
              <button onClick={logout} className="text-sm text-rose-400">Logout</button>
            </>
          ) : (
            <>
              <Link to="/login" className="px-3 py-1 border border-slate-700 rounded text-sm">Login</Link>
              <Link to="/register" className="px-3 py-1 bg-emerald-400 text-black rounded text-sm">Register</Link>
            </>
          )}
        </nav>

        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button onClick={()=>setOpen(!open)} className="p-2 rounded bg-slate-800/40">
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none"><path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
          </button>
        </div>
      </div>

      <div className={clsx("md:hidden transition-max-height duration-300 overflow-hidden", open ? "max-h-60" : "max-h-0")}>
        <div className="px-4 pb-4 space-y-2">
          <Link to="/search" className="block text-slate-200">Search</Link>
          <Link to="/feed" className="block text-slate-200">Feed</Link>
          <Link to="/messages" className="block text-slate-200">Messages</Link>
          <Link to="/subscribe" className="block text-slate-200">Plans</Link>
          {user ? (
            <div className="flex items-center gap-2">
              <div className="px-2 py-1 bg-slate-800/40 rounded text-sm">{user.name || user.email}</div>
              <button onClick={logout} className="text-rose-400">Logout</button>
            </div>
          ) : (
            <div className="flex gap-2">
              <Link to="/login" className="px-3 py-1 border rounded">Login</Link>
              <Link to="/register" className="px-3 py-1 bg-emerald-400 text-black rounded">Register</Link>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
