import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Redirect, Link } from "react-router-dom";
import illustration from "../people-illustration.png";
import NavBar from "./NavBar";

const OnBoarding: React.FC = () => {
  const [username, setUsername] = useState("");

  //   useEffect(() => {
  //     const raw = localStorage.getItem("taffeur-user");
  //     if (raw) {
  //       setUsername(raw);
  //     }
  //   }, []);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
    // localStorage.setItem("taffeur-user", e.currentTarget.value);
  };

  if (username) {
    return <Redirect to="/" />;
  }

  return (
    <Container>
      <NavBar />
      <img src={illustration} />
      <div className="input">
        <input
          type="text"
          placeholder="Ton petit nom"
          value={username}
          onChange={handleUsernameChange}
        />
        <div className="next">
          <Link to="/">Commencer</Link>
        </div>
      </div>
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
