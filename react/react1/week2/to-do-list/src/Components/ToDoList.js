import React, { useState } from "react";
import { TaskData } from "../Data/TaskData";
import { ToDoItem } from "./ToDoItem";

export const RenderToDoList = () => {
  const [list, setList] = useState(TaskData);
  const [task, setTask] = useState("");

  function handleChange(event) {
    setTask(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ id: list.length + 1, task });
    setList(newList);
    setTask("");
  }

  function handleDelete(id) {
    const newList = list.filter((item) => item.id !== id);
    setList(newList);
  }

  const listItems = list.map((item) => (
    <div key={item.task}>
      <ToDoItem task={item.task} />
      <button onClick={() => handleDelete(item.id)}>Delete</button>
    </div>
  ));

  if (list.length === 0) {
    return (
      <div>
        <input type="text" value={task} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add Task
        </button>
        <p>No tasks</p>
      </div>
    );
  } else {
    return (
      <div>
        <input type="text" value={task} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add Task
        </button>
        <ul>{listItems}</ul>
      </div>
    );
  }
};
