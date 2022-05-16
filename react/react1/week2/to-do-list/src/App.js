import "./App.css";
import { ToDoListHeader } from "./Components/Header";
import { Timer } from "./Components/Timer";
import { RenderToDoList } from "./Components/ToDoList";

function App() {
  return (
    <div className="Container">
      <ToDoListHeader />
      <Timer />
      <RenderToDoList />
    </div>
  );
}

export default App;
