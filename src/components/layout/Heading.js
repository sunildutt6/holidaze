import React from "react";
import PropTypes from "prop-types";

const Heading = ({ title }) => {
  return <h2>{title}</h2>;
};

Heading.propTypes = {
  title: PropTypes.string,
};

export default Heading;
