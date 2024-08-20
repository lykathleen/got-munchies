import React from 'react';

const Footer = () => {
  return (
    <div className="bg-pink-500 py-10">
      <div className="container max-auto flex flex-col md:flex-row justify-between">
        <span className="text-3xl text-white font-cold tracking-tight">
          gotMunchies.com
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <span>Privacy Policy</span>
          <span>Terms and Conditions</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
