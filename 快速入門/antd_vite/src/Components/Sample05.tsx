import React from "react";
import localStyle from './Sample5.module.css'

const styleObj = {
  width: '400px',
  height: '100px',
  color: "#00ff00",
  backgroundColor: "#0000ff",
};

const hoverStyle = {
  color: "#009999",
  backgroundColor: "#cc0000",
}
const Sample05: React.FC = () => {
  return (
    <div>
      <p className="w3-white w3-text-black w3-xxlarge">
        {"React Sample05 (樣式)"}
      </p>
      <div className="w3-white w3-center">
        <span className="w3-text-white w3-red" style={{ width: '200px' }}>
          內聯樣式(一)
        </span>
      </div>
      <div>
        <div style={hoverStyle}>
          內聯樣式(二)
        </div>
      </div>
      <div>
        <div style={styleObj}>
          內聯樣式(三)
        </div>
      </div>
      <div className="w3-center">
        <div className={'box'}>外聯樣式(全域型)</div>
      </div>
      <div className="w3-center">
        <div className={localStyle.item}>外聯樣式(區域型)</div>
      </div>
    </div>
  );
};

export default Sample05;
