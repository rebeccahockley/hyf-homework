import React, { useState } from "react";
import "../App.css";
import { EditToDoItem } from "./EditToDoItem";

export const ToDoItem = (props) => {
  const [checked, setChecked] = useState(false);
  const [listStyle, setStyle] = useState("listItems");
  const [isEditMode, setIsEditMode] = useState(false);

  function handleCheck(event) {
    if (event.target.checked === true) {
      setChecked(checked);
      setStyle("styleChecked");
    } else {
      setChecked(!checked);
      setStyle("listItems");
    }
  }

  function handleDelete(id) {
    const newList = props.list.filter((item) => item.id !== id);
    props.setList(newList);
  }

  const handleEdit = () => {
    setIsEditMode(true);
  };

  return (
    <div>
      {isEditMode ? (
        <EditToDoItem
          setList={props.setList}
          item={props.item}
          list={props.list}
          setIsEditMode={setIsEditMode}
          deadline={props.item.deadline}
        />
      ) : (
        <div>
          <li className={listStyle}>
            {props.description} {props.deadline}
            <input type="checkbox" onClick={handleCheck}></input>
          </li>
          <button onClick={() => handleDelete(props.item.id)}>Delete</button>
          <button type="button" value={props.item.id} onClick={handleEdit}>
            Edit
          </button>
        </div>
      )}
    </div>
  );
};
