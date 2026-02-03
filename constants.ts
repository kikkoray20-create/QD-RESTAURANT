import { MenuItem, Review } from './types';

export const RESTAURANT_INFO = {
  name: "QD Restaurant",
  hindiName: "क्यू डीस रेस्टोरेंट",
  rating: 4.1,
  totalReviews: 3197,
  phone: "093191 92335",
  address: "QD Restaurant, 2526, Ground Floor, Hudson Lane, Kingsway Camp, beside Uttam chai, University Enclave, GTB Nagar, New Delhi, Delhi 110033",
  plusCode: "M6W3+3P New Delhi, Delhi",
  hoursSummary: "11:30 AM – 11:00 PM Daily",
  hours: "Open daily · Closes at 11:00 PM",
  detailedHours: [
    { day: "Monday", time: "11:30 am – 11 pm" },
    { day: "Tuesday", time: "11:30 am – 11 pm" },
    { day: "Wednesday", time: "11:30 am – 11 pm" },
    { day: "Thursday", time: "11:30 am – 11 pm" },
    { day: "Friday", time: "11:30 am – 11 pm" },
    { day: "Saturday", time: "11:30 am – 11 pm" },
    { day: "Sunday", time: "11:30 am – 11 pm" }
  ],
  swiggyLink: "https://www.swiggy.com/city/delhi/qd-restaurant-hudson-lane-gtb-nagar-rest756440",
  bookingLink: "https://www.swiggy.com/restaurants/qd-restaurant-hudson-lane-gtb-nagar-delhi-756440/dineout?is_retargeting=true&media_source=GoogleReserve&utm_campaign=GoogleMap&utm_source=GoogleReserve",
  instagram: "https://www.instagram.com/qdrestaurant"
};

export const MENU_ITEMS: MenuItem[] = [
  // MOMOS
  {
    id: 'm1',
    name: 'Tandoori Chicken Momos',
    description: 'The legend of Hudson Lane. Succulent chicken momos marinated in a fiery tandoori blend and grilled to perfection.',
    price: '₹285',
    category: 'Momos',
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'm2',
    name: 'Veg Tandoori Momos',
    description: 'Fresh vegetable fillings in our signature tandoori marinade, served with mint chutney.',
    price: '₹245',
    category: 'Momos',
    image: 'https://images.unsplash.com/photo-1662116765994-1e4200c43589?auto=format&fit=crop&w=800&q=80'
  },
  
  // PIZZA
  {
    id: 'p1',
    name: 'Bhoot Jolokia Pizza',
    description: 'Caution: Extremely Spicy! Topped with the world-famous Ghost Pepper sauce and premium cheese.',
    price: '₹445',
    category: 'Pizza',
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p2',
    name: 'Chicken Tikka Masala Pizza',
    description: 'A fusion masterpiece featuring chunks of spicy chicken tikka, onions, and bell peppers.',
    price: '₹415',
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p3',
    name: 'Garden Vegetable Pizza',
    description: 'Loaded with fresh mushrooms, olives, corn, onions, and capsicum on a thin crust.',
    price: '₹375',
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'p4',
    name: 'Margherita Pizza',
    description: 'The classic Italian favorite with fresh basil, mozzarella, and our secret tomato sauce.',
    price: '₹325',
    category: 'Pizza',
    image: 'https://images.unsplash.com/photo-1604068549290-dea0e4a305ca?auto=format&fit=crop&w=800&q=80'
  },

  // STARTERS & MAINS
  {
    id: 's1',
    name: 'Crispy Honey Chilli Potato',
    description: 'Crispy potato fingers tossed in a sweet and spicy honey chilli glaze.',
    price: '₹265',
    category: 'Starters',
    image: 'https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'mc1',
    name: 'Paneer Butter Masala',
    description: 'Rich, creamy and buttery tomato gravy with melt-in-the-mouth paneer cubes.',
    price: '₹345',
    category: 'Main Course',
    image: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80'
  },

  // DESSERTS
  {
    id: 'd1',
    name: 'Nutella Darsan Sizzler',
    description: 'Honey-fried noodles served on a sizzling plate with vanilla ice cream and an ocean of Nutella.',
    price: '₹295',
    category: 'Desserts',
    isBestseller: true,
    image: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?auto=format&fit=crop&w=800&q=80'
  },
  
  // BEVERAGES
  {
    id: 'b1',
    name: 'Fresh Mint Mojito',
    description: 'A refreshing mix of mint, lime, sugar, and soda. The perfect palate cleanser.',
    price: '₹145',
    category: 'Beverages',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80'
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    author: 'Rahul Sharma',
    rating: 5,
    text: 'The Tandoori Momos are a legendary experience. Best place for students in North Campus.',
    date: '2 months ago'
  },
  {
    id: 'r2',
    author: 'Priya Verma',
    rating: 4,
    text: 'Good food, great vibe. Can get really crowded during weekends so plan accordingly!',
    date: '1 month ago'
  },
  {
    id: 'r3',
    author: 'Aniket Gupta',
    rating: 4,
    text: 'Love the Nutella Darsan. The service is fast despite the heavy crowd.',
    date: '3 weeks ago'
  }
];