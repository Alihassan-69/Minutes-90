import React, {useState} from 'react'
import useDebounce from '../utils/useDebounce'
import PlayerCard from '../components/PlayerCard'

const DATA = [
  {id:1,name:'Ali',age:22,nationality:'PK',position:'ST'},
  {id:2,name:'Omar',age:24,nationality:'EG',position:'CM'},
  {id:3,name:'Luca',age:20,nationality:'DE',position:'LB'}
]

export default function Search(){
  const [q,setQ] = useState('')
  const [pos,setPos] = useState('')
  const deb = useDebounce(q,350)
  const results = DATA.filter(d=>{
    if(deb && !d.name.toLowerCase().includes(deb.toLowerCase())) return false
    if(pos && d.position !== pos) return false
    return true
  })
  return (
    <div className="py-6">
      <div className="card mb-4">
        <input value={q} onChange={e=>setQ(e.target.value)} placeholder="Search players by name..." className="w-full p-3 rounded bg-slate-900 border border-slate-800" />
        <div className="mt-3 flex gap-2">
          <select value={pos} onChange={e=>setPos(e.target.value)} className="p-2 rounded bg-slate-900 border border-slate-800">
            <option value="">All positions</option>
            <option value="ST">ST</option>
            <option value="CM">CM</option>
            <option value="LB">LB</option>
          </select>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {results.map(r=> <PlayerCard key={r.id} player={r} />)}
      </div>
    </div>
  )
}
