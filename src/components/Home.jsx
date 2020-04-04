import React from "react";
import styled from "styled-components";

import Header from "./Header";
import Card from "./Card";

const MainWrapper = styled.main`
  padding: 0 8vw;
  height: 100vh;
  background-color: hsl(0, 0%, 98%);
`;
const Home = () => {
  return (
    <>
      <Header />
      <MainWrapper>
        <Card />
      </MainWrapper>
    </>
  );
};

export default Home;
