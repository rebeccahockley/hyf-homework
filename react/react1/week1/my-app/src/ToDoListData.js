import tasks from "./ToDoListTasks";
import ToDoListHeader from "./ToDoListHeader";
import ToDoListItem from "./ToDoListItems";

function ToDoListData() {
  return (
    <div>
      <ToDoListHeader />
      <ul>
        {tasks.map((task) => {
          return (
            <ToDoListItem
              title={task.title}
              description={task.description}
              deadline={task.deadline}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default ToDoListData;
