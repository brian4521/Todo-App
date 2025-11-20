import TodoItem from "./TodoItem";

function TodoItems({ Todoitems }) {
  return (
    <div className="boss">
      {Todoitems.map((item) => (
        <TodoItem todoname={item.name} tododate={item.date}></TodoItem>
      ))}
    </div>
  );
}
export default TodoItems;
