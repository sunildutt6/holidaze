import React from "react";
import subscription from "../../assets/subscription.jpg";
import styled from "styled-components";
const StyleDiv = styled.div`
  .image {
    width: 100%;
    height: 15vh;
    background: url(${subscription}) no-repeat;
    background-size: cover;
    background-position: 50% 50%;
    margin: 1rem 0;
  }
  .info {
    padding: 1rem;
    text-align: center;
    &-para {
      color: var(--grey);
    }
  }
  .button {
    padding: 0 0.5rem;
    margin: 0.15rem;
  }
`;

function HotelPage() {
  return (
    <StyleDiv>
      <div className="image">
        <div className="info">
          <h1>holidaze</h1>
          <h4>making everyday a holiday</h4>
        </div>
      </div>
    </StyleDiv>
  );
}

export default HotelPage;
