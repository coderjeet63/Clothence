import React from 'react';
import Hero from '../components/Hero';
import LatestCollections from '../components/LatestCollections';
import OurPolicy from '../components/OurPolicy';
import Offer from '../components/Offer';


function Home() {
  return (
    <div className="container-global">
      <Hero />
      <h2 className="text-xl font-bold mt-4 text-center my-2">LATEST COLLECTIONS</h2>
      <LatestCollections />
      <OurPolicy/>
      <Offer/>
    </div>
  );
}

export default Home;
