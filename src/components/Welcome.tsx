import React from "react";
import { Link, Redirect } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import { stateContext } from "../App";

const variants = {
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 1,
    y: "-100vh",
  },
};

const pageTransition = {
  transition: "linear",
};

const Welcome: React.FC = () => {
  const { username } = React.useContext(stateContext);
  return username ? (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={variants}
      transition={pageTransition}
    >
      <StyledWelcome>
        <h1>Allez {username}! Y a du 🥖 sur la planche!</h1>
        <Link to="/home">c'est parti!</Link>
      </StyledWelcome>
    </motion.div>
  ) : (
    <Redirect to="/join" />
  );
};

const StyledWelcome = styled.div`
  height: 100vh;
  width: 100%;
  background-color: var(--yellow);
  display: grid;
  grid-template-rows: 1fr 1fr;
  padding: 40px 24px;
  h1 {
    place-self: end center;
    font-size: 2em;
    color: white;
    text-align: center;
  }
  a {
    place-self: end center;
    color: black;
    text-decoration: none;
    background-color: white;
    padding: 8px 24px;
    border-radius: 8px;
  }
`;

export default Welcome;
