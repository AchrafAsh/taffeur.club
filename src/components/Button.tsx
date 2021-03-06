import React from "react";
import styled from "styled-components";

const Button: React.FC<{ clickHandler: () => void; toggle: boolean }> = ({
  clickHandler,
  toggle,
}) => (
  <>
    <StyledButton onClick={clickHandler} toggle={toggle}>
      <svg
        preserveAspectRatio="xMidYMid meet"
        height="50"
        width="50"
        viewBox="0 0 100 100"
      >
        <path
          style={{ cursor: "pointer" }}
          id="add"
          height="100%"
          width="100%"
          fill="rgb(248,213,126)"
          d=" M 92.953 75.797 C 89.016 90.563 72.063 97.875 49.641 98.016 C 27.219 98.156 13.7 96.307 5.203 79.313 C -3.294 62.318 7.172 39.234 17.297 25.031 C 27.422 10.828 53.297 -2.109 70.594 2.813 C 87.891 7.734 93.234 24.469 94.5 40.641 C 95.766 56.813 96.891 61.031 92.953 75.797 Z "
        ></path>
        <path
          strokeLinecap="round"
          strokeWidth="6"
          stroke="white"
          d={toggle ? "M40 40 l20 20" : "M35 50 l30 0"}
        ></path>
        <path
          stroke="white"
          strokeWidth="6"
          strokeLinecap="round"
          d={toggle ? "M60 40 l-20 20" : "M50 35 l0 30"}
        ></path>
        <text fill="red">+</text>
      </svg>
    </StyledButton>
  </>
);

const StyledButton = styled.div`
  transform: ${(props: { toggle: boolean }) =>
    props.toggle ? "translateY(50%)" : "translateY(-100%)"};
  cursor: pointer;
`;

export default Button;
