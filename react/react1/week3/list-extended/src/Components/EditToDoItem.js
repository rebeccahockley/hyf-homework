import React, { useState } from "react";

export const EditToDoItem = (props) => {
  const [toDoDesc, setToDoDesc] = useState();

  function handleUpdate(id) {
    const updatedList = props.list.map((item) => {
      if (item.id === id) {
        if (toDoDesc === "" || toDoDesc === undefined) {
          alert("Please enter a new task description");
        } else {
          const updatedItem = {
            ...item,
            description: toDoDesc,
          };
          return updatedItem;
        }
      }
      return item;
    });
    props.setList(updatedList);
    props.setIsEditMode(false);
  }

  return (
    <div>
      <input type="text" onChange={(e) => setToDoDesc(e.target.value)}></input>
      <button type="button" onClick={() => handleUpdate(props.item.id)}>
        Update
      </button>
      <br />
      {props.deadline}
    </div>
  );
};
