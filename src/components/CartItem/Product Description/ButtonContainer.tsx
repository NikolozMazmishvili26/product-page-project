import { useState } from "react";
import styled from "styled-components";
import { cartItemsProps } from "../../../App";

// import assets
import { iconMinus, iconPlus, iconCart, product1 } from "../../../assets";

function ButtonContainer({
  cartItems,
  setCartItems,
}: {
  cartItems: cartItemsProps[];
  setCartItems: React.Dispatch<React.SetStateAction<cartItemsProps[]>>;
}) {
  //
  const [counter, setCounter] = useState(1);

  const handleMinus = () => {
    if (counter !== 1) {
      setCounter((prev) => prev - 1);
    }
  };

  // add to cart function
  const handleAddToCart = () => {
    // check if an item with the same properties exists in the cart
    const existingItemIndex = cartItems.findIndex(
      (item) =>
        item.productName === "Fall Limited Edition Sneakers" &&
        item.money === 125
      // add any other conditions to check for other properties if needed
    );

    if (existingItemIndex !== -1) {
      // if a matching item is found, update its quantity
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity = counter;
      setCartItems(updatedCartItems);
    } else {
      // otherwise, add a new item to the cart
      setCartItems((cartItem) => [
        ...cartItem,
        {
          id: new Date().getTime().toString(),
          image: product1,
          money: 125,
          productName: "Fall Limited Edition Sneakers",
          quantity: counter,
        },
      ]);
    }
  };

  return (
    <Container>
      <CounterBox>
        <Image src={iconMinus} alt="minus" onClick={handleMinus} />
        <Counter>{counter}</Counter>
        <Image
          src={iconPlus}
          alt="plus"
          onClick={() => setCounter((prev) => prev + 1)}
        />
      </CounterBox>
      <AddToCartButton onClick={handleAddToCart}>
        <Wrapper>
          <CartImage src={iconCart} alt="cart" />
          <Title>Add to cart</Title>
        </Wrapper>
      </AddToCartButton>
    </Container>
  );
}

export default ButtonContainer;

const Container = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  @media screen and (min-width: 1110px) {
    flex-direction: row;
    row-gap: 0px;
    column-gap: 16px;
    margin-top: 32px;
  }
`;

const CounterBox = styled.div`
  width: 100%;
  height: 56px;
  background-color: var(--light-grayish-blue);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 24px;
  padding-right: 24px;
  border-radius: 10px;
  @media screen and (min-width: 1110px) {
    width: 157px;
  }
`;

const Image = styled.img`
  cursor: pointer;
`;

const Counter = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
  color: var(--very-dark-blue);
`;

const AddToCartButton = styled.button`
  font-family: "Kumbh Sans";
  width: 100%;
  height: 56px;
  background-color: var(--orange);
  border: none;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition-duration: 0.2s;

  @media screen and (min-width: 1110px) {
    width: 272px;
  }

  &:hover {
    cursor: pointer;
    background-color: #ffab6a;
  }
`;

const CartImage = styled.img`
  filter: brightness(0) invert(1);
`;

const Title = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: var(--white);
`;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-end;
  column-gap: 16px;
`;
