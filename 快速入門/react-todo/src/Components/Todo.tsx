import { MdEdit, MdDelete } from "react-icons/md";
import EditForm from "./EditForm";

const Todo = ({ todo, deleteTodo, toggleCompleted, toggleEditing, editTodo }: any) => {
  // const {todo, deleteTodo, toggleCompleted} = props
  let completed = todo.isCompleted ? "completed" : "";

  return todo.isEditing ? (
    <EditForm todo={todo} editTodo={editTodo} />
  ) : (
    <div className={`todo ${completed}`}>
      {/* <p>洗衣服</p> */}
      <p onClick={() => toggleCompleted(todo.id)}>{todo.content}</p>
      <div>
        <MdEdit 
            onClick={() => toggleEditing(todo.id)}
            style={{ cursor: "pointer" }} 
        />
        <MdDelete
          onClick={() => deleteTodo(todo.id)}
          style={{ cursor: "pointer", marginLeft: "5px" }}
        />
      </div>
    </div>
  );
};

export default Todo;
