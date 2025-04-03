export default function Model({onClose}) {
  return (
    <div className=" fixed left-0 top-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center">
      <div className="bg-fuchsia-600 p-5 shadow-md shadow-stone-400 flex flex-col gap-3">
        <h1 className="text-3xl">這是一個Modal</h1>
        <p>隨便你要跟User說啥，都可以。</p>
        <button className=" border-4 bg-slate-400" onClick={onClose}>
          關閉
        </button>
      </div>
    </div>
  );
}
