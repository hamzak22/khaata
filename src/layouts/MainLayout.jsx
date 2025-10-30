import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'
import BottomNav from '../components/BottomNav'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-gray-50 text-slate-900">
      <Navbar />
      <main className="p-4 pb-24 md:p-8 max-w-4xl mx-auto">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  )
}
