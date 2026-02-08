// Current campaign data

export const campaign = {
  title: 'Street Dogs & Cats Food Support',
  location: 'Mumbai, Maharashtra, India',
  description: 'Our pilot campaign focuses on providing regular meals to street dogs and cats in the Andheri area of Mumbai. Through community partnerships, we distribute high-quality pet food to approximately 150 animals daily.',
  monthlyTarget: 2000,
  currentProgress: 847,
  startDate: 'January 2026',
  status: 'active',
  
  metrics: {
    animalsHelped: 150,
    mealsProvided: 3420,
    daysActive: 28,
    feedingStations: 5,
  },

  updates: [
    {
      id: 1,
      date: 'February 5, 2026',
      title: 'New Feeding Station Added',
      content: 'Thanks to growing support, we established our 5th feeding station near Andheri Railway Station. This location serves approximately 30 street dogs and 12 cats daily.',
      type: 'milestone',
    },
    {
      id: 2,
      date: 'January 28, 2026',
      title: 'First Month Complete',
      content: 'We successfully completed our first month of operations! Over 3,400 meals served to 150+ animals. Thank you to everyone who shopped and supported.',
      type: 'report',
    },
    {
      id: 3,
      date: 'January 15, 2026',
      title: 'Partnership with Local Vet',
      content: 'Partnered with Dr. Sharma\'s Veterinary Clinic to provide basic health checks for the animals we feed. This ensures they stay healthy beyond just nutrition.',
      type: 'partnership',
    },
  ],

  photos: [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=800&h=600&fit=crop',
      caption: 'Morning feeding session at Station Road',
      date: 'February 3, 2026',
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?w=800&h=600&fit=crop',
      caption: 'Street cats enjoying their meal',
      date: 'February 1, 2026',
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=800&h=600&fit=crop',
      caption: 'Community volunteers helping with distribution',
      date: 'January 28, 2026',
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=800&h=600&fit=crop',
      caption: 'Happy street dog after a good meal',
      date: 'January 25, 2026',
    },
  ],

  volunteers: {
    count: 12,
    roles: ['Food Distribution', 'Photography', 'Social Media', 'Vet Coordination'],
  },

  transparencyNotes: [
    'Food is purchased in bulk from certified pet food suppliers to maximize value',
    'Distribution happens twice daily: morning (7-8 AM) and evening (6-7 PM)',
    'All receipts are uploaded to monthly impact reports',
    'Photos are taken weekly during feeding sessions (with animal welfare as priority)',
    'No food is wasted - portions are carefully calculated based on animal count',
    'Feeding stations are strategically located where street animals gather naturally',
  ],
}

export function getCampaignProgress() {
  return {
    percentage: Math.min((campaign.currentProgress / campaign.monthlyTarget) * 100, 100),
    remaining: Math.max(campaign.monthlyTarget - campaign.currentProgress, 0),
    current: campaign.currentProgress,
    target: campaign.monthlyTarget,
  }
}
