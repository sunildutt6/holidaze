import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../../constants/Loader";
import Container from "react-bootstrap/Container";
import { HOTELS_URL, BASE_URL } from "../../constants/api";
import Heading from "../../components/layout/Heading";
import Row from "react-bootstrap/Row";
import HotelItems from "../hotels/HotelItems";

import styled from "styled-components";
const StyleDiv = styled.div`
  .price::before {
    color: red;
    content: "From";
    margin-right: 5px;
  }
`;

function HomeFeature() {
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function getData() {
      try {
        const response = await axios.get(BASE_URL + HOTELS_URL);
        console.log(response.data);
        setHotel(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  if (error) {
    return <Container>{error}</Container>;
  }

  return (
    <Container>
      <StyleDiv>
        <Heading title="featured hotels" />
        <Row>
          {hotel
            .filter((hot) => hot.popularity)
            .map(function (restaurant) {
              const { id, title, address, description, image_url, price } =
                restaurant;
              return (
                <HotelItems
                  key={id}
                  id={id}
                  title={title}
                  address={address}
                  description={description}
                  image_url={image_url}
                  price={price}
                />
              );
            })}
        </Row>
      </StyleDiv>
    </Container>
  );
}

export default HomeFeature;
