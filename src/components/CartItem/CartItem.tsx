import styled from "styled-components";
import { cartItemsProps } from "../../App";

// import components
import { Slider, Description } from "../../components";

function CartItem({
  setCartItems,
  cartItems,
}: {
  setCartItems: React.Dispatch<React.SetStateAction<cartItemsProps[]>>;
  cartItems: cartItemsProps[];
}) {
  return (
    <Container>
      {/* slider component */}
      <Slider />
      {/* Description component */}
      <Description cartItems={cartItems} setCartItems={setCartItems} />
    </Container>
  );
}

export default CartItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1110px) {
    flex-direction: row;
    column-gap: 125px;
    align-items: center;
    padding-left: 48px;
    padding-top: 90px;
    padding-bottom: 132px;
  }
`;
