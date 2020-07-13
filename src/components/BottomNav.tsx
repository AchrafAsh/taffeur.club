import React from "react";
import NewItem from "./NewItem";
import styled from "styled-components";
import Button from "./Button";
import { AnimatePresence, motion } from "framer-motion";

const BottomNav: React.FC = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <>
      <BackBlur toggle={toggle} />
      <StyledNav toggle={toggle}>
        <Button clickHandler={() => setToggle(!toggle)} toggle={toggle} />
        <AnimatePresence>
          {toggle && <NewItem toggle={toggle} setToggle={setToggle} />}
        </AnimatePresence>
      </StyledNav>
    </>
  );
};

const StyledNav = styled(motion.nav)`
  position: fixed;
  z-index: 10;
  bottom: 0;
  width: 100vw;
  min-height: 5%;
  background: linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.8) 40%
  );
  display: flex;
  flex-direction: column;
  align-items: center;
  .add-btn {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    transform: ${(props: { toggle: boolean }) =>
      props.toggle ? "translateY(50%)" : "translateY(0)"};
  }
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
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  transform: backdrop-filter 1s, -webkit-backdrop-filter 1s;
`;

export default BottomNav;
