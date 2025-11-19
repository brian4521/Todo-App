import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItems from "./components/TodoItems";
import "./App.css";

function App() {
  const Todoitems = [
    {
      name: "purchase sugar",
      date: "5/4/20250",
    },
    {
      name: "rice",
      date: "6/7/2025",
    },
    {
      name: "masu",
      date: "5/1/2025",
    },
  ];
  return (
    <center>
      <AppName />
      <AddTodo></AddTodo>

      <div className="boss">
        <TodoItems Todoitems={Todoitems}></TodoItems>
      </div>
    </center>
  );
}

export default App;
