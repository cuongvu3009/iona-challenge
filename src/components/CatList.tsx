import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCat } from '../redux/features/catSlice';
import CatDataService from '../services/CatDataService';
import ICatsData from '../types/ICatsData';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

const CatList = () => {
  const [cats, setCats] = useState<ICatsData[]>([]);
  const [typing, setTyping] = useState<string | number>('');
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

  return (
    <Wrapper>
      <SearchBox>
        <BsSearch />{' '}
        <input
          type='text'
          placeholder='Lower case only...'
          onChange={(e) => setTyping(e.target.value)}
        />
      </SearchBox>

      <h4>
        Some API endpoints does not work due to API provider, for example
        American Bobtail, American Curl, Shorthair, Australian Mist ...,
        otherwise, the rest works like a charm. If you had any problem accessing
        an endpoint, please try another one!
      </h4>

      {cats &&
        cats
          .filter((e: any) => e.name.toLowerCase().includes(typing))
          .map((cat: ICatsData) => (
            <button
              key={cat.id}
              onClick={() => {
                dispatch(getCat(cat.id));
                navigate(`/${cat.id}`);
              }}
            >
              {cat.name}
            </button>
          ))}
    </Wrapper>
  );
};

export default CatList;

const Wrapper = styled.div`
  text-align: center;
`;

const SearchBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2px;
  margin: 10px;

  input {
    padding: 5px;
    width: 300px;
  }
`;
