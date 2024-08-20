import React from 'react';
import landing from '../assets/landing.png';
import appDownload from '../assets/appDownload.png';

const Home = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-5xl font-bold tracking-tight text-pink-600">
          Satisfy your munchies today
        </h1>
        <span className="text-xl">It's just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landing} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Say bye bye to your munchies even faster!
          </span>
          <span>
            Download the gotMunchies app for faster ordering and personalized
            recommendations
          </span>
          <img src={appDownload} />
        </div>
      </div>
    </div>
  );
};

export default Home;
