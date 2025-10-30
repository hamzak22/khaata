import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function BottomNav() {
  const navigate = useNavigate()

  return (
    <nav className="fixed bottom-4 left-0 right-0 z-40 flex justify-center md:hidden">
      <div className="bg-white w-full max-w-3xl mx-4 rounded-2xl shadow-lg p-2 flex justify-between">
        <button onClick={() => navigate('/dashboard')} className="flex-1 text-center py-2 text-slate-700">Home</button>
        <button onClick={() => navigate('/dashboard')} className="flex-1 text-center py-2 text-slate-700">Groups</button>
        <button onClick={() => navigate('/people')} className="flex-1 text-center py-2 text-slate-700">People</button>
        <button onClick={() => navigate('/profile')} className="flex-1 text-center py-2 text-slate-700">Profile</button>
      </div>
    </nav>
  )
}
