import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import Header from "./Header";
import Card from "./Card";
import { MainWrapper } from "../styled/components";
import { ReactComponent as SearchIcon } from "../assets/search.svg";
import {
  getCountries,
  updateSearchTextInput,
  updateSearchSelectInput,
} from "../store/actions";

const Filters = styled.form`
  display: grid;
  grid-template-columns: 20px 1fr 150px;
  align-items: center;
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
  color: ${({ theme }) => theme.theme.color};
  background-color: ${({ theme }) => theme.theme.elements};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
  &::placeholder {
    color: ${({ theme }) => theme.theme.color};
  }
`;

const RegionFilter = styled.select`
  padding-left: 10px;
  width: 150px;
  height: 45px;
  border-radius: 5px;
  border: none;
  color: ${({ theme }) => theme.theme.color};
  background-color: ${({ theme }) => theme.theme.elements};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.4);
`;

const StyledSearchIcon = styled(SearchIcon)`
  width: 20px;
  height: 20px;
  margin-left: 13px;
  z-index: 1;
  color: ${({ theme }) => theme.theme.color};
`;

const Home = () => {
  const dispatch = useDispatch();
  const searchTextInput = useSelector(
    (state) => state.countries.searchTextInput
  );
  const searchSelectInput = useSelector(
    (state) => state.countries.searchSelectInput
  );

  return (
    <>
      <Header />
      <MainWrapper>
        <Filters>
          <StyledSearchIcon className="icon" />
          <SearchInput
            onChange={(e) => {
              dispatch(updateSearchTextInput(e.target.value));
              dispatch(getCountries(e.target.value, searchSelectInput));
            }}
            placeholder="Search for country..."
          />
          <RegionFilter
            name="Filter"
            onChange={(e) => {
              dispatch(updateSearchSelectInput(e.target.value));
              dispatch(getCountries(searchTextInput, e.target.value));
            }}
          >
            <option defaultValue value="default">
              Filter by Region
            </option>
            <option value="africa">Africa</option>
            <option value="americas">America</option>
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
