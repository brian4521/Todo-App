import TodoItem from "./TodoItem";

function TodoItems({ Todoitems }) {
  return (
    <>
      {Todoitems.map((item) => (
        <TodoItem todoname={item.name} tododate={item.date}></TodoItem>
      ))}
    </>
  );
}
export default TodoItems;
