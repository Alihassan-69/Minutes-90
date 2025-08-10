import React from 'react'
export default function Subscribe(){
  const plans = [
    {id:'free',name:'Free',price:'0',features:['Browse profiles','Limited messages']},
    {id:'pro',name:'Pro',price:'9.99',features:['Advanced search','Priority support']},
    {id:'club',name:'Club',price:'49.99',features:['Club dashboard','Bulk messages']}
  ]
  return (
    <div className="py-6">
      <h2 className="text-2xl font-semibold mb-4">Subscription Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {plans.map(p=>(
          <div key={p.id} className="card">
            <div className="text-xl font-semibold">{p.name}</div>
            <div className="text-3xl font-bold my-3">${p.price}</div>
            <ul className="text-slate-300 mb-4">{p.features.map((f,i)=><li key={i}>• {f}</li>)}</ul>
            <button className="px-4 py-2 bg-emerald-400 text-black rounded">Select</button>
          </div>
        ))}
      </div>
    </div>
  )
}
