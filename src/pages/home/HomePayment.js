import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import paypal from "../../assets/paypal.png";
import american from "../../assets/american.png";
import master from "../../assets/master.png";
import symbols from "../../assets/symbols.png";
import maestro from "../../assets/maestro.png";
const StyleDiv = styled.div`
  .div {
    &-para {
      margin-top: 2rem;
      text-align: center;
    }
    &-img {
      max-width: 40%;
      display: flex;
      justify-content: space-around;
      margin: 2rem auto;
      padding: 1rem;
      @media (max-width: 768px) {
        flex-direction: column;
        margin-bottom: 1rem;
      }
    }
  }
  img {
    width: 75px;
    @media (max-width: 768px) {
      margin-bottom: 0.5rem;
    }
  }
`;

function HomePayment() {
  return (
    <StyleDiv>
      <Container>
        <p className="div-para">
          We accept all types of cards as a payment method
        </p>
        <div className="div-img">
          <img src={american} alt="american-express" />
          <img src={maestro} alt="maestro" />
          <img src={master} alt="master" />
          <img src={paypal} alt="paypal" />
          <img src={symbols} alt="symbols" />
        </div>
      </Container>
    </StyleDiv>
  );
}

export default HomePayment;
