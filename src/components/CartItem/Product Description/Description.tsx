import styled from "styled-components";
import { cartItemsProps } from "../../../App";

// import components
import { PriceContainer, ButtonContainer } from "../../../components";

function Description({
  cartItems,
  setCartItems,
}: {
  cartItems: cartItemsProps[];
  setCartItems: React.Dispatch<React.SetStateAction<cartItemsProps[]>>;
}) {
  return (
    <Container>
      <ProductName>Sneaker Company</ProductName>
      <Title>Fall Limited Edition Sneakers</Title>
      <Desc>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </Desc>
      {/* price container component*/}
      <PriceContainer />
      {/* button container component */}
      <ButtonContainer cartItems={cartItems} setCartItems={setCartItems} />
    </Container>
  );
}

export default Description;

const Container = styled.div`
  margin: auto;
  padding: 24px 24px 88px 24px;
  @media screen and (min-width: 1110px) {
    max-width: 450px;
    width: 100%;
    padding: 0px;
  }
`;

const ProductName = styled.h4`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 15px;
  letter-spacing: 1.84615px;
  text-transform: uppercase;
  color: var(--orange);

  @media screen and (min-width: 1110px) {
    font-size: 13px;
    line-height: 16px;
    letter-spacing: 2px;
  }
`;

const Title = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  color: var(--very-dark-blue);
  margin-top: 19px;
  @media screen and (min-width: 1110px) {
    font-size: 44px;
    line-height: 48px;
    margin-top: 27px;
  }
`;

const Desc = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 25px;
  color: var(--dark-grayish-blue);
  margin-top: 15px;
  @media screen and (min-width: 1110px) {
    font-size: 16px;
    line-height: 26px;
    margin-top: 32px;
  }
`;
