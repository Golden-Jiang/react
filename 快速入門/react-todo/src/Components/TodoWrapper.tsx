import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";

const TodoWrapper = () => {
  const [todos, setTodos] = useState([
    {content: '打掃廁所', id: Math.random(), isCompleted: false, isEditing: false},
    {content: '寫作業', id: Math.random(), isCompleted: false, isEditing: false},
  ])

  const addTodo = (content: any) => {
    setTodos([...todos, {content, id: Math.random(), isCompleted: false, isEditing: false}])
  }

  const deleteTodo = (id: any) => {
    setTodos(todos.filter((todo) => {
      return todo.id !== id
    }))
  }

  const toggleEditing = (id: any) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? {...todo, isEditing: !todo.isEditing} : todo
    }))
  }

  const toggleCompleted = (id: any) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo
    }))
  }

  const editTodo = (id: any, newContent: any) => {
    setTodos(todos.map((todo) => {
      return todo.id === id ? {...todo, content: newContent, isEditing: false} : todo
    }))
  }

  return (
    <>
      <div className="wrapper">
        <h1>待辦事項</h1>
        <CreateForm 
          addTodo={addTodo}
        />
        {todos.map((todo) => {
          return (
            <Todo 
              todo={todo} 
              key={todo.id}
              editTodo={editTodo}
              toggleEditing={toggleEditing}
              toggleCompleted={toggleCompleted}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </div>
    </>
  );
};

export default TodoWrapper;
