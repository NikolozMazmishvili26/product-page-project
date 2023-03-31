import styled from "styled-components";

function Thumbnail({
  thumbnail,
  setCurrentIndex,
  Index,
  currentIndex,
}: {
  thumbnail: string;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  Index: number;
  currentIndex: number;
}) {
  //
  const handleThumbnail = () => {
    setCurrentIndex(Index);
  };

  return (
    <SingleThumbnail
      image={thumbnail}
      onClick={handleThumbnail}
      Index={Index}
      currentIndex={currentIndex}
    />
  );
}

export default Thumbnail;

const SingleThumbnail = styled.div<{
  Index: number;
  currentIndex: number;
  image: string;
}>`
  position: relative;
  width: 88px;
  height: 88px;
  border-radius: 10px;
  cursor: pointer;
  background-image: ${(props) =>
    props.Index === props.currentIndex
      ? `linear-gradient(0deg, rgba(255, 255, 255, 0.75), rgba(255, 255, 255, 0.75)), url(${props.image})`
      : `url(${props.image})`};
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border: ${(props) =>
    props.Index === props.currentIndex && "2px solid var(--orange)"};
`;

const ImageBlur = styled.div``;
