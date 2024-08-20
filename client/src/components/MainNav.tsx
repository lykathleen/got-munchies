import React from 'react';
import { Button } from './ui/button';

const MainNav = () => {
  return (
    <Button
      variant="ghost"
      className="font-bold hover:text-pink-500 hover:bg-white"
    >
      Log Me In
    </Button>
  );
};

export default MainNav;
