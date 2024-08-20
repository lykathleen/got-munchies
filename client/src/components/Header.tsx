import React from 'react';
import { Link } from 'react-router-dom';
import MobileNav from './MobileNav';

const Header = () => (
  <div className="border-b-2 border-b-pink-500 py-6">
    <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-3xl font-bold tracking-tight text-pink-500">
        gotMunchies.com
      </Link>
      <div className="md:hidden">
        <MobileNav />
      </div>
    </div>
  </div>
);

export default Header;
