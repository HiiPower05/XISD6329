import { Product } from '../context/CartContext';

export const products: Product[] = [
  // Coffee
  {
    id: 1,
    name: 'Caramel Macchiato',
    price: 89.99,
    description: 'Espresso with vanilla-flavored syrup and steamed milk',
    image: '☕',
    category: 'Coffee'
  },
  {
    id: 2,
    name: 'Iced Latte',
    price: 79.99,
    description: 'Smooth espresso over ice with cold milk',
    image: '🧊',
    category: 'Coffee'
  },
  {
    id: 3,
    name: 'Cappuccino',
    price: 74.99,
    description: 'Espresso with steamed milk foam',
    image: '☕',
    category: 'Coffee'
  },
  {
    id: 4,
    name: 'Mocha',
    price: 84.99,
    description: 'Espresso with chocolate and steamed milk',
    image: '☕',
    category: 'Coffee'
  },
  {
    id: 5,
    name: 'Americano',
    price: 64.99,
    description: 'Espresso with hot water',
    image: '☕',
    category: 'Coffee'
  },
  {
    id: 6,
    name: 'Flat White',
    price: 79.99,
    description: 'Espresso with microfoam milk',
    image: '☕',
    category: 'Coffee'
  },
  // Pastries
  {
    id: 7,
    name: 'Blueberry Muffin',
    price: 54.99,
    description: 'Fresh-baked with real blueberries',
    image: '🧁',
    category: 'Pastries'
  },
  {
    id: 8,
    name: 'Croissant',
    price: 44.99,
    description: 'Buttery, flaky French pastry',
    image: '🥐',
    category: 'Pastries'
  },
  {
    id: 9,
    name: 'Chocolate Donut',
    price: 39.99,
    description: 'Glazed donut with chocolate frosting',
    image: '🍩',
    category: 'Pastries'
  },
  {
    id: 10,
    name: 'Cinnamon Roll',
    price: 59.99,
    description: 'Warm roll with cream cheese icing',
    image: '🧁',
    category: 'Pastries'
  },
  // Snacks
  {
    id: 11,
    name: 'Sandwich',
    price: 94.99,
    description: 'Fresh chicken and avocado on whole grain',
    image: '🥪',
    category: 'Snacks'
  },
  {
    id: 12,
    name: 'Bagel',
    price: 49.99,
    description: 'Toasted bagel with cream cheese',
    image: '🥯',
    category: 'Snacks'
  },
  {
    id: 13,
    name: 'Cookie',
    price: 34.99,
    description: 'Chocolate chip cookie',
    image: '🍪',
    category: 'Snacks'
  },
  {
    id: 14,
    name: 'Pretzel',
    price: 44.99,
    description: 'Soft salted pretzel',
    image: '🥨',
    category: 'Snacks'
  },
  // Beverages
  {
    id: 15,
    name: 'Orange Juice',
    price: 49.99,
    description: 'Freshly squeezed orange juice',
    image: '🧃',
    category: 'Beverages'
  },
  {
    id: 16,
    name: 'Smoothie',
    price: 69.99,
    description: 'Mixed berry smoothie',
    image: '🥤',
    category: 'Beverages'
  },
  {
    id: 17,
    name: 'Iced Tea',
    price: 54.99,
    description: 'Refreshing peach iced tea',
    image: '🧋',
    category: 'Beverages'
  },
  {
    id: 18,
    name: 'Hot Chocolate',
    price: 64.99,
    description: 'Rich hot chocolate with whipped cream',
    image: '☕',
    category: 'Beverages'
  }
];
