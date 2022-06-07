import React, { useState } from "react";
import "../App.css";

export const ToDoItem = (props) => {
  const [checked, setChecked] = useState(false);
  const [listStyle, setStyle] = useState("listItems");

  function handleCheck(event) {
    if (event.target.checked === true) {
      setChecked(checked);
      setStyle("style-checked");
    } else {
      setChecked(!checked);
      setStyle("listItems");
    }
  }

  return (
    <li className={listStyle}>
      {props.id}. {props.task}
      <input type="checkbox" onClick={handleCheck}></input>
    </li>
  );
};
