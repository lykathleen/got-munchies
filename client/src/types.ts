export interface User {
  _id: string;
  email: string;
  name: string;
  address: string;
  city: string;
  country: string;
}

export interface MenuItem {
  _id: string;
  name: string;
  price: number;
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
