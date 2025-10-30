import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import mock from '../data/mock'
import ExpenseItem from '../components/ExpenseItem'
import AddExpenseModal from '../components/AddExpenseModal'

export default function GroupDetail() {
  const { groupId } = useParams()
  const group = mock.groups.find((g) => g.id === groupId) || mock.groups[0]
  const [showAdd, setShowAdd] = useState(false)
  const [expenses, setExpenses] = useState(group.expenses || [])

  const addExpense = (e) => {
    setExpenses((s) => [{ id: Date.now(), ...e }, ...s])
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold">{group.name}</h2>
          <div className="text-sm text-slate-500">{group.members.join(', ')}</div>
        </div>
        <div className="text-right">
          <div className="font-semibold text-sky-600">{group.totalBalance} PKR</div>
          <div className="text-sm text-slate-500">group balance</div>
        </div>
      </div>

      <div className="space-y-2">
        {expenses.map((ex) => (
          <ExpenseItem key={ex.id} expense={ex} />
        ))}
      </div>

      <button onClick={() => setShowAdd(true)} className="fixed right-6 bottom-20 bg-sky-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">+</button>

      {showAdd && <AddExpenseModal members={group.members} onClose={() => setShowAdd(false)} onSave={addExpense} />}
    </div>
  )
}
