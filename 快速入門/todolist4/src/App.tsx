// // 引入第三方模組
// import { useState } from 'react'
// // 引入本專案模組
// import Header from './Components/Header'
// import List from './Components/List'
// import Footer from './Components/Footer'
// // 引入本專案所有樣式
// import 'tailwindcss/tailwind.css'
// import './App.css';

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <div className="container">
//       <div className="wrap">
//         <Header />
//         <List />
//         <Footer />
//       </div>
//     </div>
//   )
// }

// export default App
import { useState } from "react";
import Modal from "./Components/Model";

function App() {
const [isModalOpen, setIsModalOpen] = useState(false)

//控制modal開關
function switchModal(){
  console.log(123);
      setIsModalOpen(!isModalOpen)
}

  return (
    <>
     {/*控制modal開關*/}
    {isModalOpen ? <Modal onClose={switchModal} title="我想用這個新標題" content="我想用這個內文"/> : null }

   <div className=" h-screen w-screen flex flex-col justify-center items-center bg-indigo-100">
      <h1 className=" font-bold text-9xl">
         超級<span className="bg-black text-white">大</span>標題
      </h1>
    <button onClick={switchModal} className=" border-2 border-gray-950 p-3 mt-10 text-3xl">按我打開Modal</button>

   </div>
    </>
  );
}

export default App;