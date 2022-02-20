import React from "react";
import Heading from "../../components/layout/Heading";
import Container from "react-bootstrap/Container";
import HotelPage from "../hotels/HotelPage";
import DashBoardMenu from "./DashBoardMenu";

function Admin() {
  return (
    <>
      <HotelPage />
      <Container>
        <Heading title="Admin section" />
        <DashBoardMenu />
      </Container>
    </>
  );
}

export default Admin;
