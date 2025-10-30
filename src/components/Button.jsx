import React from 'react'

export default function Button({ children, onClick, className = '', variant = 'primary', ...props }) {
  const base = 'px-4 py-2 rounded-lg font-semibold transition-all duration-200'
  const styles = variant === 'primary'
    ? 'bg-sky-600 text-white shadow-sm hover:bg-sky-700'
    : 'bg-slate-100 text-slate-800 hover:bg-slate-200'

  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`} {...props}>
      {children}
    </button>
  )
}
