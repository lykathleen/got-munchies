import React from 'react';
import { Button } from './ui/button';
import { useAuth0 } from '@auth0/auth0-react';

const MainNav = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      variant="ghost"
      className="font-bold hover:text-pink-500 hover:bg-white"
      onClick={async () => await loginWithRedirect()}
    >
      Log Me In
    </Button>
  );
};

export default MainNav;
