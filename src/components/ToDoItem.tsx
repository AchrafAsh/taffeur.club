import React, { useContext } from "react";
import styled from "styled-components";
import { Item, dispatchContext } from "../App";

const ToDoItem: React.FC<Item> = ({
  id,
  emoji,
  text,
  description,
  completed,
  time,
}) => {
  const dispatch = useContext(dispatchContext);

  return (
    <StyledItem>
      <div id="item">
        <div id="checklist">
          <input
            id={id}
            type="checkbox"
            name="r"
            checked={completed}
            onChange={() => dispatch({ type: "completed", id: id })}
          />
          <label htmlFor={id}>{text}</label>
          <span role="img">{emoji}</span>
        </div>
        <small id="description">{description}</small>
        <small id="time">{time}</small>
      </div>
      {/* <button onClick={() => dispatch({ type: "remove", id: id })}>x</button> */}
    </StyledItem>
  );
};

const StyledItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  input {
    flex: 1;
  }
  span {
    grid-column: 1;
    place-self: start start;
    padding: 8px;
    background-color: white;
    border-radius: 8px;
  }
  #item {
    margin: 8px 16px;
    flex: 10;
    display: grid;
    grid-template-columns: 1fr 4fr 1fr;
    gap: 0 8px;
    background-color: var(--smoke);
    padding: 12px;
    border-radius: 24px;
  }
  p {
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
  #checklist {
    grid-column: 1/3;
    grid-row: 1;
    --check: #4f29f0;
    --disabled: #c3c8de;
    --height: 40px;
    background: var(--background);
    width: var(--width);
    height: var(--height);
    position: relative;
    display: grid;
    grid-template-columns: 30px auto;
    align-items: start;
    label {
      position: relative;
      cursor: pointer;
      display: grid;
      align-items: center;
      width: fit-content;
      transition: color 0.3s ease;
      font-weight: 600;
      &::before,
      &::after {
        content: "";
        position: absolute;
      }
      &::before {
        height: 2px;
        width: 8px;
        left: -27px;
        background: var(--check);
        border-radius: 2px;
        transition: background 0.3s ease;
      }
      &:after {
        height: 4px;
        width: 4px;
        top: 8px;
        left: -25px;
        border-radius: 50%;
      }
    }
    input[type="checkbox"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      position: relative;
      height: 15px;
      width: 15px;
      outline: none;
      border: 0;
      cursor: pointer;
      align-items: center;
      &::before,
      &::after {
        content: "";
        position: absolute;
        height: 2px;
        top: auto;
        background: var(--check);
        border-radius: 2px;
      }
      &::before {
        width: 0px;
        right: 60%;
        transform-origin: right bottom;
      }
      &::after {
        width: 0px;
        left: 40%;
        transform-origin: left bottom;
      }
      &:checked {
        &::before {
          animation: check-01 0.4s ease forwards;
        }
        &::after {
          animation: check-02 0.4s ease forwards;
        }
        + label {
          color: var(--disabled);
          animation: move 0.3s ease 0.1s forwards;
          &::before {
            background: var(--disabled);
            animation: slice 0.4s ease forwards;
          }
          &::after {
            animation: firework 0.5s ease forwards 0.1s;
          }
        }
      }
    }
  }
  @keyframes move {
    50% {
      padding-left: 8px;
      padding-right: 0px;
    }
    100% {
      padding-right: 4px;
    }
  }
  @keyframes slice {
    60% {
      width: 100%;
      left: 4px;
    }
    100% {
      width: 100%;
      left: -2px;
      padding-left: 0;
    }
  }
  @keyframes check-01 {
    0% {
      width: 4px;
      top: auto;
      transform: rotate(0);
    }
    50% {
      width: 0px;
      top: auto;
      transform: rotate(0);
    }
    51% {
      width: 0px;
      top: 8px;
      transform: rotate(45deg);
    }
    100% {
      width: 5px;
      top: 8px;
      transform: rotate(45deg);
    }
  }
  @keyframes check-02 {
    0% {
      width: 4px;
      top: auto;
      transform: rotate(0);
    }
    50% {
      width: 0px;
      top: auto;
      transform: rotate(0);
    }
    51% {
      width: 0px;
      top: 8px;
      transform: rotate(-45deg);
    }
    100% {
      width: 10px;
      top: 8px;
      transform: rotate(-45deg);
    }
  }
  @keyframes firework {
    0% {
      opacity: 1;
      box-shadow: 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0,
        0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0, 0 0 0 -2px #4f29f0;
    }
    30% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      box-shadow: 0 -15px 0 0px #4f29f0, 14px -8px 0 0px #4f29f0,
        14px 8px 0 0px #4f29f0, 0 15px 0 0px #4f29f0, -14px 8px 0 0px #4f29f0,
        -14px -8px 0 0px #4f29f0;
    }
  }
`;

export default ToDoItem;
