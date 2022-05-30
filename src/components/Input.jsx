import React, { useState } from "react";
import Button from "./Button";

function Input({ setTodoArr }) {
  const [inputText, setInputText] = useState("");

  function changeInputText(e) {
    const newText = e.target.value;
    setInputText((prevVal) => newText);
  }

  function clickBtn() {
    setTodoArr((prevArr) => {
      return [...prevArr, inputText];
    });
    setInputText("");
  }

  return (
    <div className="form">
      <input type="text" value={inputText} onChange={changeInputText} />;
      <Button addItem={clickBtn} />
    </div>
  );
}

export default Input;
