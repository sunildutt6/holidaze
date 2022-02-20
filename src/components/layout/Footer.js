import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { ImLocation } from "@react-icons/all-files/im/ImLocation";
import { ImPhone } from "@react-icons/all-files/im/ImPhone";
import { ImEnvelop } from "@react-icons/all-files/im/ImEnvelop";
import { ImFacebook } from "@react-icons/all-files/im/ImFacebook";
import { ImTwitter } from "@react-icons/all-files/im/ImTwitter";
import { ImInstagram } from "@react-icons/all-files/im/ImInstagram";
import { ImYoutube } from "@react-icons/all-files/im/ImYoutube";
const StyleDiv = styled.div`
   {
    border-top: 3px solid var(--grey);
  }
   {
    flex-shrink: 0;
  }
  .listgroups {
    @media (max-width: 768px) {
      display: none;
    }
  }

  .listgroup-title {
    margin: 1rem;
    font-weight: bold;
    text-transform: capitalize;
  }
  .icon {
    &-para {
      text-align: center;
      margin-top: 1.5rem;
    }
    &-social {
      font-size: 2rem;
      color: var(--red);
    }
    &-info {
      width: 30%;
      display: flex;
      margin: 1rem auto;
      justify-content: space-around;
    }
  }
  .footer {
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
    background: var(--red);
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
    & > span {
      margin: 0.5rem;
    }
  }
`;

function Footer() {
  return (
    <StyleDiv>
      <Container>
        <div className="listgroups">
          <ListGroup>
            <p className="listgroup-title">useful links</p>
            <ListGroup.Item>
              <a href="/">Registration</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="/">Affiliate Center</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="/">Career</a>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup>
            <p className="listgroup-title">navigation</p>
            <ListGroup.Item>
              <a href="/">Tours</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="/">Our Packages</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="/">Services</a>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup>
            <p className="listgroup-title">about us</p>
            <ListGroup.Item>
              <a href="/">Terms</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="/">Policies</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="/">Press</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="/">Career</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="/">Goals</a>
            </ListGroup.Item>
            <ListGroup.Item>
              <a href="/">Regulations</a>
            </ListGroup.Item>
          </ListGroup>

          <ListGroup>
            <p className="listgroup-title">contact us</p>
            <ListGroup.Item>
              <ImLocation className="icon" /> Abc gate 10, 2000 Bergen
            </ListGroup.Item>
            <ListGroup.Item>
              <ImPhone className="icon" />
              +47 123 4567
            </ListGroup.Item>
            <ListGroup.Item>
              <ImEnvelop className="icon" />
              info@holidaze.com
            </ListGroup.Item>
          </ListGroup>
        </div>
        <div>
          <p className="icon-para">Follow us on:</p>
          <div className="icon-info">
            <ImFacebook className="icon-social" />
            <ImTwitter className="icon-social" />
            <ImInstagram className="icon-social" />
            <ImYoutube className="icon-social" />
          </div>
        </div>
      </Container>
      <div className="footer">
        <span>&#169;2022 Holidaze Tours & Travel</span>
        <span>Org.No. 12345</span>
        <span>
          <a href="/">Terms</a>|<a href="/">Policy</a>
        </span>
      </div>
    </StyleDiv>
  );
}

export default Footer;
