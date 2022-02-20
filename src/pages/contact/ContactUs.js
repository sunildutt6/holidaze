import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import { ImLocation } from "@react-icons/all-files/im/ImLocation";
import { ImPhone } from "@react-icons/all-files/im/ImPhone";
import { ImEnvelop } from "@react-icons/all-files/im/ImEnvelop";
import Card from "react-bootstrap/Card";

function ContactUs() {
  return (
    <>
      <ListGroup>
        <h3>contact us</h3>
        <Card.Text>
          If you have any queries related to booking , or other information,
          Please contact us via following way
        </Card.Text>
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
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9936.563938253605!2d5.313373248374212!3d60.38471369279628!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46390d4966767d77%3A0x9e42a03eb4de0a08!2sBergen!5e0!3m2!1sen!2sno!4v1645198985231!5m2!1sen!2sno"
        width="100%"
        height="450"
        title="map"
      ></iframe>
    </>
  );
}

export default ContactUs;
