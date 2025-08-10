import React from 'react'
const convos = [{id:1,name:'Omar',last:'Sent you a video',time:'2h'},{id:2,name:'Coach',last:'Interested in trial',time:'1d'}]
export default function Messaging(){
  return (
    <div className="py-6 grid grid-cols-1 md:grid-cols-3 gap-4">
      <div className="md:col-span-1 card">
        <h3 className="font-semibold mb-3">Conversations</h3>
        <ul>
          {convos.map(c=> <li key={c.id} className="py-2 border-b border-slate-800"><div className="font-medium">{c.name}</div><div className="text-sm text-slate-400">{c.last}</div></li>)}
        </ul>
      </div>
      <div className="md:col-span-2 card">
        <h3 className="font-semibold mb-3">Chat Window</h3>
        <div className="h-64 bg-slate-900 rounded p-3 overflow-auto">Preview chat window — integrate real-time backend later.</div>
      </div>
    </div>
  )
}
