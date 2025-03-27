import { FC, useState } from 'react'

type PropsType = {
  para1: string
  para2: string
  name: string
}

const ClickComp: FC = () => {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(count + 1)
  }

  return (
    <>
        <p>
            <button onClick={handleClick}>Count = {count}</button>
        </p>
    </>
  );
};

export default ClickComp