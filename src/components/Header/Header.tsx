import { useState, useRef } from "react";
import styled from "styled-components";

// import icons
import { iconMenu, logo, avatar, iconCart, iconClose } from "../../assets";

function Header() {
  //
  const [showMenu, setShowMenu] = useState(false);

  //
  const Backdropref = useRef<HTMLDivElement | null>(null);

  const handleBackdrop: React.MouseEventHandler<HTMLDivElement> | undefined = (
    event
  ) => {
    if (event.target === Backdropref.current) {
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
            <img src={iconCart} alt="cart" style={{ cursor: "pointer" }} />
            <Avatar src={avatar} alt="avatar" />
          </RightSide>
        </Container>
      </Wrapper>
      {/* show menu */}
      {showMenu && (
        <Backdrop ref={Backdropref} onClick={handleBackdrop}>
          <Menu showMenu={showMenu}>
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
  @media screen and (min-width: 1440px) {
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 24px 28px 24px;
  @media screen and (min-width: 1440px) {
    padding: 43px 0px 34px 0px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  @media screen and (min-width: 1440px) {
    column-gap: 57px;
    align-items: flex-start;
  }
`;

const MenuIcon = styled.img`
  cursor: pointer;
  @media screen and (min-width: 1440px) {
    display: none;
  }
`;

const HeaderNav = styled.div`
  display: none;

  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

// right side

const RightSide = styled.div`
  display: flex;
  align-items: center;
  column-gap: 22px;
  @media screen and (min-width: 1440px) {
    column-gap: 47px;
  }
`;

const Avatar = styled.img`
  width: 24px;
  height: 24px;

  @media screen and (min-width: 1440px) {
    width: 50px;
    height: 50px;
  }
`;

// show menu

const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Menu = styled.div<{ showMenu: boolean }>`
  width: ${(props) => (props.showMenu ? "250px" : "0px")};
  height: 100vh;
  background-color: var(--white);
  padding-top: 25px;
  padding-left: 25px;
  transition: width 0.3s ease-in-out;
`;
const MenuNav = styled.nav`
  margin-top: 54px;
`;

const MenuList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media screen and (min-width: 1440px) {
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
  @media screen and (min-width: 1440px) {
    color: var(--dark-grayish-blue);
    font-size: 15px;
    line-height: 26px;
    font-weight: 400;
    transition-duration: 0.2s;

    &:hover {
      color: var(--black);
    }
  }
`;
