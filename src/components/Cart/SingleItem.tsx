import styled from "styled-components";
import { cartItemsProps } from "../../App";

// import assets

import { iconDelete } from "../../assets";

function SingleItem({
  cartItem,
  cartItems,
  setCartItems,
}: {
  cartItem: cartItemsProps;
  cartItems: cartItemsProps[];
  setCartItems: React.Dispatch<React.SetStateAction<cartItemsProps[]>>;
}) {
  //
  const { id, image, money, productName, quantity } = cartItem;

  // delete function

  const handleDelete = (id: string) => {
    const delItem = cartItems.filter((cartItem) => cartItem.id !== id);
    setCartItems(delItem);
  };

  return (
    <Container>
      <Wrapper>
        <Image src={image} alt="product" />
        <DescriptionBox>
          <div>
            <ProductName>{productName}</ProductName>
          </div>
          <PriceBox>
            <Price>${money}</Price>
            <Quantity>x{quantity}</Quantity>
            <TotalPrice>${money * quantity}</TotalPrice>
          </PriceBox>
        </DescriptionBox>
        {/*  */}
        <DeleteBox>
          <DeleteImage
            src={iconDelete}
            alt="delete"
            onClick={() => handleDelete(id)}
          />
        </DeleteBox>
      </Wrapper>
      {/*  */}
      <CheckoutButton>Checkout</CheckoutButton>
    </Container>
  );
}

export default SingleItem;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 24px 32px 24px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
  justify-content: space-between;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 4px;
`;

// description box styles

const DescriptionBox = styled.div``;

const ProductName = styled.p``;

//

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 4px;
`;

const Price = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: var(--dark-grayish-blue);
`;

const Quantity = styled(Price)``;

const TotalPrice = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  color: var(--very-dark-blue);
`;

//

const DeleteBox = styled.div``;

const DeleteImage = styled.img`
  width: 14px;
  height: 16px;
  cursor: pointer;
`;

const CheckoutButton = styled.button`
  width: 100%;
  height: 56px;
  background-color: var(--orange);
  margin-top: 24px;
  border: none;
  border-radius: 10px;
  font-family: "Kumbh Sans";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: var(--white);
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background-color: hsl(26.1, 93.45794392523365%, 58.0392156862745%);
  }
`;
