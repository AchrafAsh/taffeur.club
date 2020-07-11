import React from "react";
import NewItem from "./NewItem";
import styled from "styled-components";
import Button from "./Button";

const BottomNav: React.FC = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <>
      <BackBlur toggle={toggle} />
      <StyledNav>
        <Button clickHandler={() => setToggle(!toggle)} toggle={toggle} />
        <NewItem toggle={toggle} setToggle={setToggle} />
      </StyledNav>
    </>
  );
};

const StyledNav = styled.nav`
  position: fixed;
  z-index: 10;
  bottom: 0;
  width: 100%;
  min-height: 5%;
  background: linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.8) 40%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const BackBlur = styled.div`
  display: ${(props: { toggle: boolean }) => (props.toggle ? "block" : "none")};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  background-color: rgb(220, 220, 220, 0.3);
  backdrop-filter: blur(3px);
  -webkit-backdrop-filter: blur(3px);
  transform: backdrop-filter 1s, -webkit-backdrop-filter 1s;
`;

export default BottomNav;
