import React from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

import NavBar from "./NavBar";
import ItemList from "./ItemList";
import BottomNav from "./BottomNav";
import { stateContext } from "../App";

const Home: React.FC = () => {
  const { username } = React.useContext(stateContext);
  const date = Date().split(" ");
  return (
    <div>
      {username ? (
        <AppContainer>
          <NavBar />
          <header>
            <h1>Menu du jour</h1>
            <h2>
              {date[0]} {date[2]}
            </h2>
          </header>
          <ItemList />
          <BottomNav />
        </AppContainer>
      ) : (
        <Redirect to="/join" />
      )}
    </div>
  );
};

const AppContainer = styled.div`
  header {
    padding: 0 24px 0 24px;
  }
  h1 {
    font-weight: 700;
  }
  h2 {
    color: var(--yellow);
    font-weight: 700;
  }
`;

export default Home;
