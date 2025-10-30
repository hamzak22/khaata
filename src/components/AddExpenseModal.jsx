import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'

export default function AddExpenseModal({ members = [], onClose, onSave }) {
  const [title, setTitle] = useState('')
  const [amount, setAmount] = useState('')
  const [paidBy, setPaidBy] = useState(members[0] || '')

  const submit = () => {
    onSave && onSave({ title, amount, paidBy, date: new Date().toLocaleDateString() })
    onClose && onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-end md:items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6">
        <h3 className="text-lg font-semibold mb-3">Add Expense</h3>
        <div className="space-y-3">
          <Input label="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
          <Input label="Amount (PKR)" value={amount} onChange={(e) => setAmount(e.target.value)} />

          <label className="block text-sm font-medium text-slate-700">
            Paid by
            <select value={paidBy} onChange={(e) => setPaidBy(e.target.value)} className="mt-1 block w-full rounded-lg border border-gray-200 px-3 py-2">
              {members.map((m) => (
                <option key={m} value={m}>{m}</option>
              ))}
            </select>
          </label>

          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button onClick={submit}>Save</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
