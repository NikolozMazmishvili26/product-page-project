import { useEffect, useRef } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
//
import { cartItemsProps } from "../../App";

// import component

import { SingleItem } from "../../components";

function Cart({
  cartItems,
  setCartItems,
  setShowCart,
}: {
  cartItems: cartItemsProps[];
  setCartItems: React.Dispatch<React.SetStateAction<cartItemsProps[]>>;
  setShowCart: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  // container ref

  const containerRef = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      containerRef.current &&
      !(containerRef.current as any).contains(event.target)
    ) {
      setShowCart(false);
    }
  };

  return (
    <Container
      ref={containerRef}
      initial={{ y: "-100vw" }}
      animate={{ y: 0 }}
      transition={{ type: "spring", duration: 0.4 }}
    >
      <CartContent>
        {/* cart header */}
        <Header>
          <CartHeader>
            <Title>Cart</Title>
          </CartHeader>
        </Header>
        {/* cart content */}
        <Wrapper>
          {cartItems.length > 0 ? (
            cartItems.map((cartItem, Index) => {
              return (
                <SingleItem
                  key={Index}
                  cartItem={cartItem}
                  cartItems={cartItems}
                  setCartItems={setCartItems}
                />
              );
            })
          ) : (
            <EmptyTitle>Your cart is empty.</EmptyTitle>
          )}
        </Wrapper>
      </CartContent>
    </Container>
  );
}

export default Cart;

const Container = styled(motion.div)`
  width: 100%;
  position: absolute;
  top: 80px;
  left: 0px;
  padding-left: 8px;
  padding-right: 8px;
  z-index: 9999;

  @media screen and (min-width: 540px) {
    max-width: 500px;
    width: 100%;
    left: auto;
    right: 0px;
  }

  @media screen and (min-width: 1110px) {
    max-width: 360px;
    top: 110px;
    padding: 0px;
  }
`;

const CartContent = styled.div`
  position: relative;
  width: 100%;
  height: 256px;
  background-color: var(--white);
  border-radius: 10px;
  box-shadow: 0px 20px 50px -20px rgba(29, 32, 38, 0.503143);
`;

const Header = styled.div`
  &::after {
    content: "";
    width: 100%;
    height: 1px;
    background-color: #e4e9f2;
    display: block;
  }
`;

const CartHeader = styled.div`
  padding: 24px 0px 27px 24px;
`;

const Title = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: var(--very-dark-blue);
`;

const Wrapper = styled.div``;

const EmptyTitle = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%);
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: var(--dark-grayish-blue);
`;
