import React from "react";
import { useState, useEffect } from "react";
import useAxios from "../../hooks/useAxios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { HOTELS_URL, BASE_URL } from "../../constants/api";
import Heading from "../../components/layout/Heading";
import PostItems from "./PostItems";
import Loader from "../../constants/Loader";

export default function Posts() {
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const http = useAxios();

  useEffect(function () {
    async function getData() {
      try {
        const response = await http.get(BASE_URL + HOTELS_URL);
        setHotel(response.data);
      } catch (error) {
        console.log(error);
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <Heading title="hotels" />
      <Row>
        {hotel.map(function (restaurant) {
          const { id, title, address, description, image_url, price } =
            restaurant;
          return (
            <PostItems
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
    </Container>
  );
}
