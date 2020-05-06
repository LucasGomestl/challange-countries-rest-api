import React, { useEffect } from "react";
import { useDispatch, connect, useSelector } from "react-redux";

import styled from "styled-components";

import { getCountries } from "../store/actions";
import Country from "./Country";

let countries = [];

const CountryList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCountries());
  }, []);

  countries = useSelector((state) => state.countries.countryList.data) || [];

  return (
    <StyledCountryList>
      {countries.map((country) => (
        <Country country={country} />
      ))}
    </StyledCountryList>
  );
};

const mapStateToProps = (state) => {
  return { countries: state.countries };
};
export default connect(mapStateToProps)(CountryList);

const StyledCountryList = styled.ul`
  display: grid;
  grid-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(250px, 260px));
  justify-content: ${() => {
    if (countries.length >= 4) {
      return "space-between";
    }
  }};
  margin-top: 50px;
  list-style-type: none;
  @media (max-width: 671px) {
    grid-template-columns: repeat(auto-fit, minmax(240px, 300px));
    grid-gap: 8vw;
    justify-content: center;
  }
`;
