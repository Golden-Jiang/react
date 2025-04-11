import React from "react";
import { SearchOutlined, StepForwardOutlined } from "@ant-design/icons";
import {
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
} from "@ant-design/icons";
import { Space } from "antd";
import { message, Button, Input } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

let student = [
  {
    name: 'Richard',
    age: 18
  },
  {
    name: 'Peter',
    age: 19
  },
  {
    name: 'Mary',
    age: 17
  },
]

const Sample04: React.FC = () => {
  const ret = student.map((item)=>{
    return <li key={item.name}>{item.name}</li>
  })
  return (
    <div>
      <p className="w3-white w3-text-black w3-xxlarge">{"React Sample04"}</p>
      <ul className="w3-ul w3-text-black">{ret}</ul>
    </div>
  );
};

export default Sample04;
