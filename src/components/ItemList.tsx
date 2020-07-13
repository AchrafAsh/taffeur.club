import React from "react";
import styled from "styled-components";

import { Item } from "../App";
import ToDoItem from "./ToDoItem";
import { stateContext } from "../App";

const ItemList: React.FC = () => {
  const state = React.useContext(stateContext);
  const { items } = state;

  return (
    <ListContainer>
      {items.map((item: Item) => (
        <ToDoItem
          key={item.id}
          id={item.id}
          emoji={item.emoji}
          text={item.text}
          description={item.description}
          completed={item.completed}
          time={item.time}
          pinned={item.pinned}
        />
      ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  height: 100%;
  padding: 24px 8px 40px 12px;
`;

export default ItemList;
