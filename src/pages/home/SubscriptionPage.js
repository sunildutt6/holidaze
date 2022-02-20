import React from "react";
import subscription from "../../assets/subscription.jpg";
import styled from "styled-components";
import { ImEnvelop } from "@react-icons/all-files/im/ImEnvelop";

const StyleDiv = styled.div`
  .image {
    width: 100%;
    height: 50vh;
    background: url(${subscription}) no-repeat;
    background-size: cover;
    background-position: 50% 70%;
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
  }
`;

function SubscriptionPage() {
  return (
    <StyleDiv>
      <div className="image">
        <div className="info">
          <h3>subscribe us</h3>
          <p className="info-para">
            Get our newsletter, deals, packages & promotional informationl via
            Email
          </p>
          <form action="#">
            <input type="email" placeholder="Enter your email" />
            <button type="submit" className="button">
              <ImEnvelop className="icon" />
              Send
            </button>
          </form>
        </div>
      </div>
    </StyleDiv>
  );
}

export default SubscriptionPage;
