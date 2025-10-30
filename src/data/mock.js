const mock = {
  groups: [
    {
      id: 'g1',
      name: 'Apartment Utilities',
      members: ['Ali', 'Sara', 'Usman'],
      totalBalance: -1200,
      expenses: [
        { id: 'e1', title: 'Electricity bill', amount: 2400, paidBy: 'Ali', date: '2025-10-01' },
        { id: 'e2', title: 'Water', amount: 600, paidBy: 'Sara', date: '2025-09-25' }
      ]
    },
    {
      id: 'g2',
      name: 'Trip to Murree',
      members: ['Ali', 'Sara', 'Usman', 'Zara'],
      totalBalance: 800,
      expenses: [
        { id: 'e3', title: 'Hotel', amount: 4000, paidBy: 'Zara', date: '2025-08-12' }
      ]
    }
  ],
  recent: [
    { id: 'r1', title: 'Lunch', amount: 800, paidBy: 'Sara', date: '2025-10-28' },
    { id: 'r2', title: 'Groceries', amount: 1200, paidBy: 'Usman', date: '2025-10-20' }
  ],
  people: [
    { id: 'p1', name: 'Ali', amount: -500, note: 'You owe Ali for dinner' },
    { id: 'p2', name: 'Sara', amount: 900, note: 'Sara owes you for tickets' }
  ]
}

export default mock
