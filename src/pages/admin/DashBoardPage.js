import React from "react";
import DashBoardMenu from "./DashBoardMenu";
import Heading from "../../components/layout/Heading";

function DashBoardPage({ children }) {
  return (
    <>
      <Heading title="admin area" />
      <DashBoardMenu />
      {children ? children : <p>Select a section</p>}
    </>
  );
}

export default DashBoardPage;
