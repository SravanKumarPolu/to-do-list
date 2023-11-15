import TodoWrapper from "./components/TodoWrapper";

function App() {
  return (
    <div className=" flex justify-center h-screen  items-center bg-slate-200 xs:w-full">
      <div className="p-4">
        <div className="flex  bg-white  p-4 rounded-lg  shadow-orange-500">
          <TodoWrapper />
        </div>
      </div>
    </div>
  );
}

export default App;
