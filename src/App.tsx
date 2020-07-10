import React, { useEffect, useState, useReducer, createContext } from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";

import "./index.css";

import NavBar from "./components/NavBar";
import OnBoarding from "./components/OnBoarding";
import ItemList from "./components/ItemList";
import NewItem from "./components/NewItem";

export interface Item {
  id: string;
  emoji: string;
  text: string;
  description?: string;
  completed: boolean;
  time?: string;
}

export type Action =
  | {
      type: "add";
      emoji: string;
      text: string;
      description?: string;
      time?: string;
    }
  | { type: "remove"; id: string }
  | { type: "completed"; id: string }
  | {
      type: "edit";
      id: string;
      emoji: string;
      text: string;
      description: string;
      time: string;
    }
  | { type: "reset"; state: Item[] };

function appReducer(state: Item[], action: Action) {
  switch (action.type) {
    case "add": {
      return [
        ...state,
        {
          id: Date.now().toString(),
          emoji: action.emoji,
          text: action.text,
          description: action.description,
          completed: false,
          time: action.time,
        },
      ];
    }
    case "remove": {
      return state.filter((item) => item.id !== action.id);
    }
    case "completed": {
      return state.map((item) =>
        item.id === action.id ? { ...item, completed: !item.completed } : item
      );
    }
    case "edit": {
      return state;
    }
    case "reset": {
      return action.state;
    }
    default: {
      return state;
    }
  }
}

export const Context = createContext<any>({});

function App() {
  const [state, dispatch] = useReducer(appReducer, []);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const username = localStorage.getItem("taffeur-user");
    if (username) {
      setUsername(username);
    }
    const raw = localStorage.getItem("taffeur-list");
    if (raw) {
      dispatch({ type: "reset", state: JSON.parse(raw) });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("taffeur-list", JSON.stringify(state));
  }, [state]);

  const date = Date().split(" ");

  return (
    <Context.Provider value={dispatch}>
      <Switch>
        <Route path="/join">
          <OnBoarding />
        </Route>
        <Route path="/">
          username ? (
          <AppContainer>
            <NavBar />
            <header>
              <h1>Menu du jour</h1>
              <h2>
                {date[0]} {date[2]}
              </h2>
            </header>
            <ItemList items={state} />
            <NewItem dispatch={dispatch} />
          </AppContainer>
          ): (
          <Redirect to="/join" />)
        </Route>
      </Switch>
    </Context.Provider>
  );
}

const AppContainer = styled.div`
  header {
    padding: 24px;
  }
  h1 {
    font-weight: 800;
  }
  h2 {
    color: var(--yellow);
    font-weight: 800;
  }
`;

export default App;
