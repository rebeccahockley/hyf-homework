import { useState, useEffect } from "react";
import { ToDoItem } from "./ToDoItem";
import "../App.css";
import Border from "./Border";

export const RenderToDoList = () => {
  const [list, setList] = useState([]);
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");
  const isEmptyList = list.length === 0;

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    return fetch(
      "https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw"
    )
      .then((res) => res.json())
      .then((result) => {
        setList(
          result.map((item) => {
            return { ...item };
          })
        );
      });
  };

  function handleAdd() {
    const newTask = { id: list.length + 1, description, deadline };
    const currentDate = new Date();
    const deadlineDate = new Date(newTask.deadline);
    if (newTask.description === "" || newTask.description === undefined) {
      alert("You need to assign a task description");
    } else if (deadlineDate < currentDate) {
      alert("The deadline date is in the past. Please enter a future date");
    } else {
      setList(list.concat(newTask));
    }
  }

  const listItems = list.map((item) => (
    <div key={item.id} className="List-Item">
      <Border>
        <ToDoItem
          list={list}
          item={item}
          setList={setList}
          description={item.description}
          deadline={item.deadline}
        />
      </Border>
    </div>
  ));

  return (
    <div>
      <label>
        Description:
        <input
          className="inputBoxes"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </label>
      <label>
        Deadline:
        <input
          className="inputBoxes"
          type="Date"
          value={deadline}
          onChange={(e) => setDeadline(e.target.value)}
        />
      </label>
      <button type="button" onClick={handleAdd}>
        Add Task
      </button>
      <> {isEmptyList ? <p>No tasks</p> : <ul>{listItems}</ul>} </>
    </div>
  );
};
