import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CatList from '../components/CatList';

const Home = () => {
  return (
    <div>
      <h4>
        Some API endpoints does not work due to API provider, for example
        American Bobtail, American Curl, Shorthair, Australian Mist ...,
        otherwise, the rest works like a charm. If you had any problem accessing
        an endpoint, please try another one!
      </h4>
      <CatList />
    </div>
  );
};

export default Home;
