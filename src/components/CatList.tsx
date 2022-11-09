import React, { useState, useEffect } from 'react';
import CatDataService from '../services/CatDataService';
import ICatsData from '../types/ICatsData';

const CatList = () => {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    function retrieveTutorials() {
      CatDataService.getAll()
        .then((response: any) => {
          setCats(response.data);
          console.log(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    }
    retrieveTutorials();
  }, []);

  return (
    <div>
      {cats &&
        cats.map((cat: ICatsData) => <button key={cat.id}>{cat.name}</button>)}
    </div>
  );
};

export default CatList;
