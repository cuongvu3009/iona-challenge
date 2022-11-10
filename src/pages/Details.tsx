import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import CatDataService from '../services/CatDataService';
import ICatsData, { RootState } from '../types/ICatsData';
import styled from 'styled-components';
import Stars from '../components/Stars';
import { Link } from 'react-router-dom';
import SimpleImageSlider from 'react-simple-image-slider';

const Details = () => {
  const [cat, setCat] = useState<ICatsData | undefined>(undefined);
  const [catImg, setCatImg] = useState<string[] | null>([]);
  const [images, setImages] = useState<string[]>([]);
  const { currentCat } = useSelector((state: RootState) => state.cat);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  let query = currentCat.slice(0, 3);

  useEffect(() => {
    const getCat = () => {
      setIsLoading(true);
      try {
        //	get cat
        CatDataService.get(query)
          .then((response: any) => {
            setCat(response.data[0]);
            setIsLoading(false);
          })
          .catch((e: Error) => {
            console.log(e);
            setIsLoading(false);
          });

        // get cat img
        CatDataService.getImg(currentCat)
          .then((response: any) => {
            setCatImg(response.data);
            if (catImg) {
              setImages(catImg?.map((obj: any) => obj?.url));
            }
            setIsLoading(false);
          })
          .catch((e: Error) => {
            console.log(e);
            setIsLoading(false);
          });
      } catch (error) {
        console.log(error);
        setIsLoading(false);
      }
    };

    getCat();
  }, []);

  if (isLoading) {
    return (
      <LoadingWrapper>
        <h2>Loading...</h2>
      </LoadingWrapper>
    );
  }

  console.log(typeof images);

  return (
    <Wrapper>
      <PictureContainer>
        <SimpleImageSlider
          width={390}
          height={320}
          images={images}
          showBullets={true}
          showNavs={false}
        />
      </PictureContainer>

      <h4>
        <div style={{ textAlign: 'center' }}>
          <Link to='/'>
            <button>Back</button>
          </Link>
        </div>

        {cat ? (
          <InfoContainer>
            <h4>Cat breed : {cat.name}</h4>
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

            <hr />

            <h3>Galery</h3>
            <PictureContainer>
              {catImg?.map((img: any) => {
                return <img key={img.id} src={img.url} alt='' />;
              })}
            </PictureContainer>
          </InfoContainer>
        ) : (
          <p style={{ textAlign: 'center' }}>
            This information session can not be loaded due to technical problem,
            please try another one!
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

const LoadingWrapper = styled.div`
  text-align: center;
  margin: 20px;
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
    width: 310px;
    height: 250px;
    object-fit: cover;
    margin: 0 2px;
  }
`;

const InfoContainer = styled.div`
  text-align: center;
  width: 60%;
  margin: 0 auto;
`;

const Rating = styled.div`
  width: max-content;
  margin: 0 auto;
`;
