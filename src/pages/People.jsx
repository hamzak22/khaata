import React, { useState } from 'react'
import mock from '../data/mock'
import BalanceItem from '../components/BalanceItem'
import SettleModal from '../components/SettleModal'

export default function People() {
  const [person, setPerson] = useState(null)

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold">People</h2>
      <div className="space-y-3">
        {mock.people.map((p) => (
          <BalanceItem key={p.id} item={p} onSettle={(it) => setPerson(it)} />
        ))}
      </div>

      {person && <SettleModal person={person} onClose={() => setPerson(null)} onConfirm={(data) => alert('UI only: Confirm settle ' + JSON.stringify(data))} />}
    </div>
  )
}
