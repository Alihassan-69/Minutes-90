import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'

export default function PlayerProfile(){
  const { id } = useParams()
  const player = { id, name:'Ali Khan', position:'ST', bio:'Explosive striker with good finishing.', stats:{goals:17,assists:5}, videos:['https://www.youtube.com/watch?v=ysz5S6PUM-U'] }

  return (
    <div className="py-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 card">
          <h2 className="text-2xl font-bold">{player.name}</h2>
          <p className="text-slate-300 mt-2">{player.bio}</p>
          <div className="mt-4">
            <h3 className="font-semibold mb-2">Videos</h3>
            {player.videos.map((v,i)=>(<div key={i} className="mb-4"><ReactPlayer url={v} controls width="100%" /></div>))}
          </div>
        </div>
        <aside className="card">
          <h3 className="font-semibold mb-2">Stats</h3>
          <ul className="text-slate-300">
            <li>Goals: {player.stats.goals}</li>
            <li>Assists: {player.stats.assists}</li>
            <li>Position: {player.position}</li>
          </ul>
        </aside>
      </div>
    </div>
  )
}
