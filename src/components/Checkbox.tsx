import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Checkbox: React.FC<{
  completed: boolean;
  clickHandler: () => void;
}> = ({ completed, clickHandler }) => {
  return (
    <StyledCheckbox onClick={clickHandler}>
      {!completed ? (
        <motion.div
          className="check"
          initial={{ scale: 0, opacity: 0 }}
          animate={
            !completed ? { scale: 1, opacity: 1 } : { scale: 1, opacity: 0 }
          }
        />
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" height="10" width="10">
          <motion.path
            d="M0 4 l3 3 l7 -7"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{
              pathLength: 1,
              transition: {
                duration: 0.5,
                ease: "easeInOut",
              },
            }}
          />
        </svg>
      )}
    </StyledCheckbox>
  );
};

const StyledCheckbox = styled.div`
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  place-self: center start;
  svg {
    overflow: visible;
  }
  path {
    stroke-linejoin: round;
    stroke-linecap: round;
    stroke: grey;
    stroke-width: 2;
  }
  .check {
    height: 2px;
    width: 6px;
    border-radius: 2px;
    background-color: grey;
  }
`;

export default Checkbox;
