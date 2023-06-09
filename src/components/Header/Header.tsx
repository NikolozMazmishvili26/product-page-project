import { useState, useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { cartItemsProps } from "../../App";

// import icons
import { iconMenu, logo, avatar, iconCart, iconClose } from "../../assets";

// import variants

import { backdropVariant, menuVariant } from "./Variants";

// import component
import { Cart } from "../../components";

function Header({
  cartItems,
  setCartItems,
}: {
  cartItems: cartItemsProps[];
  setCartItems: React.Dispatch<React.SetStateAction<cartItemsProps[]>>;
}) {
  //
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  //
  const backdropRef = useRef<HTMLDivElement | null>(null);

  const handleBackdrop: React.MouseEventHandler<HTMLDivElement> | undefined = (
    event
  ) => {
    if (event.target === backdropRef.current) {
      setShowMenu(false);
    }
  };

  return (
    <>
      <Wrapper>
        <Container>
          <LeftSide>
            <MenuIcon
              src={iconMenu}
              alt="menu"
              onClick={() => setShowMenu(true)}
            />
            <img src={logo} alt="logo" style={{ cursor: "pointer" }} />
            {/* Menu */}
            <HeaderNav>
              <MenuList>
                <MenuItem>Collections</MenuItem>
                <MenuItem>Men</MenuItem>
                <MenuItem>Women</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
              </MenuList>
            </HeaderNav>
          </LeftSide>
          <RightSide>
            <CartBox>
              {cartItems.length > 0 && (
                <CartCircle>
                  <CircleValue>
                    {cartItems.map((cartItem) => {
                      return cartItem.quantity;
                    })}
                  </CircleValue>
                </CartCircle>
              )}
              <img
                src={iconCart}
                alt="cart"
                style={{ cursor: "pointer" }}
                onClick={() => setShowCart(true)}
              />
            </CartBox>
            <Avatar src={avatar} alt="avatar" />
          </RightSide>
          {/* cart component */}
          {showCart && (
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              setShowCart={setShowCart}
            />
          )}
        </Container>
      </Wrapper>
      {/* show menu */}
      {showMenu && (
        <Backdrop
          ref={backdropRef}
          onClick={handleBackdrop}
          showMenu={showMenu}
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
        >
          <Menu showMenu={showMenu} variants={menuVariant}>
            <img
              src={iconClose}
              alt="close"
              style={{ cursor: "pointer" }}
              onClick={() => setShowMenu(false)}
            />
            {/* menu nav */}
            <MenuNav>
              <MenuList>
                <MenuItem>Collections</MenuItem>
                <MenuItem>Men</MenuItem>
                <MenuItem>Women</MenuItem>
                <MenuItem>About</MenuItem>
                <MenuItem>Contact</MenuItem>
              </MenuList>
            </MenuNav>
          </Menu>
        </Backdrop>
      )}
    </>
  );
}

export default Header;

const Wrapper = styled.div`
  @media screen and (min-width: 1110px) {
    &::after {
      content: "";
      width: 100%;
      height: 1px;
      background-color: var(--grayish-blue);
      display: block;
    }
  }
`;

const Container = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 28px 24px;
  @media screen and (min-width: 1110px) {
    padding: 43px 0px 34px 0px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  @media screen and (min-width: 1110px) {
    column-gap: 57px;
    align-items: flex-start;
  }
`;

const MenuIcon = styled.img`
  cursor: pointer;
  @media screen and (min-width: 1110px) {
    display: none;
  }
`;

const HeaderNav = styled.div`
  display: none;

  @media screen and (min-width: 1110px) {
    display: block;
  }
`;

// right side

const RightSide = styled.div`
  display: flex;
  align-items: center;
  column-gap: 22px;
  @media screen and (min-width: 1110px) {
    column-gap: 47px;
  }
`;

const Avatar = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    border: 2px solid var(--orange);
    border-radius: 50%;
  }

  @media screen and (min-width: 1110px) {
    width: 50px;
    height: 50px;
  }
`;

const CartBox = styled.div`
  position: relative;
  width: 28px;
  height: 26px;
`;

const CartCircle = styled.div`
  position: absolute;
  width: 19px;
  height: 13px;
  background-color: var(--orange);
  border-radius: 6.5px;
  bottom: 20px;
  right: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CircleValue = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 10px;
  line-height: 12px;
  color: var(--white);
`;

// show menu

const Backdrop = styled(motion.div)<{ showMenu: boolean }>`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  transform: ${(props) =>
    props.showMenu ? "translate(0)" : "translate(-100%)"};
  /* transition: all 0.2s ease-in;  */

  @media screen and (min-width: 1110px) {
    display: none;
  }
`;

const Menu = styled(motion.div)<{ showMenu: boolean }>`
  width: 250px;
  height: 100vh;
  background-color: var(--white);
  padding-top: 25px;
  padding-left: 25px;
  transform: ${(props) =>
    props.showMenu ? "translate(0)" : "translate(-100%)"};
  /* transition: all 0.2s ease-in;  */
`;

const MenuNav = styled.nav`
  margin-top: 54px;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media screen and (min-width: 1110px) {
    flex-direction: row;
    row-gap: 0px;
    column-gap: 32px;
  }
`;

const MenuItem = styled.li`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 26px;
  color: var(--very-dark-blue);
  cursor: pointer;
  @media screen and (min-width: 1110px) {
    color: var(--dark-grayish-blue);
    font-size: 15px;
    line-height: 26px;
    font-weight: 400;
    transition-duration: 0.2s;

    &:hover {
      color: var(--orange);
    }
  }
`;
