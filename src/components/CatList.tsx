import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCat } from '../redux/features/catSlice';
import CatDataService from '../services/CatDataService';
import ICatsData from '../types/ICatsData';

const CatList = () => {
  const [cats, setCats] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const getCats = () => {
      try {
        CatDataService.getAll()
          .then((response: any) => {
            setCats(response.data);
          })
          .catch((e: Error) => {
            console.log(e);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getCats();
  }, []);

  console.log(cats);

  return (
    <div>
      {cats &&
        cats.map((cat: ICatsData) => (
          <button key={cat.id} onClick={() => dispatch(getCat(cat.id))}>
            {cat.name}
          </button>
        ))}
    </div>
  );
};

export default CatList;
