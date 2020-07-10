import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { Redirect } from "react-router-dom";
import illustration from "../people-illustration.png";
import NavBar from "./NavBar";
import { dispatchContext } from "../App";

const OnBoarding: React.FC = () => {
  const [username, setUsername] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const dispatch = useContext(dispatchContext);

  useEffect(() => {
    const raw = localStorage.getItem("taffeur-user");
    if (raw) {
      setUsername(raw);
      setIsLoggedIn(true);
    }
    console.log("test");
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    localStorage.setItem("taffeur-user", username);
    dispatch({
      type: "signup",
      username: username,
    });
    setIsLoggedIn(true);
  };

  return isLoggedIn ? (
    <Redirect to="/" />
  ) : (
    <Container>
      <NavBar />
      <img src={illustration} />
      <form onSubmit={handleSubmit} className="input">
        <input
          type="text"
          placeholder="C'est quoi ton petit nom?"
          value={username}
          onChange={(e) => setUsername(e.currentTarget.value)}
        />
        <div className="next">
          <input type="submit" value="Commencer" />
        </div>
      </form>
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: grid;
  grid-template-rows: auto 1fr 1fr;
  background-color: var(--yellow);
  img {
    max-height: 100%;
    max-width: 100%;
  }
  .input {
    place-self: center center;
    height: 100%;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }
  input {
    background: white;
    padding: 16px;
    border-radius: 10px;
    border: none;
    outline: 0;
    font-size: 1em;
    width: 100%;
  }
  .next {
    a {
      text-decoration: none;
      color: white;
      font-size: 1em;
      font-weight: 900;
    }
    text-align: right;
  }
`;

export default OnBoarding;
