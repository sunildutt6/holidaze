import React from "react";
import HomePage from "./HomePage";
import HomeFeature from "./HomeFeature";
import CustomerView from "./CustomerView";
import SubscriptionPage from "./SubscriptionPage";
import HomePayment from "./HomePayment";

function Home() {
  return (
    <>
      <HomePage />
      <HomeFeature />
      <CustomerView />
      <SubscriptionPage />
      <HomePayment />
    </>
  );
}

export default Home;
