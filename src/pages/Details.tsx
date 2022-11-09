import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Obj } from 'reselect/es/types';
import CatDataService from '../services/CatDataService';
import ICatsData, { RootState } from '../types/ICatsData';
import styled from 'styled-components';
import Stars from '../components/Stars';

export type Cat = {
  child_friendly: number;
  affection_level: number;
  adaptability: number;
  name: string;
  dog_friendly: number;
  energy_level: number;
  grooming: number;
  hairless: number;
  health_issues: number;
  hypoallergenic: number;
  indoor: number;
  intelligence: number;
  shedding_level: number;
  life_span: string;
  origin: string;
  social_needs: number;
  description: string;
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
      <img src={catImg} alt='' />
      <h4>
        {cat ? (
          <InfoContainer>
            <h4>Cat name : {cat.name}</h4>
            <h5>Life Span: {cat.life_span} years</h5>
            <h5>Origin: {cat.origin}</h5>
            <p>Description: {cat.description}</p>
            <hr />
            <Rating>
              <h5>Adaptability: {Stars(cat.adaptability)}</h5>
              <h5>Affection: {Stars(cat.affection_level)}</h5>
              <h5>Child Friendly: {Stars(cat.child_friendly)}</h5>
              <h5>Dog Friendly: {Stars(cat.dog_friendly)}</h5>
              <h5>Energy Level: {Stars(cat.energy_level)}</h5>
              <h5>Grooming: {Stars(cat.grooming)}</h5>
              <h5>Hairless: {Stars(cat.hairless)}</h5>
              <h5>Health Issues: {Stars(cat.health_issues)}</h5>
              <h5>Hypoallergenic: {Stars(cat.hypoallergenic)}</h5>
              <h5>Indoor: {Stars(cat.indoor)}</h5>
              <h5>Intelligence: {Stars(cat.intelligence)}</h5>
              <h5>Sehdding Level: {Stars(cat.shedding_level)}</h5>
              <h5>Social Needs: {Stars(cat.social_needs)}</h5>
            </Rating>
          </InfoContainer>
        ) : (
          ' This endpoint is broken, please try another one'
        )}
      </h4>
    </Wrapper>
  );
};

export default Details;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 410px;
  margin: 0 auto;

  img {
    margin: 10px 0;
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

const InfoContainer = styled.div``;

const Rating = styled.div`
  width: max-content;
  margin: 0 auto;
`;
