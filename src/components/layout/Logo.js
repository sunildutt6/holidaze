import React from "react";
import logo from "../../assets/logo.png";
import Image from "react-bootstrap/Image";
import styled from "styled-components";

const StyleDiv = styled.div`
  img {
    width: 70px;
    height: 90px;
  }
`;

function Logo({ altText }) {
  return (
    <StyleDiv>
      <Image src={logo} alt={altText} />
    </StyleDiv>
  );
}

export default Logo;
