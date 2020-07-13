import { Item } from "./App";

export type Action =
  | {
      type: "add";
      emoji: string;
      text: string;
      description?: string;
      time?: string;
      pinned: boolean;
    }
  | { type: "remove"; id: string }
  | { type: "completed"; id: string }
  | {
      type: "editName";
      username: string;
    }
  | {
      type: "editItem";
      id: string;
      emoji?: string;
      text?: string;
      description?: string;
      time?: string;
      pinned?: boolean;
    }
  | { type: "pin"; pinned: boolean; id: string }
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
          {
            id: Date.now().toString(),
            emoji: action.emoji,
            text: action.text,
            description: action.description,
            completed: false,
            time: action.time,
            pinned: action.pinned,
          },
          ...state.items,
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
    case "pin": {
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.id ? { ...item, pinned: action.pinned } : item
        ),
      };
    }
    case "editName": {
      return {
        ...state,
        username: action.username,
      };
    }
    case "editItem": {
      return {
        ...state,
        items: state.items.map((item) => {
          if (item.id === action.id) {
            return { ...item, ...action };
          } else {
            return item;
          }
        }),
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
