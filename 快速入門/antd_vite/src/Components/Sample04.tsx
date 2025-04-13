import React from "react";

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
      <p className="w3-white w3-text-black w3-xxlarge">{"React Sample04 (循環數據)"}</p>
      <ul className="w3-text-black" style={{listStyleType: 'none'}}>{ret}</ul>
    </div>
  );
};

export default Sample04;
