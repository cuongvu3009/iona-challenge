import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCat } from '../redux/features/catSlice';
import CatDataService from '../services/CatDataService';
import ICatsData from '../types/ICatsData';

const CatList = () => {
  const [cats, setCats] = useState([]);
  const [choosen, setChoosen] = useState('');
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

  useEffect(() => {
    try {
      dispatch(getCat(choosen));
      console.log(choosen);
    } catch (error) {
      console.log(error);
    }
  }, [choosen]);

  return (
    <div>
      {cats &&
        cats.map((cat: ICatsData) => (
          <button key={cat.id} onClick={() => setChoosen(cat.id)}>
            {cat.name}
          </button>
        ))}
    </div>
  );
};

export default CatList;
