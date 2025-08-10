import React, {useEffect, useState} from 'react'

export default function ThemeToggle(){
  const [dark, setDark] = useState(localStorage.getItem('theme') !== 'light')
  useEffect(()=>{
    if(dark) document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', dark ? 'dark' : 'light')
  },[dark])
  return (
    <button onClick={()=>setDark(!dark)} className="px-3 py-1 rounded bg-slate-700/50 hover:bg-slate-600">
      {dark ? '☀️' : '🌙'}
    </button>
  )
}
