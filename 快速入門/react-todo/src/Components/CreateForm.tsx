import { useState } from "react";

const CreateForm = ({addTodo}: any) => {
  const [content,setContent] = useState('')

  const handleSubmit = (e: any) => {
    e.preventDefault()
    addTodo(content)
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
            加入
        </button>
    </form>
  );
};

export default CreateForm;
