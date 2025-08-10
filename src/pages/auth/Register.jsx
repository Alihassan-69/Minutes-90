import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
export default function Register(){
  const [name,setName]=useState(''); const [email,setEmail]=useState(''); const [role,setRole]=useState('Player'); const nav = useNavigate()
  function submit(e){ e.preventDefault(); const demo={email,name,role,token:'FAKE'}; localStorage.setItem('m90_user', JSON.stringify(demo)); nav('/') }
  return (
    <div className="max-w-md mx-auto py-8">
      <form onSubmit={submit} className="card">
        <h2 className="text-2xl mb-4">Register</h2>
        <input value={name} onChange={e=>setName(e.target.value)} placeholder="Full name" className="w-full p-3 rounded bg-slate-900 border border-slate-800 mb-3" />
        <input value={email} onChange={e=>setEmail(e.target.value)} placeholder="Email" className="w-full p-3 rounded bg-slate-900 border border-slate-800 mb-3" />
        <select value={role} onChange={e=>setRole(e.target.value)} className="w-full p-3 rounded bg-slate-900 border border-slate-800 mb-3">
          <option>Player</option><option>Agent</option><option>Club</option><option>Scout</option>
        </select>
        <button className="w-full py-2 bg-emerald-400 text-black rounded">Create Account</button>
      </form>
    </div>
  )
}
