import { useState, useEffect } from "react";
import { BASE_URL, ABOUT } from "../../constants/api";
import axios from "axios";

function AboutDescription() {
  const [about, setAbout] = useState([]);

  useEffect(function () {
    async function fetchData() {
      const response = await axios.get(BASE_URL + ABOUT);
      setAbout(response.data);
    }
    fetchData();
  }, []);
  return (
    <>
      <h3>about holidaze</h3>
      <p>{about.description}</p>
    </>
  );
}

export default AboutDescription;
