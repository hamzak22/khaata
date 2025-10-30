import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'

export default function Signup() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-1">Create account</h1>
        <p className="text-sm text-slate-500 mb-6">Sign up to start splitting expenses with friends</p>

        <div className="space-y-4">
          <Input label="Name" />
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />
          <Button onClick={() => navigate('/dashboard')}>Create account</Button>
        </div>

        <div className="text-center mt-6 text-sm">
          Already have an account? <button onClick={() => navigate('/login')} className="text-sky-600 font-semibold">Log in</button>
        </div>
      </div>
    </div>
  )
}
