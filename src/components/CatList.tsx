import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getCat } from '../redux/features/catSlice';
import CatDataService from '../services/CatDataService';
import ICatsData from '../types/ICatsData';
import styled from 'styled-components';

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

  return (
    <Wrapper>
      <h4>
        Some API endpoints does not work due to API provider, for example
        American Bobtail, American Curl, Shorthair, Australian Mist ...,
        otherwise, the rest works like a charm. If you had any problem accessing
        an endpoint, please try another one!
      </h4>

      {cats &&
        cats.map((cat: ICatsData) => (
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
