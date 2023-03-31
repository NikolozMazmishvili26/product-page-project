import styled from "styled-components";

// import assets

import {
  product1Thumbnail,
  product2Thumbnail,
  proudct3Thumbnail,
  product4Thumbnail,
} from "../../assets";

// import component

import { Thumbnail } from "../../components";

// thumbnails array

const thumbnails = [
  product1Thumbnail,
  product2Thumbnail,
  proudct3Thumbnail,
  product4Thumbnail,
];

function Thumbnails({
  setCurrentIndex,
  currentIndex,
}: {
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  currentIndex: number;
}) {
  return (
    <ThumbnailContainer>
      {thumbnails.map((thumbnail, Index) => {
        return (
          <Thumbnail
            key={Index}
            thumbnail={thumbnail}
            setCurrentIndex={setCurrentIndex}
            Index={Index}
            currentIndex={currentIndex}
          />
        );
      })}
    </ThumbnailContainer>
  );
}

export default Thumbnails;

// thumbnails

const ThumbnailContainer = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
  }
`;
