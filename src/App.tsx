import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

// reset css

const GlobalStyles = createGlobalStyle`

  *{
    box-sizing: border-box;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
    font-family: 'Kumbh Sans', sans-serif;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* color variables */

  :root{
    /* ### Primary */
    --orange : hsl(26, 100%, 55%);
    --pale-orange : hsl(25, 100%, 94%);

    /* ###  Neutral */

    --very-dark-blue : hsl(220, 13%, 13%);
    --dark-grayish-blue : hsl(219, 9%, 45%);
    --grayish-blue : hsl(220, 14%, 75%);
    --light-grayish-blue : hsl(223, 64%, 98%);
    --white : hsl(0, 0%, 100%);
    --black :  hsl(0, 0%, 0%)
  }
`;

// import components
import { Header, CartItem } from "./components";

export interface cartItemsProps {
  id: string;
  image: string;
  productName: string;
  money: number;
  quantity: number;
}

function App() {
  //
  const [cartItems, setCartItems] = useState<cartItemsProps[]>([]);

  return (
    <>
      {/* css global styles */}
      <GlobalStyles />
      {/* container */}
      <Container>
        <Header cartItems={cartItems} setCartItems={setCartItems} />
        <CartItem cartItems={cartItems} setCartItems={setCartItems} />
      </Container>
    </>
  );
}

export default App;

const Container = styled.div`
  max-width: 1110px;
  width: 100%;
  margin: auto;
`;
