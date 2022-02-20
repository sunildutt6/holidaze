import React from "react";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { ImLocation } from "@react-icons/all-files/im/ImLocation";
import { ImCalendar } from "@react-icons/all-files/im/ImCalendar";
import { ImClock2 } from "@react-icons/all-files/im/ImClock2";
import { ImBookmark } from "@react-icons/all-files/im/ImBookmark";
import { Link } from "react-router-dom";

const StyledCard = styled.div`
  box-shadow: 0 -3px 3px grey;
  margin: 1.5rem 0;
  .style {
    font-weight: 700;
    text-align: center;
  }
  .card {
    padding: 0.5rem;
  }
  .image {
    width: 100%;
  }
  .text {
    color: var(--black);
  }
`;

function HotelItems({ id, title, address, description, image_url, price }) {
  return (
    <Col lg={4}>
      <StyledCard>
        <Card className="card">
          <Card.Img variant="top" src={image_url} className="image" />
          <Card.Body className="card-body">
            <Card.Title className="style">{title}</Card.Title>
            <Card.Text>
              <span>
                <ImLocation className="icon" />
              </span>
              <span>{address}</span>
            </Card.Text>
            <Card.Text className="d-flex justify-content-between">
              <span>
                <ImCalendar className="icon" />
                Luxury
              </span>
              <span>
                <ImClock2 className="icon" />
                Availability
              </span>
              <span>
                <ImBookmark className="icon" />
                Popular
              </span>
            </Card.Text>
            <Card.Text className="card-para ">
              <span className="price">
                <strong>NOK {price}</strong>
              </span>
              <span>
                <Link to={`detail/${id}`} className="btn">
                  Explore
                </Link>
              </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </StyledCard>
    </Col>
  );
}
HotelItems.prototype = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  image_url: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired,
};

export default HotelItems;
