import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";

const CardList = styled.ul`
  display: grid;
  grid-gap: 100px;
  grid-template-columns: repeat(auto-fit, minmax(300px, 250px));
  justify-content: center;
  margin-top: 50px;
  list-style-type: none;
`;

const ListItem = styled.li`
  height: 380px;
  width: 100%;
  border-radius: 5px;
  background-color: white;
  box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.2);
  font-size: 16px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

const StyledCard = styled.article``;

const FlagContainer = styled.div`
  position: relative;
  max-width: 100%;
  height: 200px;
`;
const Flag = styled.img`
  object-fit: cover;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`;

const CountryName = styled.h2`
  font-weight: bold;
  display: block;
  margin-bottom: 17px;
  font-size: 17px;
`;

const CountryInfo = styled.ul`
  margin: 0px 20px;
  margin-top: 15px;
  > li {
    margin-bottom: 7px;
  }
`;

const Card = (props) => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("https://restcountries.eu/rest/v2/all");
      setCountries(request.data);
    }
    fetchData();
  }, []);

  return (
    <CardList>
      {countries.map((country) => (
        <ListItem key={country.name}>
          <Link to={"/detail/" + country.name}>
            <StyledCard>
              <FlagContainer>
                <Flag src={country.flag} alt={"Flag of " + country.name} />
              </FlagContainer>
              <CountryInfo>
                <CountryName>{country.name}</CountryName>
                <li>
                  <b>Population:</b> {country.population}
                </li>
                <li>
                  <b>Region:</b> {country.region}
                </li>
                <li>
                  <b>Capital:</b> {country.capital}
                </li>
              </CountryInfo>
            </StyledCard>
          </Link>
        </ListItem>
      ))}
    </CardList>
  );
};

export default Card;
