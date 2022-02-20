import React from "react";
import { Container } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import HotelPage from "../hotels/HotelPage";
const StyleDiv = styled.div`
  .nav-link {
    background: var(--red);
    color: var(--black);
    display: inline-block;
    margin-bottom: 1rem;
  }
`;

function DashBoardMenu() {
  return (
    <Container>
      <StyleDiv>
        <NavLink to="/admin/posts" className="nav-link">
          Posts
        </NavLink>
      </StyleDiv>
    </Container>
  );
}

export default DashBoardMenu;
