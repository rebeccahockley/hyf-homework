import React, { useState } from "react";
import "../App.css";
// import { TaskData } from "../Data/TaskData";

export const ToDoItem = (props) => {
  const [checked, setChecked] = useState(false);
  const [listStyle, setStyle] = useState("listItems");

  function handleCheck(event) {
    if (event.target.checked === true) {
      setChecked(checked);
      setStyle("style-checked");
      console.log("checked!");
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
