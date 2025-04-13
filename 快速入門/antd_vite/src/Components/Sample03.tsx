import React from "react";
import {
  StepForwardOutlined,
  CheckCircleTwoTone,
  HeartTwoTone,
  SmileTwoTone,
} from "@ant-design/icons";
import { Space } from "antd";
import { BiAbacus } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

const Sample03: React.FC = () => {
  return (
    <div>
      <p className="w3-white w3-text-black w3-xxlarge">{"React Sample03 (icons)"}</p>
      <Space>
        <FcAbout/>
        <BiAbacus className="w3-text-red"/>
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
