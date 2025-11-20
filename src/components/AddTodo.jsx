import { useState } from "react";

function AddTodo({ onNewItems }) {
  const [Todoname, setTodoname] = useState();
  const [Tododate, setTododate] = useState();

  const handleTodoname = (event) => {
    setTodoname(event.target.value);
  };

  const handleTododate = (event) => {
    setTododate(event.target.value);
  };

  const handleNewClickedItems = () => {
    onNewItems(Todoname, Tododate);
    setTodoname("");
    setTododate("");
  };

  return (
    <div class="container ">
      <div class="row space-item ">
        <div class="col-5">
          <input
            type="text"
            placeholder="Enter your word"
            onChange={handleTodoname}
            value={Todoname}
          />
        </div>
        <div class="col-4">
          <input type="date" onChange={handleTododate} value={Tododate} />
        </div>
        <div class="col-3 ">
          <button
            type="button"
            class="btn btn-info buttonStyle"
            onClick={handleNewClickedItems}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
