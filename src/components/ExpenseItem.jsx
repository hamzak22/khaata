import React from 'react'

export default function ExpenseItem({ expense }) {
  return (
    <div className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50">
      <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center font-semibold">{expense.paidBy?.[0] || 'A'}</div>
      <div className="flex-1">
        <div className="flex justify-between">
          <div className="font-semibold">{expense.title}</div>
          <div className="text-sm text-slate-700">{expense.amount} PKR</div>
        </div>
        <div className="text-sm text-slate-500">{expense.paidBy} • {expense.date}</div>
      </div>
    </div>
  )
}
