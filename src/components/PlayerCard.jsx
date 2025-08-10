import React from 'react'
import ReactPlayer from 'react-player/lazy'
import { Link } from 'react-router-dom'

export default function PlayerCard({player}){
  return (
    <article className="card hover:scale-102 transform transition">
      <div className="h-44 rounded overflow-hidden mb-3 bg-gradient-to-b from-slate-800 to-slate-900 flex items-center justify-center">
        {player.video ? <ReactPlayer url={player.video} light width="100%" height="100%" /> : <div className="text-slate-500">No video</div>}
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-semibold text-lg">{player.name}</div>
          <div className="text-sm text-slate-400">{player.position}</div>
        </div>
        <Link to={`/player/${player.id}`} className="text-emerald-300 text-sm">View</Link>
      </div>
    </article>
  )
}
