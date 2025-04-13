import React from "react";

type studentType = {
  title: string
  age: number
}

const Sample06: React.FC<studentType> = ({title, age}) => {
  console.log(title, age)
  return (
    <div>
      <p className="w3-white w3-text-black w3-xxlarge">
        {"React Sample06 (傳遞參數給函數組件)"}
      </p>
      <div className="w3-white w3-center">
        <span className="w3-text-white w3-light-green" style={{ width: '200px' }}>
          {`${title}-${age}`}
        </span>
      </div>
    </div>
  );
};

export default Sample06;
