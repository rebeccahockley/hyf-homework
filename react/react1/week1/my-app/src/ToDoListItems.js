function ToDoListItem(props) {
  return (
    <div>
      <h2>{props.title}:</h2>
      <li class="listItem">Task: {props.description}</li>
      <li class="listItem">Deadline: {props.deadline}</li>
    </div>
  );
}

export default ToDoListItem;
