import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import "./index.css";

import appReducer from "./appReducer";
import NavBar from "./components/NavBar";
import OnBoarding from "./components/OnBoarding";
import Home from "./components/Home";

export interface Item {
  id: string;
  emoji: string;
  text: string;
  description?: string;
  completed: boolean;
  time?: string;
}

export const dispatchContext = React.createContext<any>(null);
export const stateContext = React.createContext<any>(null);

function App() {
  const [state, dispatch] = useReducer(appReducer, { username: "", items: [] });

  useEffect(() => {
    const rawList = localStorage.getItem("taffeur-list");
    const rawUser = localStorage.getItem("taffeur-user");
    if (rawList && rawUser) {
      dispatch({
        type: "reset",
        state: { username: rawUser, items: JSON.parse(rawList) },
      });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("taffeur-list", JSON.stringify(state.items));
  }, [state]);

  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>
        <Switch>
          <Route exact path="/join" component={OnBoarding} />
          <Route exact path="/" component={Home} />
        </Switch>
      </stateContext.Provider>
    </dispatchContext.Provider>
  );
}

export default App;
