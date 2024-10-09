export interface User {
  _id: string;
  email: string;
  name: string;
  address: string;
  city: string;
  country: string;
}

interface MenuItem {
  _id: string;
  name: string;
  number: string;
}
export interface Restaurant {
  _id: string;
  user: string;
  restaurantName: string;
  city: string;
  country: string;
  deliveryPrice: number;
  estimatedDeliveryTime: number;
  cuisines: string[];
  menuItems: MenuItem[];
  imageUrl: string;
  lastUpdated: string;
}
