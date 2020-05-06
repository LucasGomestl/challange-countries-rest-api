import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import axios from "axios";
import styled from "styled-components";

import Header from "./Header";
import { Button, MainWrapper } from "../styled/components";

import { ReactComponent as Arrow } from "../assets/arrow.svg";

const Detail = () => {
  const [country, setCountry] = useState({});
  const { countryCode } = useParams();

  useEffect(() => {
    async function getCountry() {
      const request = await axios.get(
        "https://restcountries.eu/rest/v2/alpha/" + countryCode
      );
      setCountry(request.data);
    }
    getCountry();
  }, [countryCode]);

  function numberWithCommas(x = 0) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return (
    <>
      <Header />
      <MainWrapper>
        <Link to="/">
          <Button width="110px" height="33px">
            <Icon /> Back
          </Button>
        </Link>
        <CountryInfo>
          <Flag src={country.flag} alt={"Flag of " + country.name} />
          <DetailsList>
            <h2>{country.name}</h2>
            <DetailsAreaContainer className="AreaContainer">
              <DetailsArea>
                <li>
                  <b>Native Name:</b> {country.nativeName}
                </li>
                <li>
                  <b>Population:</b> {numberWithCommas(country.population)}
                </li>
                <li>
                  <b>Region:</b> {country.region}
                </li>
                <li>
                  <b>Sub Region:</b> {country.subregion}
                </li>
                <li>
                  <b>Capital:</b> {country.capital}
                </li>
              </DetailsArea>

              <DetailsArea>
                <li>
                  <b>Top Level Domain:</b> {country.topLevelDomain}
                </li>
                <li>
                  <b>currencies:</b>{" "}
                  {Array.isArray(country.currencies)
                    ? country.currencies[0].name
                    : []}
                </li>
                <li>
                  <b>Languages:</b>{" "}
                  {Array.isArray(country.languages)
                    ? country.languages.map((language) =>
                        language ===
                        country.languages[country.languages.length - 1]
                          ? language.name
                          : language.name + ", "
                      )
                    : []}
                </li>
              </DetailsArea>
            </DetailsAreaContainer>
            <Borders className="borders">
              <b>Border Countries:</b>
              <div>
                {Array.isArray(country.borders)
                  ? country.borders.map((country) => (
                      <li key={country}>
                        <Link to={"/detail/" + country}>
                          <Button width="90px" height="25px">
                            {country}
                          </Button>
                        </Link>
                      </li>
                    ))
                  : []}
              </div>
            </Borders>
          </DetailsList>
        </CountryInfo>
      </MainWrapper>
    </>
  );
};

export default Detail;

const Icon = styled(Arrow)`
  width: 17px;
  height: 17px;
  margin-right: 10px;
  margin-top: 0px;
  color: ${({ theme }) => theme.theme.color};
`;
const CountryInfo = styled.section`
  display: grid;
  grid-template-columns: 500px 1fr;
  grid-gap: 5vw;
  margin-top: 50px;
  align-items: center;
  @media (max-width: 1250px) {
    grid-template-columns: fit-content(680px);
    justify-content: center;
    .borders {
      grid-template-columns: 1fr;
    }
  }
  @media (max-width: 600px) {
    .AreaContainer {
      grid-template-columns: 1fr;
    }
  }
`;

const Flag = styled.img`
  width: 100%;
`;

const DetailsList = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: max-content 1fr 60px;
  grid-row-gap: 20px;
  padding-top: 30px;
`;

const DetailsAreaContainer = styled.div`
  display: grid;
  grid-template-columns: max-content max-content;
  grid-gap: 5vw;
  grid-row: 2;
`;

const DetailsArea = styled.ul`
  line-height: 32px;
`;

const Borders = styled.ul`
  display: grid;
  grid-template-columns: 135px 1fr;
  grid-template-rows: max-content 5px;
  grid-row: 3;
  grid-gap: 10px;
  > div {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 90px));
    grid-gap: 10px;
  }
`;
