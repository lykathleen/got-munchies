import { Navigate, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import AuthCallback from './pages/AuthCallback';
import Layout from './layouts/Layout';
import UserProfile from './pages/UserProfile';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero>
            <Home />
          </Layout>
        }
      />
      <Route path="/auth-callback" element={<AuthCallback />} />
      <Route
        path="/user-profile"
        element={
          <Layout>
            <UserProfile />
          </Layout>
        }
      />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;
