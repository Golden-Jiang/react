import React from 'react'

let value = 100
let flag = true
let country = 'Taiwan'
let obj = {a: 123, b: 'abc'}

const SayHello = () => {
  return (
    <span>Hello React</span>
  )
}

function Sample01() {
  return (
    <div>
      <p className="w3-white w3-text-black w3-xxlarge">{'React Sample01 (基本語法)'}</p>
      <p className="w3-blue w3-xlarge">{<SayHello />}</p>
      <p className="w3-red w3-xlarge">{SayHello()} {value}</p>
      <p className="w3-black w3-xlarge">{console.log('Hi')} {Math.random()} {1+2*3}</p>
      <p className="w3-purple w3-xlarge">{flag ? '已登入' : '未登入'}</p>
      <p className="w3-teal w3-xlarge">{`I'm come from ${country}`}</p>
      <p className="w3-cyan w3-xlarge">{'這是 jsx 中的註解'}{/* 這是 jsx 中的註解 */}</p>
      <p className="w3-light-blue w3-xlarge">{JSON.stringify(obj)}</p>
    </div>
  )
}

export default Sample01
