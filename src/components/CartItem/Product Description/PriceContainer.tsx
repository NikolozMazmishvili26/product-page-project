import styled from "styled-components";

function PriceContainer() {
  return (
    <Container>
      <PriceBox>
        <Price>$125.00</Price>
        <PercentBox>
          <Percent>50%</Percent>
        </PercentBox>
      </PriceBox>
      <DiscountBox>
        <Discount>$250.00</Discount>
      </DiscountBox>
    </Container>
  );
}

export default PriceContainer;

// price container styles

const Container = styled.div`
  margin-top: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (min-width: 1110px) {
    flex-direction: column;
    align-items: flex-start;
    row-gap: 10px;
  }
`;

const PriceBox = styled.div`
  display: flex;
  align-items: center;
  column-gap: 16px;
`;

const Price = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 35px;
  color: var(--very-dark-blue);
`;

const PercentBox = styled.div`
  width: 51px;
  height: 27px;
  background-color: var(--pale-orange);
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const Percent = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: var(--orange);
`;

const DiscountBox = styled.div``;

const Discount = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 26px;
  text-decoration-line: line-through;
  color: var(--grayish-blue);
`;
