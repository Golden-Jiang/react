import { Fragment } from "react/jsx-runtime"
import ChildComp from "./Components/ChildComp"
import "./sass/App.scss"
import PropsComp from "./Components/PropsComp"
import StateComp from "./Components/StateComp"
import ClickComp from "./Components/ClickComp"

const MyComponent = () => {
  return ( <h1>你好</h1> )
} 

const ParaComponent = () => {
  return ( 
    <>
      <h1>Children Component</h1>
    </>
  )
} 

const MyComponent2 = (props: any) => {
  return ( 
    <>
      {props.children}
    </> 
  )
} 

function App() {
  const text = "Hello React"
  const placeHolder = "請輸入姓名"
  // style 以 javascript object 定義, 可組合
  const inputStyle = {color: 'white'}
  const inputBackColor = {backgroundColor: 'red'}
  Object.assign(inputStyle, inputBackColor)

  const listItems = [
    <ChildComp key="0"/>,
    <ChildComp key="1"/>,
    <ChildComp key="2"/>,
  ]

  const handleChange = () => {
    console.log("@");
  }

  return (
    <Fragment>
      <div>
        <h1>{text}</h1>

        <input 
          style={inputStyle} 
          className="name" 
          type="text" 
          placeholder={placeHolder}
          onChange={handleChange}
        />

        <MyComponent />

        <ChildComp />

        <button 
          onClick={() => {alert(Event.toString())}}
        >按我跳出彈框
        </button>

        {listItems}

        <PropsComp para1="我是組件參數1" para2="我是組件參數2" name="My Name"/>

        <MyComponent2>
          <ParaComponent />
        </MyComponent2>

        <StateComp />
        <StateComp />

        <ClickComp />
      </div>
    </Fragment>
  )
}

export default App
