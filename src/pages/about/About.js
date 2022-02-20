import HotelPage from "../hotels/HotelPage";
import AboutDescription from "./AboutDescription";
import Container from "react-bootstrap/Container";
import AboutQa from "./AboutQa";
import styled from "styled-components";

const StyleDiv = styled.div`
.query{
  border:1px solid var(--grey);
  margin:1rem;
  padding:1rem;
}
.accordion-item {
  margin: 1rem;
  background: transparent;
  border: none;
}

.questions{
  font-weight:bold;
  font-size:1.15rem;
}
h3{
  margin:1rem;
}
  p{
    text-indent: 10px;
  &:first-letter {
    color: white;
    background-color: var(--red);
    border-radius: 2px;
    box-shadow: 3px 3px 0 var(--green);
    font-size: 250%;
    padding: 6px 3px;
    margin-right: 6px;
    float: left;
  }
`;

function About() {
  return (
    <StyleDiv>
      <HotelPage />
      <Container>
        <AboutDescription />
        <AboutQa />
      </Container>
    </StyleDiv>
  );
}

export default About;
