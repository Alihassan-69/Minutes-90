import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Search from './pages/Search'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import PlayerProfile from './pages/profiles/PlayerProfile'
import Feed from './pages/Feed'
import Messaging from './pages/Messaging'
import Subscribe from './pages/Subscribe'
import Footer from './components/Footer'

export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="container mx-auto px-4 py-8 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/player/:id" element={<PlayerProfile />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/messages" element={<Messaging />} />
          <Route path="/subscribe" element={<Subscribe />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
