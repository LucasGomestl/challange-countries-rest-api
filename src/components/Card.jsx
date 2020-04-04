import React, { useState, useEffect } from "react";
import axios from "axios";

const Card = props => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://restcountries.eu/rest/v2/lang/es"
      );
      setCountries(request.data);
    }
    fetchData();
  }, []);

  return null;
};

export default Card;
