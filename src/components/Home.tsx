import React from "react";
import { Redirect } from "react-router-dom";
import styled from "styled-components";
import { motion } from "framer-motion";
import NavBar from "./NavBar";
import ItemList from "./ItemList";
import BottomNav from "./BottomNav";
import { stateContext } from "../App";

const variants = {
  in: { opacity: 1 },
  out: { opacity: 0 },
};

const pageTransition = {
  transition: "linear",
};

const Home: React.FC = () => {
  const { username } = React.useContext(stateContext);
  const date = Date().split(" ");
  return (
    <motion.div
      variants={variants}
      exit="out"
      initial="out"
      animate="in"
      transition={pageTransition}
    >
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
    </motion.div>
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
