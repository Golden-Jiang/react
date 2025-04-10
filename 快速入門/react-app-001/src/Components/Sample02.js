import React from "react";
import { SearchOutlined } from '@ant-design/icons';
import { message, Button, Input } from "antd";

let placeHolder = "請輸入姓名";
let flag = true;
let country = "Taiwan";
let obj = { a: 123, b: "abc" };

// const SayHello = () => {
//   return (
//     <span>Hello React</span>
//   )
// }

const success = (msg) => {
  message.success(`This is a success message ${msg}`);
};

const error = (ev, msg) => {
  console.log(ev);
  message.error("This is an error message " + msg);
};

const warning = () => {
  message.warning("This is a warning message");
};

function Sample02() {
  return (
    <div>
      <p className="w3-white w3-text-black w3-xxlarge">{"React Sample02"}</p>
      <div className="w3-margin">
        <Button type="primary">Button</Button>
      </div>
      <Input className="w3-margin" addonBefore={<SearchOutlined />} placeholder="large size" />
      <Input className="w3-margin" placeholder={placeHolder} onPressEnter={()=>{success('input value')}}/>
      <Button className="w3-margin" onClick={success} color="primary" variant="solid">
        成功
      </Button>
      <Button 
        className="w3-margin" 
        color="danger" 
        variant="solid" 
        onClick={(ev)=>{error(ev,'error')}}>
        Error
      </Button>
      <Button 
        className="w3-margin" 
        color="orange" 
        variant="solid" 
        onClick={warning.bind()}>
        Waring
      </Button>
      <p className="w3-purple w3-xlarge">{flag ? "已登入" : "未登入"}</p>
      <p className="w3-teal w3-xlarge">{`I'm come from ${country}`}</p>
      <p className="w3-cyan w3-xlarge">
        {"這是 jsx 中的註解"}
        {/* 這是 jsx 中的註解 */}
      </p>
      <p className="w3-light-blue w3-xlarge">{JSON.stringify(obj)}</p>
    </div>
  );
}

export default Sample02;
