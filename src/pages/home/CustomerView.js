import React from "react";
import Heading from "../../components/layout/Heading";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { ImStarFull } from "@react-icons/all-files/im/ImStarFull";
import { ImStarHalf } from "@react-icons/all-files/im/ImStarHalf";
import joana from "../../assets/joana.jpg";
import victor from "../../assets/victor.jpg";
import rosy from "../../assets/rosy.jpg";
import styled from "styled-components";

const StyleDiv = styled.div`
  .card {
    padding: 1rem;
    border: none;
    background: transparent;
  }
  .card-img-top {
    border-radius: 50%;
    width: 30%;
    height: 30%;
    display: block;
    margin: auto;
  }
  .icon {
    color: var(--green);
  }
`;

function CustomerView() {
  return (
    <StyleDiv>
      <Container>
        <Heading title="Reviews" />
        <Row className="card-row">
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={victor} />
              <Card.Body>
                <Card.Text>
                  "Holidaze did exactly what you said it does. Holidaze is the
                  real deal! Definitely worth the investment."
                  <Card.Title>-victor</Card.Title>
                  <ImStarFull className="icon" />
                  <ImStarFull className="icon" />
                  <ImStarFull className="icon" />
                  <ImStarFull className="icon" />
                  <ImStarFull className="icon" />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={rosy} />
              <Card.Body>
                <Card.Text>
                  "I can't say enough about holidaze."
                  <Card.Title>-rosy</Card.Title>
                  <ImStarFull className="icon" />
                  <ImStarFull className="icon" />
                  <ImStarFull className="icon" />
                  <ImStarFull className="icon" />
                  <ImStarHalf className="icon" />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Img variant="top" src={joana} />
              <Card.Body>
                <Card.Text>
                  "Just what I was looking for. Holidaze is great."
                  <Card.Title>-joana</Card.Title>
                  <ImStarFull className="icon" />
                  <ImStarFull className="icon" />
                  <ImStarFull className="icon" />
                  <ImStarFull className="icon" />
                  <ImStarHalf className="icon" />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </StyleDiv>
  );
}

export default CustomerView;
