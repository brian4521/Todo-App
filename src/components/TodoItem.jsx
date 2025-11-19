function TodoItem({ todoname, tododate }) {
  // let todoname = "purchase snacks";
  // let tododate = "6/2/2025";
  return (
    <div class="container ">
      <div class="row space-item">
        <div class="col-5">{todoname}</div>
        <div class="col-4">{tododate}</div>
        <div class="col-3">
          <button type="button" class="btn btn-danger">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}
export default TodoItem;
