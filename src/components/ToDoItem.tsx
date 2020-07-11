import React, { useContext } from "react";
import styled from "styled-components";
import { Item, dispatchContext } from "../App";
import Checkbox from "./Checkbox";
import { motion, useMotionValue } from "framer-motion";

const ToDoItem: React.FC<Item> = ({
  id,
  emoji,
  text,
  description,
  completed,
  time,
}) => {
  const x = useMotionValue(0);
  const dispatch = useContext(dispatchContext);

  React.useEffect(
    () =>
      x.onChange((latest) => {
        if (latest < -75) {
          dispatch({ type: "remove", id: id });
        }
      }),
    []
  );

  return (
    <StyledItem>
      <Checkbox
        completed={completed}
        clickHandler={() => dispatch({ type: "completed", id: id })}
      />
      <div className="delete">
        <span role="img">🗑️</span>
      </div>
      <motion.div
        drag="x"
        style={{ x }}
        dragConstraints={{ left: 0, right: 0 }}
        dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
        id="item"
      >
        <span id="emoji" role="img">
          {emoji}
        </span>
        <label id="text" htmlFor={id}>
          {text}
        </label>
        <small id="description">{description}</small>
        <small id="time">{time}</small>
      </motion.div>
    </StyledItem>
  );
};

const StyledItem = styled.div`
  display: grid;
  grid-template-columns: 20px 1fr;
  input {
    flex: 1;
  }
  span#emoji {
    grid-column: 1;
    grid-row: 1;
    place-self: start start;
    padding: 8px;
    background-color: white;
    border-radius: 10px;
  }
  .delete {
    grid-column: 2;
    grid-row: 1;
    justify-self: end;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding: 16px;
    margin: 6px 2px;
    background-color: var(--yellow);
    border-radius: 22px;
  }
  #item {
    grid-column: 2;
    grid-row: 1;
    margin: 5px 0;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    gap: 0 8px;
    background-color: var(--smoke);
    padding: 16px;
    border-radius: 22px;
  }
  label#text {
    place-self: center start;
    grid-column: 2;
    grid-row: 1;
    margin: 0;
    font-weight: bolder;
  }
  #description {
    grid-row: 2;
    grid-column: 2;
    white-space: pre-wrap;
    overflow-wrap: break-word;
  }
  #time {
    grid-column: 3;
    grid-row: 1;
    place-self: center start;
  }
  button {
    flex: 1;
  }
`;

export default ToDoItem;
