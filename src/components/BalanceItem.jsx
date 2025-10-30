import React from 'react'

export default function BalanceItem({ item, onSettle }) {
  const youOwe = item.amount < 0
  return (
    <div className="flex items-center justify-between p-3 rounded-xl bg-white shadow-sm">
      <div>
        <div className="font-semibold">{youOwe ? `You owe ${item.name}` : `${item.name} owes you`}</div>
        <div className="text-sm text-slate-500">{item.note}</div>
      </div>
      <div className="text-right">
        <div className={`font-semibold ${youOwe ? 'text-rose-600' : 'text-sky-600'}`}>{Math.abs(item.amount)} PKR</div>
        <button onClick={() => onSettle(item)} className="mt-2 text-sm text-white bg-blue-500 px-3 py-2 rounded-md ">settle</button>
      </div>
    </div>
  )
}
