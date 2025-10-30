import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../components/Button'
import Input from '../components/Input'

export default function Login() {
  const navigate = useNavigate()
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <h1 className="text-2xl font-bold mb-1">Welcome back</h1>
        <p className="text-sm text-slate-500 mb-6">Log in to access your groups and balances</p>

        <div className="space-y-4">
          <Button className="w-full" onClick={() => navigate('/dashboard')}>Continue with Google</Button>
          <div className="text-center text-sm text-slate-400">or</div>
          <Input label="Email" type="email" />
          <Input label="Password" type="password" />

          <div className="flex items-center justify-between">
            <button className="text-sm text-slate-600" onClick={() => {}}>Forgot password?</button>
            <Button onClick={() => navigate('/dashboard')}>Login</Button>
          </div>
        </div>

        <div className="text-center mt-6 text-sm">
          Don't have an account? <button onClick={() => navigate('/signup')} className="text-sky-600 font-semibold">Sign up</button>
        </div>
      </div>
    </div>
  )
}
