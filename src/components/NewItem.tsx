import React, { useState } from "react";
import styled from "styled-components";
import { Action } from "../App";
import Button from "./Button";

const NewItem: React.FC<{ dispatch: React.Dispatch<Action> }> = ({
  dispatch,
}) => {
  const [emoji, setEmoji] = useState("💼");
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [time, setTime] = useState("00:00");
  const [toggle, setToggle] = useState(false);
  const [emojiToggle, setEmojiToggle] = useState(false);

  const handleNewItemSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch({
      type: "add",
      emoji: emoji,
      text: text,
      description: description,
      time: time,
    });
    setText("");
    setDescription("");
    setToggle(false);
  };

  const emojiList = ["💼", "⏰", "🏋", "🧘", "📝", "👨‍💻", "🍣", "📞", "🍜"];

  return (
    <StyledForm toggle={toggle} emojiToggle={emojiToggle}>
      <div className="back-blur" />
      <div className="content">
        <form onSubmit={handleNewItemSubmit}>
          <span id="emoji" role="img" onClick={() => setEmojiToggle(true)}>
            {emoji}
          </span>
          <div className="emoji-back-blur" />
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
              <span role="img">🖊</span>
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
      </div>
      <Button toggle={toggle} clickHandler={() => setToggle(!toggle)} />
    </StyledForm>
  );
};

const StyledForm = styled.div`
  .back-blur {
    display: ${(props: { toggle: boolean; emojiToggle: boolean }) =>
      props.toggle ? "block" : "none"};
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    width: 100vw;
    height: 100vh;
    background-color: rgb(220, 220, 220, 0.3);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    transform: backdrop-filter 1s, -webkit-backdrop-filter 1s;
  }
  .emoji-back-blur {
    display: ${(props: { toggle: boolean; emojiToggle: boolean }) =>
      props.emojiToggle ? "block" : "none"};
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: 100vw;
    height: 100vh;
    background-color: rgb(220, 220, 220, 0.3);
    backdrop-filter: blur(3px);
    -webkit-backdrop-filter: blur(3px);
    transform: backdrop-filter 1s, -webkit-backdrop-filter 1s;
  }
  .content {
    width: 100%;
    height: 60vh;
    background-color: white;
    border-radius: 40px 40px 0 0;
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 8;
    display: ${(props: { toggle: boolean }) =>
      props.toggle ? "flex" : "none"};
    flex-direction: column;
    justify-content: center;
    transform: ${(props: { toggle: boolean }) =>
      props.toggle ? "translateY(0)" : "translateY(100%)"};
    transition: transform 0.5s;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 40px 24px 16px 24px;
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
  #emoji {
    cursor: pointer;
    padding: 8px;
    background-color: var(--smoke);
    border-radius: 8px;
    margin-bottom: 16px;
  }
  .emoji-panel {
    display: ${(props: { toggle: boolean; emojiToggle: boolean }) =>
      props.emojiToggle ? "grid" : "none"};
    position: fixed;
    top: 0;
    left: 50%;
    z-index: 1200;
    transform: translate(-50%, -50%);
    list-style-type: none;
    padding: 24px;
    border-radius: 16px;
    grid-template-columns: repeat(5, 1fr);
    gap: 8px;
    background-color: var(--yellow);
  }
  span {
    padding: 8px;
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
    margin-bottom: 16px;
    width: 100%;
  }
  div#description {
    padding: 8px;
    border-radius: 16px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    background-color: var(--smoke);
    width: 100%;
  }
  div#description span {
    padding: 8px;
    background-color: white;
    border-radius: 8px;
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
    padding: 8px;
    border-radius: 16px;
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
    border-radius: 8px;
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
