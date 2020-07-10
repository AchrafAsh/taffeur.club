import React from "react";
import styled from "styled-components";

const NavBar: React.FC = () => {
  return (
    <NavContainer>
      <h1>💼 taffeur</h1>
    </NavContainer>
  );
};

const NavContainer = styled.nav`
  background: none;
  width: 100%;
  padding: 24px;
  h1 {
    font-size: 1em;
  }
`;

export default NavBar;
