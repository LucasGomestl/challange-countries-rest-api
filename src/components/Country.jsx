import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Country = ({ country }) => {
  const numberWithCommas = (x = 0) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
  return (
    <StyledCountry key={country.name}>
      <Link to={"/detail/" + country.alpha3Code}>
        <article>
          <FlagContainer>
            <Flag src={country.flag} alt={"Flag of " + country.name} />
          </FlagContainer>
          <CountryInfo>
            <CountryName>{country.name}</CountryName>
            <li>
              <b>Population:</b> {numberWithCommas(country.population)}
            </li>
            <li>
              <b>Region:</b> {country.region}
            </li>
            <li>
              <b>Capital:</b> {country.capital}
            </li>
          </CountryInfo>
        </article>
      </Link>
    </StyledCountry>
  );
};

export default Country;

const StyledCountry = styled.li`
  height: 380px;
  width: 100%;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.theme.elements};
  box-shadow: 0px -1px 5px 0px rgba(0, 0, 0, 0.3);
  font-size: 16px;
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.05);
  }
`;

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
