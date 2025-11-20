import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";

import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";

function App() {
  const initialTodoitems = [
    {
      name: "purchase sugar",
      date: "5-4-2025",
    },
    {
      name: "rice",
      date: "6-7-2025",
    },
    {
      name: "masu",
      date: "5-1-2025",
    },
  ];

  const [Todoitems, setTodoitems] = useState(initialTodoitems);

  const handleNewItems = (itemname, assigneddate) => {
    console.log(`New item added: ${itemname} and date: ${assigneddate}`);
    const NewTodoItems = [...Todoitems, { name: itemname, date: assigneddate }];
    setTodoitems(NewTodoItems);
  };

  return (
    <center>
      <AppName />
      <AddTodo onNewItems={handleNewItems}></AddTodo>

      <TodoItems Todoitems={Todoitems}></TodoItems>
    </center>
  );
}

export default App;
