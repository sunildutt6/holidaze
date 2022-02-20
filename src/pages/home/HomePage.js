import React from "react";
import holidaze from "../../assets/holidaze.jpg";
import Image from "react-bootstrap/Image";
import styled from "styled-components";

const StyleDiv = styled.div`
  img {
    width: 100%;
    height: 60vh;
    position: relative;
    opacity: 0.9;
    @media (max-width: 768px) {
      height: auto;
    }
  }
  h4 {
    text-transform: capitalize;
    letter-spacing: 0.5px;
    font-size: 0.8rem;
    text-align: center;
    margin-top: -1.25rem;
    font-family: oscine, sans-serif;
    color: var(--red);
    @media (max-width: 768px) {
      margin: -1rem;
      font-size: 0.5rem;
    }
  }
  .heading {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
    @media (max-width: 768px) {
      display: none;
    }
  }

  h1 {
    text-align: center;
  }
`;

function HomePage() {
  return (
    <>
      <StyleDiv>
        <Image
          src={holidaze}
          alt="people enjoying outside"
          className="img-fluid"
        />
        <div className="heading">
          <h1>Holidaze</h1>
          <h4>making everyday a holiday</h4>
        </div>
      </StyleDiv>
    </>
  );
}

export default HomePage;
