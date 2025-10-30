import React from 'react'
import { useNavigate } from 'react-router-dom'
import ProfileCard from '../components/ProfileCard'
import Button from '../components/Button'

export default function Profile() {
  const navigate = useNavigate()
  const user = { name: 'Test User', email: 'test@example.com', initials: 'TU' }
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">Profile</h2>
      <ProfileCard user={user} />
      <div className="space-y-2">
        <Button onClick={() => alert('UI only: Edit profile')}>Edit profile</Button>
        <Button variant="secondary" onClick={() => navigate('/login')}>Logout</Button>
      </div>
    </div>
  )
}
