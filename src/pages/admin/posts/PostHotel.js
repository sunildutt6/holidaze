import React from "react";
import DashBoardPage from "../DashBoardPage";
import { NavLink } from "react-router-dom";
import { Container } from "react-bootstrap";

function PostHotel() {
  return (
    <DashBoardPage>
      <Container>
        <NavLink to="/admin/posts/add">Add Hotel</NavLink>
      </Container>
    </DashBoardPage>
  );
}

export default PostHotel;
