import "./App.css";
import { Timer } from "./Components/Timer";
import { RenderToDoList } from "./Components/ToDoList";

function App() {
  return (
    <div className="App">
      <h1>To Do List</h1>
      <Timer />
      <RenderToDoList />
    </div>
  );
}

export default App;
