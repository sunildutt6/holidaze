import styled, { keyframes } from "styled-components";

const spinner = keyframes`
to{
    transform:rotate(360deg)
}`;

const Loader = styled.div`
  width: 5rem;
  height: 5rem;
  border: 5px solid var(--teritary);
  border-radius: 50%;
  border-top-color: var(--secondary);
  animation: ${spinner} 0.5s linear infinite;
`;

export default Loader;
