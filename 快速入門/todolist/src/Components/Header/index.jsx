import React from "react";
import { Input } from "antd";
import {
  ProductOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from "@ant-design/icons";

export default function Header() {
  return (
    <div>
      <Input
        maxLength="21"
        placeholder="請輸入你的工作"
        addonBefore={<ProductOutlined />}
      />
    </div>
  );
}
