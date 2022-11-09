import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CatDataService from '../services/CatDataService';
import ICatsData, { RootState } from '../types/ICatsData';

const Details = () => {
  const [cat, setCat] = useState({});
  const { currentCat } = useSelector((state: RootState) => state.cat);

  let query = currentCat.slice(0, 3);
  console.log(query);

  useEffect(() => {
    const getCat = () => {
      try {
        CatDataService.get(query)
          .then((response: any) => {
            setCat(response.data);
            console.log(response);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getCat();
  }, []);

  return <></>;
};

export default Details;
