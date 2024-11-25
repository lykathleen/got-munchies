import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
} from '@/api/MyRestaurantApi';
import ManageRestaurantForm from '@/forms/manage-restaurant-form/ManageRestaurantForm';

const ManageRestaurant = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();

  return (
    <ManageRestaurantForm
      onSave={createRestaurant}
      isLoading={isLoading}
      restaurant={restaurant}
    />
  );
};

export default ManageRestaurant;
