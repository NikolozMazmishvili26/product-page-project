import { useState } from "react";
import styled from "styled-components";

// import assets

import {
  product1,
  product2,
  product3,
  product4,
  //
  iconNext,
  iconPrevious,
} from "../../assets";

// import component
import { Thumbnails } from "../../components";

// images array
const images = [product1, product2, product3, product4];

function Slider() {
  //
  const [currentIndex, setCurrentIndex] = useState(0);

  //   next function

  const handleNext = () => {
    if (currentIndex !== images.length - 1) {
      setCurrentIndex((prev) => {
        return prev + 1;
      });
    }
  };

  const handlePrev = () => {
    if (currentIndex !== 0) {
      setCurrentIndex((prev) => {
        return prev - 1;
      });
    }
  };

  return (
    <Container>
      <SliderWrapper>
        <Slide
          src={images[currentIndex]}
          alt={`productImage ${currentIndex}`}
        />
        <PreviousCircle onClick={handlePrev}>
          <img src={iconPrevious} alt="previous" />
        </PreviousCircle>
        <NextCircle onClick={handleNext}>
          <img src={iconNext} alt="previous" />
        </NextCircle>
      </SliderWrapper>
      {/* thumbnails component */}
      <Thumbnails
        setCurrentIndex={setCurrentIndex}
        currentIndex={currentIndex}
      />
    </Container>
  );
}

export default Slider;

const Container = styled.div`
  max-width: 445px;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 32px;
`;

const SliderWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  display: flex;
  align-items: center;

  @media screen and (min-width: 1440px) {
    margin-top: 90px;
    height: 445px;
  }
`;

const Slide = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  @media screen and (min-width: 1440px) {
    border-radius: 15px;
  }
`;

// circle

const PreviousCircle = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--white);
  left: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const NextCircle = styled(PreviousCircle)`
  left: auto;
  right: 16px;
`;
