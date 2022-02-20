import axios from "axios";
import { useState, useEffect } from "react";
import { BASE_URL, HOTELS_URL } from "../../constants/api";
import { useParams, useHistory } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Loader from "../../constants/Loader";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import Card from "react-bootstrap/Card";
import bed from "../../assets/bed.jpg";
import food from "../../assets/food.jpg";
import massage from "../../assets/massage.jpg";
import Details from "../detail/Details";
import { ImLocation } from "@react-icons/all-files/im/ImLocation";
import styled from "styled-components";
import DetailContact from "./DetailContact";

const Section = styled.div`
   {
    display: flex;
    justify-content: space-between;
    padding: 1rem;

    @media (max-width: 900px) {
      flex-direction: column;
    }
  }
  .article-one {
    flex: 2;
  }
  .article-two {
    margin-top: 5rem;
    @media (max-width: 900px) {
      margin-top: 1rem;
    }
  }

  .card {
    background: transparent;
    border: none;
  }
  .card-img-top {
    max-width: 100%;
    height: 50vh;
    padding: 0.5rem;
    display: block;
    margin: 0 auto;
    @media (max-width: 768px) {
      height: auto;
    }
  }
  h3,
  p {
    text-align: left;
    margin: 0.5rem;
    padding: 0.5rem;
    letter-spacing: 1px;
  }
  .img-thumbnail {
    width: 100%;
    display: flex;
    background: transparent;
    border: none;

    @media (max-width: 768px) {
      flex-direction: column;
    }
    & > img {
      flex: 1;
      width: 20%;
      margin: 1rem;
      box-shadow: 5px 5px 5px var(--grey);
      border-radius: 1rem;
      @media (max-width: 768px) {
        width: 75%;
        display: block;
        margin: 0.5rem auto;
      }
    }
  }
`;

function Detail() {
  const [hotel, setHotel] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();
  const { id } = useParams();
  if (!id) {
    history.push("/");
  }
  const url = BASE_URL + HOTELS_URL + id;

  useEffect(
    function () {
      async function getDetails() {
        try {
          const response = await axios.get(url);
          console.log(response.data);
          setHotel(response.data);
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      getDetails();
    },
    [url]
  );

  if (loading) {
    return (
      <Container>
        <Loader />
      </Container>
    );
  }

  if (error) {
    return <Container>Error: An error occured</Container>;
  }

  return (
    <Container>
      <Breadcrumb className="mt-3">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/hotels">Hotels</Breadcrumb.Item>
        <Breadcrumb.Item active>Details</Breadcrumb.Item>
      </Breadcrumb>

      <Section>
        <article className="article-one mb-5">
          <Card>
            <Card.Body className="card-body">
              <h3>{hotel.title}</h3>
              <Card.Img variant="top" src={hotel.image_url} className="mb-3 " />
              <div className="img-thumbnail">
                <img src={bed} alt="hotel" />
                <img src={food} alt="hotel" />
                <img src={massage} alt="hotel" />
              </div>
              <h3>Description</h3>
              <Card.Text>{hotel.description}</Card.Text>
              <Details />
              <h3>Price</h3>
              <Card.Text>
                Starting from
                <strong>
                  NOK
                  {hotel.price}
                </strong>
                per person. Send us your query for more information.
              </Card.Text>
              <h3>location</h3>
              <Card.Subtitle>
                <ImLocation className="icon" />
                {hotel.address}

                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9936.563938253605!2d5.313373248374212!3d60.38471369279628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46390d4966767d77%3A0x9e42a03eb4de0a08!2sBergen!5e0!3m2!1sen!2sno!4v1645198985231!5m2!1sen!2sno"
                  width="100%"
                  height="450"
                  title="map"
                ></iframe>
              </Card.Subtitle>
            </Card.Body>
          </Card>
        </article>

        <article className="article-two">
          <DetailContact />
        </article>
      </Section>
    </Container>
  );
}

export default Detail;
