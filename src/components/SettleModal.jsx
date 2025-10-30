import React, { useState } from 'react'
import Button from './Button'
import Input from './Input'

export default function SettleModal({ person, onClose, onConfirm }) {
  const [amount, setAmount] = useState('')

  const confirm = () => {
    onConfirm && onConfirm({ person, amount })
    onClose && onClose()
  }

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl w-full max-w-md p-6">
        <h3 className="text-lg font-semibold mb-3">Settle with {person?.name}</h3>
        <div className="space-y-3">
          <Input label="Amount (PKR)" value={amount} onChange={(e) => setAmount(e.target.value)} />
          <label className="block text-sm font-medium text-slate-700">Upload proof (UI only)
            <input type="file" className="mt-1 block w-full" disabled />
          </label>

          <div className="flex justify-end gap-2">
            <Button variant="secondary" onClick={onClose}>Cancel</Button>
            <Button onClick={confirm}>Confirm</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
