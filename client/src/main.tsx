import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './global.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AuthProviderWithNavigate from './auth/AuthProviderWithNavigate';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <AuthProviderWithNavigate>
        <AppRoutes />
      </AuthProviderWithNavigate>
    </Router>
  </StrictMode>
);
