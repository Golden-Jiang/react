import React from 'react'

function Modal({onClose,title="這是一個Modal",content="隨便你要跟User說啥，都可以。"}) {
  return (
    <div className="fixed left-0 top-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
        <div className=" bg-slate-50 p-5 shadow-md shadow-stone-400 flex flex-col gap-3">
            <h1 className="text-3xl">{title}</h1>
            <p>{content}</p>
            <button className=" border-4 bg-slate-400" onClick={onClose}>關閉</button>
        </div>
        
    </div>
  )
}

export default Modal
