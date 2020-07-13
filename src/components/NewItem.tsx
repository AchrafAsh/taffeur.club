import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

import { dispatchContext } from "../App";
import { Pin } from "./Checkbox";

interface NewItemProps {
  toggle: boolean;
  setToggle: (state: boolean) => void;
}

const NewItem: React.FC<NewItemProps> = ({ toggle, setToggle }) => {
  const [emoji, setEmoji] = useState("💼");
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("");
  const [emojiToggle, setEmojiToggle] = useState(false);
  const [pinned, setPinned] = useState(false);

  const dispatch = React.useContext(dispatchContext);

  const handleNewItemSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "add",
      emoji: emoji,
      text: text,
      description: description,
      time: time,
      pinned: pinned,
    });
    setText("");
    setDescription("");
    setToggle(false);
  };

  const emojiList = [
    "💼",
    "⏰",
    "🏋",
    "🧘",
    "📝",
    "👨‍💻",
    "🍣",
    "📞",
    "🍜",
    "👵",
    "🛒",
    "🎉",
  ];

  return (
    <StyledForm>
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        className="content"
      >
        <form onSubmit={handleNewItemSubmit}>
          <span id="emoji" role="img" onClick={() => setEmojiToggle(true)}>
            {emoji}
          </span>
          {emojiToggle && (
            <div className="emoji-back-blur">
              <div className="emoji-panel">
                {emojiList.map((emoji: string) => {
                  const clickHandler = () => {
                    setEmoji(emoji);
                    setEmojiToggle(false);
                  };
                  return (
                    <span role="img" onClick={clickHandler} key={emoji}>
                      {emoji}
                    </span>
                  );
                })}
              </div>
            </div>
          )}
          <div id="pin" onClick={() => setPinned(!pinned)}>
            <Pin pinned={pinned} />
          </div>
          <div id="text">
            <input
              id="text"
              type="text"
              value={text}
              placeholder="Ajouter une tache"
              onChange={(e) => setText(e.currentTarget.value)}
            />
          </div>
          <div style={{ width: "100%" }}>
            <div id="time">
              <span role="img">⏰</span>
              C'est pour quand
              <input
                id="time"
                type="time"
                value={time}
                onChange={(e) => setTime(e.currentTarget.value)}
              />
            </div>
            <div id="description">
              <span role="img">✏️</span>
              <textarea
                id="description"
                placeholder="Ajouter une note"
                value={description}
                onChange={(e) => setDescription(e.currentTarget.value)}
              />
            </div>
          </div>
          <input id="submit" type="submit" value="Ajouter" />
        </form>
      </motion.div>
    </StyledForm>
  );
};

const StyledForm = styled.div`
  .emoji-back-blur {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: rgb(220, 220, 220, 0.3);
    backdrop-filter: blur(6px);
    -webkit-backdrop-filter: blur(6px);
    transition: backdrop-filter 1s, -webkit-backdrop-filter 1s;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 24px;
  }
  .emoji-panel {
    background-color: var(--yellow);
    list-style-type: none;
    padding: 24px;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    span {
      margin: 4px;
    }
  }
  .content {
    width: 100vw;
    background-color: white;
    border-radius: 40px 40px 0 0;
    display: "flex";
    flex-direction: column;
    justify-content: center;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 56px 24px;
    width: 100%;
    height: 100%;
  }
  input,
  textarea {
    outline: 0;
  }
  select {
    width: 48px;
    height: 48px;
  }
  span#emoji {
    cursor: pointer;
    padding: 12px;
    background-color: var(--smoke);
    border-radius: 10px;
    margin: 16px 0;
    font-size: 1.2em;
  }
  span {
    padding: 10px;
    background-color: white;
    border-radius: 8px;
    cursor: pointer;
  }
  input#text {
    border: none;
    background: none;
    font-size: 1.5em;
    text-align: center;
    width: 100%;
  }
  div#text {
    padding: 8px;
    border-radius: 16px;
    margin: 16px 0;
    width: 100%;
  }
  div#description {
    padding: 14px;
    border-radius: 22px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: var(--smoke);
    width: 100%;
  }
  div#description span {
    padding: 8px;
    background-color: white;
    border-radius: 10px;
  }
  textarea#description {
    margin-left: 8px;
    background: none;
    border: none;
    height: 38px;
    width: 100%;
    vertical-align: middle;
    font-size: 1em;
    padding: 8px;
    max-height: 80px;
  }
  div#time {
    background-color: var(--yellow);
    padding: 14px;
    border-radius: 22px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: 8px;
  }
  div#time span {
    padding: 8px;
    background-color: white;
    border-radius: 10px;
    margin-right: 8px;
  }
  input#time {
    padding: 8px;
    border: none;
    background: none;
    font-weight: bold;
    margin-left: 8px;
  }
  input#submit {
    width: 80%;
    margin-top: 30px;
    text-align: center;
    padding: 12px;
    background-color: var(--yellow);
    border-radius: 24px;
    border: none;
    font-size: 1em;
    font-weight: bolder;
  }
`;

export default NewItem;
