import React from "react";
import { SearchOutlined } from '@ant-design/icons';
import { message, Button, Input } from "antd";

let placeHolder = "請輸入姓名";

const success = (msg: string) => {
  message.success(`This is a success message ${msg}`); 
};

const error = (ev: any, msg: string) => {
  console.log(ev);
  message.error("This is an error message " + msg);
};

const warning = () => {
  message.warning("This is a warning message");
};

function Sample02() {
  return (
    <div>
      <p className="w3-white w3-text-black w3-xxlarge">{"React Sample02(antd 組件)"}</p>
      <div className="w3-margin">
        <Button type="primary">Button</Button>
      </div>
      <Input 
        className="w3-margin" 
        addonBefore={<SearchOutlined />} 
        placeholder="large size" />
      <Input
         className="w3-margin" 
         placeholder={placeHolder} 
         onPressEnter={()=>{success('input value')}}/>
      <Button 
        className="w3-margin" 
        onClick={()=>{success('input value')}}
        color="primary" 
        variant="solid">
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
        onClick={warning.bind(null)}>
        Waring
      </Button>
    </div>
  );
}

export default Sample02;
