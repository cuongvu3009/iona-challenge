import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Obj } from 'reselect/es/types';
import CatDataService from '../services/CatDataService';
import ICatsData, { RootState } from '../types/ICatsData';
import styled from 'styled-components';

export type Cat = {
  name: string;
};

const Details = () => {
  const [cat, setCat] = useState<Cat | null>({});
  const [catImg, setCatImg] = useState(null);
  const { currentCat } = useSelector((state: RootState) => state.cat);

  let query = currentCat.slice(0, 3);

  useEffect(() => {
    const getCat = () => {
      try {
        CatDataService.get(query)
          .then((response: any) => {
            setCat(response.data[0]);
          })
          .catch((e: Error) => {
            console.log(e);
          });

        CatDataService.getImg(currentCat)
          .then((response: any) => {
            setCatImg(response.data[0].url);
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

  console.log(cat);

  return (
    <Wrapper>
      <img
        src={catImg}
        alt=''
        style={{ width: '500px', height: '500px', objecFit: 'cover' }}
      />
      <h4>
        Cat name:
        {cat ? cat.name : ' This endpoint is broken, please try another one'}
      </h4>
    </Wrapper>
  );
};

export default Details;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 0 auto;

  img {
    margin: 10px 0;
  }
`;
