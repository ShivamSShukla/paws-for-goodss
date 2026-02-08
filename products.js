// Product catalog for affiliate shop
// Replace affiliate tags with your Amazon Associates tags

const AMAZON_US_TAG = process.env.NEXT_PUBLIC_AMAZON_US_TAG || 'your-us-tag-20'
const AMAZON_UK_TAG = process.env.NEXT_PUBLIC_AMAZON_UK_TAG || 'your-uk-tag-21'

export const categories = [
  'All Products',
  'Pet Supplies',
  'Home & Kitchen',
  'Electronics',
  'Health & Wellness',
  'Books',
  'Toys & Games',
]

export const products = [
  {
    id: 1,
    name: 'Premium Dog Food - 30lb Bag',
    category: 'Pet Supplies',
    price: 45.99,
    originalPrice: 54.99,
    description: 'High-quality nutrition for your furry friend. Grain-free formula with real meat.',
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=500&h=500&fit=crop',
    badge: 'Popular',
    linkUS: `https://www.amazon.com/dp/B07QXMNF5P?tag=${AMAZON_US_TAG}`,
    linkUK: `https://www.amazon.co.uk/dp/B07QXMNF5P?tag=${AMAZON_UK_TAG}`,
  },
  {
    id: 2,
    name: 'Automatic Pet Feeder',
    category: 'Pet Supplies',
    price: 79.99,
    originalPrice: 99.99,
    description: 'Smart feeder with timer and portion control. Perfect for busy pet parents.',
    image: 'https://images.unsplash.com/photo-1591768575689-1b6bda81145b?w=500&h=500&fit=crop',
    badge: 'Trending',
    linkUS: `https://www.amazon.com/dp/B08L5WNKT7?tag=${AMAZON_US_TAG}`,
    linkUK: `https://www.amazon.co.uk/dp/B08L5WNKT7?tag=${AMAZON_UK_TAG}`,
  },
  {
    id: 3,
    name: 'Stainless Steel Water Bottle',
    category: 'Home & Kitchen',
    price: 24.99,
    description: 'Insulated, BPA-free, keeps drinks cold for 24 hours.',
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&h=500&fit=crop',
    linkUS: `https://www.amazon.com/dp/B07VWS3KJ6?tag=${AMAZON_US_TAG}`,
    linkUK: `https://www.amazon.co.uk/dp/B07VWS3KJ6?tag=${AMAZON_UK_TAG}`,
  },
  {
    id: 4,
    name: 'Wireless Earbuds',
    category: 'Electronics',
    price: 49.99,
    originalPrice: 79.99,
    description: 'Premium sound quality with noise cancellation. 30-hour battery life.',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500&h=500&fit=crop',
    badge: 'Best Seller',
    linkUS: `https://www.amazon.com/dp/B08PZHYWJS?tag=${AMAZON_US_TAG}`,
    linkUK: `https://www.amazon.co.uk/dp/B08PZHYWJS?tag=${AMAZON_UK_TAG}`,
  },
  {
    id: 5,
    name: 'Yoga Mat with Carrying Strap',
    category: 'Health & Wellness',
    price: 34.99,
    description: 'Eco-friendly, non-slip surface. Perfect for home workouts.',
    image: 'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=500&h=500&fit=crop',
    linkUS: `https://www.amazon.com/dp/B0863H4N7F?tag=${AMAZON_US_TAG}`,
    linkUK: `https://www.amazon.co.uk/dp/B0863H4N7F?tag=${AMAZON_UK_TAG}`,
  },
  {
    id: 6,
    name: 'The Psychology of Money',
    category: 'Books',
    price: 14.99,
    description: 'Timeless lessons on wealth, greed, and happiness.',
    image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=500&h=500&fit=crop',
    linkUS: `https://www.amazon.com/dp/0857197681?tag=${AMAZON_US_TAG}`,
    linkUK: `https://www.amazon.co.uk/dp/0857197681?tag=${AMAZON_UK_TAG}`,
  },
  {
    id: 7,
    name: 'Interactive Dog Toy',
    category: 'Pet Supplies',
    price: 19.99,
    description: 'Keep your pup entertained for hours. Durable and treat-dispensing.',
    image: 'https://images.unsplash.com/photo-1585664811087-47f65abbad64?w=500&h=500&fit=crop',
    badge: 'New',
    linkUS: `https://www.amazon.com/dp/B07CTG5LMJ?tag=${AMAZON_US_TAG}`,
    linkUK: `https://www.amazon.co.uk/dp/B07CTG5LMJ?tag=${AMAZON_UK_TAG}`,
  },
  {
    id: 8,
    name: 'Coffee Maker with Timer',
    category: 'Home & Kitchen',
    price: 69.99,
    originalPrice: 89.99,
    description: 'Wake up to fresh coffee. Programmable with auto-shutoff.',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&h=500&fit=crop',
    linkUS: `https://www.amazon.com/dp/B07QXMNF5P?tag=${AMAZON_US_TAG}`,
    linkUK: `https://www.amazon.co.uk/dp/B07QXMNF5P?tag=${AMAZON_UK_TAG}`,
  },
  {
    id: 9,
    name: 'Smart Watch Fitness Tracker',
    category: 'Electronics',
    price: 89.99,
    originalPrice: 129.99,
    description: 'Track your health, steps, sleep, and more. Water-resistant.',
    image: 'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500&h=500&fit=crop',
    badge: 'Trending',
    linkUS: `https://www.amazon.com/dp/B08DFCWVZ4?tag=${AMAZON_US_TAG}`,
    linkUK: `https://www.amazon.co.uk/dp/B08DFCWVZ4?tag=${AMAZON_UK_TAG}`,
  },
  {
    id: 10,
    name: 'LED Desk Lamp',
    category: 'Home & Kitchen',
    price: 39.99,
    description: 'Adjustable brightness, eye-caring technology. USB charging port.',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&h=500&fit=crop',
    linkUS: `https://www.amazon.com/dp/B08ND8ZKJ7?tag=${AMAZON_US_TAG}`,
    linkUK: `https://www.amazon.co.uk/dp/B08ND8ZKJ7?tag=${AMAZON_UK_TAG}`,
  },
  {
    id: 11,
    name: 'Cat Scratching Post Tower',
    category: 'Pet Supplies',
    price: 54.99,
    description: 'Multi-level cat tree with scratching posts and cozy hideaways.',
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?w=500&h=500&fit=crop',
    linkUS: `https://www.amazon.com/dp/B08L5WNKT7?tag=${AMAZON_US_TAG}`,
    linkUK: `https://www.amazon.co.uk/dp/B08L5WNKT7?tag=${AMAZON_UK_TAG}`,
  },
  {
    id: 12,
    name: 'Resistance Bands Set',
    category: 'Health & Wellness',
    price: 21.99,
    description: '5 bands with different resistance levels. Great for home workouts.',
    image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?w=500&h=500&fit=crop',
    linkUS: `https://www.amazon.com/dp/B08DFCWVZ4?tag=${AMAZON_US_TAG}`,
    linkUK: `https://www.amazon.co.uk/dp/B08DFCWVZ4?tag=${AMAZON_UK_TAG}`,
  },
]

export function getProductsByCategory(category) {
  if (category === 'All Products') return products
  return products.filter((p) => p.category === category)
}

export function getFeaturedProducts(count = 6) {
  return products.slice(0, count)
}
