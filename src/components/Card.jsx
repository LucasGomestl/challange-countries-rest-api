import React, { useEffect } from "react";
import { useDispatch, connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getCountries } from "../store/actions";

const CardList = styled.ul`
  display: grid;
  grid-gap: 60px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 300px));
  justify-content: space-between;
  margin-top: 50px;
  list-style-type: none;
  @media (max-width: 1660px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 250px));
    grid-gap: 50px;
  }
  @media (max-width: 1372px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 300px));
    grid-gap: 8vw;
    justify-content: center;
  }
`;

const ListItem = styled.li`
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

//FORMATAR OS NUMEROS
const Card = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  const countries =
    useSelector((state) => state.countries.countryList.data) || [];

  return (
    <CardList>
      {countries.map((country) => (
        <ListItem key={country.name}>
          <Link to={"/detail/" + country.alpha3Code}>
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

const mapStateToProps = (state) => {
  return { countries: state.countries };
};
export default connect(mapStateToProps)(Card);
