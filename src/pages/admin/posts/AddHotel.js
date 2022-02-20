import React from "react";
import DashBoardPage from "../DashBoardPage";
import Heading from "../../../components/layout/Heading";
import HotelAdminAdd from "./HotelAdminAdd";

function AddHotel() {
  return (
    <DashBoardPage>
      <Heading title="add new hotel" />
      <HotelAdminAdd />
    </DashBoardPage>
  );
}

export default AddHotel;
