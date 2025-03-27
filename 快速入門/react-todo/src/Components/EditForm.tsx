import { useState } from "react";

const EditForm = ({todo, editTodo}: any) => {
  const [content,setContent] = useState(todo.content)

  const handleSubmit = (e: any) => {
    e.preventDefault()
    editTodo(todo.id, content)
  }

  return (
    <form className="create-form" onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={content}
            onChange={(e) => {setContent(e.target.value)}}
            placeholder="輸入待辦事項" 
        />
        <button 
            type="submit"
        >
            完成
        </button>
    </form>
  );
};

export default EditForm;
