// Historical impact reports archive

export const impactReports = [
  {
    id: 1,
    title: 'January 2026 Impact Report',
    date: 'February 1, 2026',
    month: 'January',
    year: 2026,
    meals: 3420,
    animals: 150,
    commission: 847,
    spent: 823,
    description: 'Our first month of operations! We successfully established 4 feeding stations and served over 3,400 meals to street dogs and cats in the Andheri area. The community response has been overwhelmingly positive, with 12 volunteers joining our distribution efforts.',
    highlights: [
      'Established 4 feeding stations',
      'Onboarded 12 community volunteers',
      'Partnered with local veterinary clinic',
      'Served 150+ unique animals',
    ],
    receipts: [
      '/reports/january-2026/receipt-1.pdf',
      '/reports/january-2026/receipt-2.pdf',
    ],
    photos: [
      'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800',
      'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=800',
      'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800',
    ],
    foodBreakdown: {
      dryFood: '450 kg',
      wetFood: '180 cans',
      treats: '50 packs',
    },
    challenges: 'Initial logistical challenges in establishing consistent feeding schedules were overcome through community coordination.',
    nextSteps: 'Planning to add a 5th feeding station near Andheri Railway Station in February.',
  },
]

export function getLatestReport() {
  return impactReports[0]
}

export function getReportsByYear(year) {
  return impactReports.filter((report) => report.year === year)
}

export function getAllYears() {
  const years = [...new Set(impactReports.map((report) => report.year))]
  return years.sort((a, b) => b - a)
}

// Placeholder for future reports - add new reports to the array above as they're completed
// Format:
// {
//   id: 2,
//   title: 'February 2026 Impact Report',
//   date: 'March 1, 2026',
//   month: 'February',
//   year: 2026,
//   meals: 0,
//   animals: 0,
//   commission: 0,
//   spent: 0,
//   description: '...',
//   highlights: [],
//   receipts: [],
//   photos: [],
//   foodBreakdown: {},
//   challenges: '',
//   nextSteps: '',
// }
