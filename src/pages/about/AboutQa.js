import React from "react";
import { useState, useEffect } from "react";
import { BASE_URL, ABOUTS } from "../../constants/api";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";

function AboutQa() {
  const [about, setAbout] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const response = await axios.get(BASE_URL + ABOUTS);
      console.log(response.data);
      setAbout(response.data);
    }
    fetchData();
  }, []);

  return (
    <>
      <h3>frequently asked questions</h3>
      {about.map(function (page) {
        return (
          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              <Accordion.Header>Q: {page.question}</Accordion.Header>
              <Accordion.Body>A: {page.answer}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        );
      })}
    </>
  );
}

export default AboutQa;
