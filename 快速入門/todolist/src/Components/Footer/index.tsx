import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

import { Button } from "antd";
import { Input } from "antd";

export default function Footer() {
  return (
    <div className="footer">
      <div className="total">
        <input type="checkbox" />
        <label>
          <span>
            <span>已完成 0</span>/ 全部 2
          </span>
        </label>
        <input
          type="button"
          className="w3-button w3-red"
          value="清除已完成工作"
        ></input>
      </div>
      <br />
      <div>
        <FontAwesomeIcon icon={fab.faUber} />
        <FontAwesomeIcon icon={fab.faReact} />
        <FontAwesomeIcon icon={far.faUser} />
        <FontAwesomeIcon icon={fas.faHouse} />
        <FontAwesomeIcon icon={fas.faUsers} />
        <br />
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="dashed">Dashed</Button>
        <Button type="text">Danger</Button>
      </div>
      <div>
        <Input placeholder="Basic usage" />
      </div>
    </div>
  );
}
