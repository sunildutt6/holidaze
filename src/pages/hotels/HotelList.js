import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import { HOTELS_URL, BASE_URL } from "../../constants/api";
import Heading from "../../components/layout/Heading";
import Loader from "../../constants/Loader";
import HotelItems from "./HotelItems";

function HotelList() {
  const [hotel, setHotel] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(function () {
    async function getData() {
      try {
        const response = await axios.get(BASE_URL + HOTELS_URL);
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
    return <Container>Error: An error occurd</Container>;
  }

  return (
    <Container>
      <Heading title="hotels" />

      <input
        type="search"
        className="input-search"
        placeholder="Search hotels..."
        onChange={(event) => {
          setSearch(event.target.value);
        }}
      />

      <Row>
        {hotel
          .filter((value) => {
            if (search === "") {
              return value;
            } else if (
              value.title.toLowerCase().includes(search.toLowerCase())
            ) {
              return value;
            }
            return null;
          })
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
    </Container>
  );
}

export default HotelList;
