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
    stroke: black;
    stroke-width: 2;
  }
  .check {
    height: 2px;
    width: 6px;
    border-radius: 2px;
    background-color: black;
  }
`;

export const Pin: React.FC<{ pinned: boolean }> = ({ pinned }) => {
  return (
    <StyledPin
      pinned={pinned}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      preserveAspectRatio="xMidYMid meet"
      viewBox="0 0 24 24"
    >
      <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z" />
    </StyledPin>
  );
};

const StyledPin = styled.svg`
  -ms-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  transform: rotate(360deg);
  stroke: black;
  fill: ${(props: { pinned: boolean }) => (props.pinned ? "black" : "white")};
  transition: fill 0.5s linear;
`;

export default Checkbox;
