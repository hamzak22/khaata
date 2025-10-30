import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Navbar() {
  const navigate = useNavigate()

  return (
    <header className="bg-white/80 backdrop-blur border-b border-gray-100 sticky top-0 z-30">
      <div className="max-w-4xl mx-auto flex items-center justify-between p-4">
        <div className="flex items-center gap-3">
          <button aria-label="home" onClick={() => navigate('/dashboard')} className="text-sky-600 font-semibold">
            Khaata
          </button>
        </div>

        <div className="flex items-center gap-3">
          <nav className="hidden md:flex gap-4 text-sm text-slate-700">
            <button onClick={() => navigate('/dashboard')} className='hover:text-blue-500'>Home</button>
            <button onClick={() => navigate('/dashboard')} className='hover:text-blue-500'>Groups</button>
            <button onClick={() => navigate('/people')} className='hover:text-blue-500'>People</button>
          </nav>

          <button onClick={() => navigate('/profile')} className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-700" aria-label="profile">
            U
          </button>
        </div>
      </div>
    </header>
  )
}
