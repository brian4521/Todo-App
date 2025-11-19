function AddTodo() {
  return (
    <div class="container ">
      <div class="row space-item ">
        <div class="col-5">
          <input type="text" placeholder="Enter your word" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-3">
          <button type="button" class="btn btn-info buttonStyle">
            Info
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
