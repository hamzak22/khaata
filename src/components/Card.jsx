import React from 'react'

export default function Card({ children, className = '', ...props }) {
  return (
    <div {...props} className={`bg-white rounded-2xl shadow-sm p-4 ${className}`}>
      {children}
    </div>
  )
}
