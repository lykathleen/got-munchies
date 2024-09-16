import { useGetMyUser, useUpdateMyUser } from '@/api/MyUserApi';
import UserProfileForm from '@/forms/user-profile-form/UserProfileForm';

const UserProfile = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return <span>LOADING</span>;
  }

  if (!currentUser) {
    return <span>Cannot load user profile</span>;
  }

  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={updateUser}
      isLoading={isUpdateLoading}
    />
  );
};

export default UserProfile;
