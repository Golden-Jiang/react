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

const Sample03: React.FC = () => {
  return (
    <div>
      <p className="w3-white w3-text-black w3-xxlarge">{"React Sample03"}</p>
      <Space>
        <SmileTwoTone />
        <HeartTwoTone twoToneColor="#eb2f96" />
        <CheckCircleTwoTone twoToneColor="#52c41a" />
        <FontAwesomeIcon className="w3-margin w3-text-red" icon={fab.faReact} />
        <FontAwesomeIcon className="w3-margin w3-text-blue" icon={far.faUser} />
        <FontAwesomeIcon
          className="w3-margin w3-text-green"
          icon={fas.faHouse}
        />
        <StepForwardOutlined className="w3-text-purple" />
      </Space>
    </div>
  );
};

export default Sample03;
