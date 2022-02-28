import React, { useState } from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import useAxios from "../../hooks/useAxios";
import { HOTELS_URL, BASE_URL } from "../../constants/api";

export default function DeleteHotel({ id }) {
  const [error, setError] = useState(null);
  const http = useAxios();
  const history = useHistory();
  const url = `${BASE_URL}${HOTELS_URL}/${id}`;

  async function handleDelete() {
    const confirmDelete = window.confirm("Are you sure to delete?");
    if (confirmDelete) {
      try {
        await http.delete(url);
        history("/admin");
      } catch (error) {
        setError(error);
      }
    }
  }

  return (
    <button type="button" className="btn" onClick={handleDelete}>
      {error ? "Error" : "Delete"}
    </button>
  );
}
DeleteHotel.propTypes = {
  id: PropTypes.number.isRequired,
};
