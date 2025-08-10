import React from 'react'
import Hero from '../components/Hero'
import PlayerCard from '../components/PlayerCard'

const SAMPLE = [
  {id:1,name:'Ali Khan',position:'ST',video:'https://www.youtube.com/watch?v=ysz5S6PUM-U'},
  {id:2,name:'Omar Saeed',position:'CM',video:'https://www.youtube.com/watch?v=ysz5S6PUM-U'},
  {id:3,name:'Luca Meyer',position:'LB',video:'https://www.youtube.com/watch?v=ysz5S6PUM-U'},
  {id:4,name:'Carlos',position:'RW',video:'https://www.youtube.com/watch?v=ysz5S6PUM-U'}
]

export default function Home(){
  return (
    <div>
      <Hero />
      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Featured Players</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {SAMPLE.map(p=> <PlayerCard key={p.id} player={p} />)}
        </div>
      </section>
    </div>
  )
}
