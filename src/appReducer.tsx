import { Item } from "./App";

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
  | { type: "signup"; username: string }
  | { type: "reset"; state: { items: Item[]; username: string } };

type State = {
  items: Item[];
  username: string;
};

function appReducer(state: State, action: Action): State {
  switch (action.type) {
    case "add": {
      return {
        ...state,
        items: [
          ...state.items,
          {
            id: Date.now().toString(),
            emoji: action.emoji,
            text: action.text,
            description: action.description,
            completed: false,
            time: action.time,
          },
        ],
      };
    }
    case "remove": {
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.id),
      };
    }
    case "completed": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, completed: !item.completed } : item
        ),
      };
    }
    case "edit": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, ...action } : item
        ),
      };
    }
    case "reset": {
      return action.state;
    }
    case "signup": {
      return {
        ...state,
        username: action.username,
      };
    }
    default: {
      return state;
    }
  }
}

export default appReducer;
