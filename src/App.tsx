import React, { useEffect, useReducer } from "react";
import styled from "styled-components";
import { Switch, Route, Redirect } from "react-router-dom";
import "./index.css";

import appReducer from "./appReducer";
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

  const date = Date().split(" ");

  return (
    <dispatchContext.Provider value={dispatch}>
      <stateContext.Provider value={state}>
        <Switch>
          <Route exact path="/join">
            <OnBoarding />
          </Route>
          <Route exact path="/">
            {state.username ? (
              <AppContainer>
                <NavBar />
                <header>
                  <h1>Menu du jour</h1>
                  <h2>
                    {date[0]} {date[2]}
                  </h2>
                </header>
                <ItemList />
                <NewItem />
              </AppContainer>
            ) : (
              <Redirect to="/join" />
            )}
          </Route>
        </Switch>
      </stateContext.Provider>
    </dispatchContext.Provider>
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
