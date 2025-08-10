import React, {useState, useEffect} from 'react'

function CreatePost({onCreate}){
  const [text,setText] = useState('')
  const [media,setMedia] = useState('')
  function submit(e){ e.preventDefault(); if(!text && !media) return; onCreate({id:Date.now(), text, media, createdAt: new Date().toISOString()}); setText(''); setMedia('') }
  return (
    <form onSubmit={submit} className="card mb-4">
      <textarea value={text} onChange={e=>setText(e.target.value)} placeholder="Share an update..." className="w-full p-3 bg-slate-900 rounded border border-slate-800" />
      <input value={media} onChange={e=>setMedia(e.target.value)} placeholder="Optional video link" className="w-full p-2 mt-2 bg-slate-900 rounded border border-slate-800" />
      <div className="mt-3 text-right"><button className="px-4 py-2 bg-emerald-400 text-black rounded">Post</button></div>
    </form>
  )
}

export default function Feed(){
  const [posts,setPosts] = useState([])
  useEffect(()=>{ setPosts(JSON.parse(localStorage.getItem('m90_posts')||'[]')) },[])
  function create(p){ const next=[p,...posts]; setPosts(next); localStorage.setItem('m90_posts', JSON.stringify(next)) }
  return (
    <div className="py-6">
      <CreatePost onCreate={create} />
      <div className="space-y-4">
        {posts.length===0 && <div className="text-slate-400">No posts yet</div>}
        {posts.map(post=>(
          <div key={post.id} className="card">
            <div className="text-xs text-slate-400">{new Date(post.createdAt).toLocaleString()}</div>
            <p className="mt-2">{post.text}</p>
            {post.media && <a href={post.media} target="_blank" rel="noreferrer" className="text-emerald-300">Open media</a>}
          </div>
        ))}
      </div>
    </div>
  )
}
