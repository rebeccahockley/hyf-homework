import tasks from "./ToDoListTasks";
import ToDoListHeader from "./ToDoListHeader";
import ToDoListItems from "./ToDoListItems";

function ToDoListData() {
  return (
    <div>
      <ToDoListHeader />
      <ul>
        {tasks.map((task) => {
          return (
            <ToDoListItems
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
