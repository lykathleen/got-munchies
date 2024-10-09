import { useCreateMyRestaurant } from '@/api/MyRestaurantApi';
import ManageRestaurantForm from '@/forms/manage-restaurant-form/ManageRestaurantForm';

const ManageRestaurant = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();

  return (
    <ManageRestaurantForm onSave={createRestaurant} isLoading={isLoading} />
  );
};

export default ManageRestaurant;
