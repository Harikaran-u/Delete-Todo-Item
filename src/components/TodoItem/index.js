// Write your code here
import './index.css'

const TodoItem = props => {
  const {list, deleteTodo} = props
  const {title, id} = list

  const onDeleteTodo = () => {
    deleteTodo(id)
  }

  const listItems = (
    <li className="todo-list-cont">
      <div className="list-items-cont">
        <p className="todo-name">{title}</p>
        <button type="button" className="delete-btn" onClick={onDeleteTodo}>
          Delete
        </button>
      </div>
    </li>
  )

  return listItems
}

export default TodoItem
