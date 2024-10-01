import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import AuthCallback from './pages/AuthCallback';
import UserProfile from './pages/UserProfile';
import ProtectedRoute from './auth/ProtectedRoute';
import AppLayout from './layouts/AppLayout';
import ManageRestaurant from './pages/ManageRestaurant';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AppLayout showHero>
            <Home />
          </AppLayout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallback />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <AppLayout>
              <UserProfile />
            </AppLayout>
          }
        />
        <Route
          path="/manage-restaurant"
          element={
            <AppLayout>
              <ManageRestaurant />
            </AppLayout>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
