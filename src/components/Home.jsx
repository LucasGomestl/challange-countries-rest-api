import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Card from "./Card";
import { ReactComponent as SearchIcon } from "../assets/search.svg";

const MainWrapper = styled.main`
  padding-bottom: 5vh;
  height: 100%;
  background-color: hsl(0, 0%, 98%);
  box-shadow: inset 5px 8px 10px -6px rgba(0, 0, 0, 0.1);
`;

const Filters = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr 150px;
  align-items: center;
  padding-top: 50px;
  @media (max-width: 820px) {
    grid-template-columns: 20px 1fr;
    > input {
      margin-right: 0px;
      margin-left: -20px;
    }
    > .icon {
      margin-left: 10px;
    }
    > select {
      margin-top: 40px;
    }
  }
`;

const SearchInput = styled.input`
  padding-left: 40px;
  margin-right: 50px;
  margin-left: -20px;
  max-width: 420px;
  min-width: 200px;
  height: 45px;
  border-radius: 5px;
  border: none;
  color: hsl(0, 0%, 52%);
  box-shadow: -1px -1px 5px 0px rgba(0, 0, 0, 0.2);
`;

const RegionFilter = styled.select`
  padding-left: 10px;
  width: 150px;
  height: 45px;
  border-radius: 5px;
  border: none;
  color: hsl(0, 0%, 52%);
  box-shadow: -1px -1px 5px 0px rgba(0, 0, 0, 0.2);
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 20px;
  height: 20px;
  margin-left: 13px;
  z-index: 1;
`;

const Home = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Filters>
          <StyledSearchIcon className="icon" />
          <SearchInput placeholder="Search for country..." />
          <RegionFilter name="Filter">
            <option defaultValue value="default">
              Filter by Region
            </option>
            <option value="africa">Africa</option>
            <option value="asia">Asia</option>
            <option value="europe">Europe</option>
            <option value="oceania">Oceania</option>
          </RegionFilter>
        </Filters>
        <Card />
      </MainWrapper>
    </>
  );
};

export default Home;
