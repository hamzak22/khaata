import React, { useState, useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import Card from '../components/Card'
import Button from '../components/Button'
import ExpenseItem from '../components/ExpenseItem'
import BalanceItem from '../components/BalanceItem'
import SettleModal from '../components/SettleModal'
import mock from '../data/mock'

export default function Dashboard() {
  const navigate = useNavigate()
  const [settlePerson, setSettlePerson] = useState(null)

  // compute totals from mock.people
  const totals = useMemo(() => {
    const people = mock.people || []
    let totalYouOwe = 0
    let totalOwedToYou = 0
    people.forEach((p) => {
      if (p.amount < 0) totalYouOwe += Math.abs(p.amount)
      else totalOwedToYou += p.amount
    })
    const net = totalOwedToYou - totalYouOwe
    return {
      totalYouOwe,
      totalOwedToYou,
      totalFriends: people.length,
      net
    }
  }, [])

  return (
    <div className="space-y-6">
      {/* Section 1: Four cards */}
      <div>
        <h2 className="text-xl font-semibold mb-3">Overview</h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Card className="flex flex-col">
            <div className="text-sm text-slate-500">Total owed to you</div>
            <div className="mt-2 text-2xl font-bold text-sky-600">{totals.totalOwedToYou} PKR</div>
          </Card>

          <Card className="flex flex-col">
            <div className="text-sm text-slate-500">Total you owe</div>
            <div className="mt-2 text-2xl font-bold text-rose-600">{totals.totalYouOwe} PKR</div>
          </Card>

          <Card className="flex flex-col">
            <div className="text-sm text-slate-500">Total friends</div>
            <div className="mt-2 text-2xl font-bold">{totals.totalFriends}</div>
          </Card>

          <Card className="flex flex-col">
            <div className="text-sm text-slate-500">Net balance</div>
            <div className={`mt-2 text-2xl font-bold ${totals.net >= 0 ? 'text-sky-600' : 'text-rose-600'}`}>{totals.net} PKR</div>
          </Card>
        </div>
      </div>

      {/* Section 2: Two tables side-by-side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">Recent Transactions</h3>
            <Button variant="secondary" onClick={() => navigate('/groups')}>View all</Button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="text-sm text-slate-500">
                  <th className="py-2">Date</th>
                  <th className="py-2">Description</th>
                  <th className="py-2">Paid by</th>
                  <th className="py-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {mock.recent.map((r) => (
                  <tr key={r.id} className="odd:bg-white even:bg-gray-50">
                    <td className="py-3 text-sm text-slate-600">{r.date}</td>
                    <td className="py-3 text-sm">{r.title}</td>
                    <td className="py-3 text-sm text-slate-600">{r.paidBy}</td>
                    <td className="py-3 text-sm text-right font-semibold">{r.amount} PKR</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <Card>
          <div className="flex items-center justify-between mb-3">
            <h3 className="text-lg font-semibold">Friends</h3>
            <Button variant="secondary" onClick={() => navigate('/people')}>Manage</Button>
          </div>

          <div className="space-y-2">
            {mock.people.map((p) => (
              <div key={p.id} className="flex items-center justify-between p-3 rounded-lg bg-white">
                <div>
                  <div className="font-semibold">{p.name}</div>
                  <div className="text-sm text-slate-500">{p.note}</div>
                </div>
                <div className={`font-semibold ${p.amount < 0 ? 'text-rose-600' : 'text-sky-600'}`}>{Math.abs(p.amount)} PKR</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {settlePerson && (
        <SettleModal
          person={settlePerson}
          onClose={() => setSettlePerson(null)}
          onConfirm={(data) => {
            // UI-only: show confirmation and close
            alert('UI only: Confirm settle ' + JSON.stringify(data))
            setSettlePerson(null)
          }}
        />
      )}
    </div>
  )
}
