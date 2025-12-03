import './Todo.css'

function Todo ({title}) {
    function deleteToDo () {
        console.log('deleteTodo()', title)
    }
    return (
        <div className ="todo">
      <p>{ title }</p>
      <button onClick={deleteToDo()}>Delete</button>
    </div>
    );
}

export default Todo;