import React from "react";

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
      </div>
      <button className="btn btn-danger">清除已完成工作</button>
    </div>
  );
}
