import React from "react";
import styled from "styled-components";
import { stateContext } from "../App";
import ProfilePicture from "./ProfilePicture";

const NavBar: React.FC = () => {
  const { username } = React.useContext(stateContext);

  return (
    <NavContainer>
      <h1>
        <span role="img">💼</span> taffeur
      </h1>
      {username ? (
        <div>
          <h3>{username}</h3>
          <ProfilePicture />
        </div>
      ) : (
        <div />
      )}
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  background: none;
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  h1 {
    font-size: 1em;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    h3 {
      font-size: 0.8em;
      padding: 0 16px;
    }
  }
`;

export default NavBar;
