import React from "react";
import styled from "styled-components";

import { Item } from "../App";
import ToDoItem from "./ToDoItem";

const ItemList: React.FC<{ items: Item[] }> = ({ items }) => (
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
      />
    ))}
  </ListContainer>
);

const ListContainer = styled.div`
  height: 100%;
  padding: 24px 0;
`;

export default ItemList;
