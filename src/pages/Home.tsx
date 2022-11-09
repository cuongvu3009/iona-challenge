import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CatList from '../components/CatList';

const Home = () => {
  return (
    <div>
      <CatList />
    </div>
  );
};

export default Home;
