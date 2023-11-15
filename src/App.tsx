import TodoWrapper from "./components/TodoWrapper";

function App() {
  return (
    <div className=" flex justify-center  m-2 items-center bg-slate-200 xs:w-full">
      <div className="p-4">
        <div className="flex  bg-white  mt-4 p-6 rounded-lg  shadow-lg">
          <TodoWrapper />
        </div>
      </div>
    </div>
  );
}

export default App;
