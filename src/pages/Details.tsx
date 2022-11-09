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
  const [cat, setCat] = useState<Cat | undefined>(undefined);
  const [catImg, setCatImg] = useState([]);
  const [isRender, setIsRender] = useState(0);
  const { currentCat } = useSelector((state: RootState) => state.cat);

  let query = currentCat.slice(0, 3);

  const getCat = () => {
    try {
      CatDataService.get(query)
        .then((response: any) => {
          setCat(response.data[0]);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const getCatImg = () => {
    try {
      CatDataService.getImg(currentCat)
        .then((response: any) => {
          setCatImg(response.data);
        })
        .catch((e: Error) => {
          console.log(e);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCat();
  }, []);

  useEffect(() => {
    getCatImg();
  }, []);

  console.log(catImg);

  return (
    <Wrapper>
      <PictureContainer>
        {catImg.map((img: any) => {
          return <img key={img.id} src={img.url} alt='' />;
        })}
      </PictureContainer>

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
          <p style={{ textAlign: 'center' }}>
            This endpoint is broken, please try another one
          </p>
        )}
      </h4>
    </Wrapper>
  );
};

export default Details;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const PictureContainer = styled.div`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  flex-wrap: wrap;
  gap: 4px;

  img {
    width: 250px;
    height: 250px;
    object-fit: cover;
    margin: 0 2px;
  }
`;

const InfoContainer = styled.div`
  width: 410px;
  margin: 0 auto;
`;

const Rating = styled.div`
  width: max-content;
  margin: 0 auto;
`;
