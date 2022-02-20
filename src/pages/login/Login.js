import React from "react";
import HotelPage from "../hotels/HotelPage";
import LoginForm from "./LoginForm";
import styled from "styled-components";

const StyleForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  margin: 1rem;
  .form {
    width: 30%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;

function Login() {
  return (
    <>
      <HotelPage />
      <StyleForm>
        <LoginForm />
      </StyleForm>
    </>
  );
}

export default Login;
