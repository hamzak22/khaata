import React from 'react'

export default function ProfileCard({ user }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 flex items-center gap-4">
      <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center text-xl font-semibold">{user?.initials || 'U'}</div>
      <div>
        <div className="font-semibold">{user?.name || 'User Name'}</div>
        <div className="text-sm text-slate-500">{user?.email || 'email@example.com'}</div>
      </div>
    </div>
  )
}
