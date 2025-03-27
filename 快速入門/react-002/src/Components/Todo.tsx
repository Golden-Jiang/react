import { FC, useState, ChangeEvent } from 'react'
import { nanoid } from 'nanoid'

type TodoType = {
  id: string
  title: string
}

const TodoComp: FC = () => {
  const [list, setList] = useState<TodoType[]>([
    {id: nanoid(5), title: '吃飯'},
    {id: nanoid(5), title: '睡覺'},
  ]) 

  return (
    <>
        <div>
            <h3>Todo</h3>
            <List list={list} />
            <InputForm list={list} setList={setList} />
        </div>
    </>
  );
};

export default TodoComp

type InputFormPropsType = {
    list: TodoType[]
    setList: (list: TodoType[]) => void
}

const InputForm: FC<InputFormPropsType> = ({list, setList}) = {
    const [text, setText] = useState("")
    function handleChange(e: ChangeEvent<HTMLFormElement>) => {
        setText(e.target.value)
    }
    return {
        <>
        </>
    }
}