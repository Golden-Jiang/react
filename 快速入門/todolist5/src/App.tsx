import { useState } from "react";
import "./App.css";
import Modal from './Modal'

function App() {
  const [count, setCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //控制modal開關
  function switchModal() {
    console.log(123);
    setIsModalOpen(!isModalOpen);
  }

  return (
    <>
      <button className="bg-emerald-700 hover:bg-red-500 text-4xl font-extralight hover:font-extrabold text-blue-400 p-3">
        button
      </button>

      {/*控制modal開關*/}
      {isModalOpen ? <Modal onClose={switchModal} /> : null}

      <div className="h-screen w-screen flex flex-col justify-center items-center bg-teal-200">
        <h1 className="font-bold text-9xl">
          超級<span className="bg-emerald-700 text-white">大</span>標題
        </h1>
        <button
          onClick={switchModal}
          className="border-2 border-gray-950 bg-blue-700 p-3 mt-10 text-3xl"
        >
          按我打開Modal
        </button>
      </div>
    </>
  );
}

export default App;
