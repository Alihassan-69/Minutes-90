import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login(){
  const [email,setEmail]=useState(''); const [password,setPassword]=useState(''); const nav = useNavigate()
  function submit(e){ e.preventDefault(); const demo={email, name: email.split('@')[0] || 'User', role:'Player', token:'FAKE'}; localStorage.setItem('m90_user', JSON.stringify(demo)); nav('/') }
  return (
    <div className="max-w-md mx-auto py-8">
      <form onSubmit={submit} className="card">
        <h2 className="text-2xl mb-4">Login</h2>
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-3 rounded bg-slate-900 border border-slate-800 mb-3" />
        <input value={password} onChange={e=>setPassword(e.target.value)} placeholder="Password" type="password" className="w-full p-3 rounded bg-slate-900 border border-slate-800 mb-3" />
        <button className="w-full py-2 bg-emerald-400 text-black rounded">Login</button>
      </form>
    </div>
  )
}
