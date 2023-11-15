import TodoWrapper from "./components/TodoWrapper";

function App() {
  return (
    <>
      <div className=" flex justify-center align-middle items-center">
        <div className="flex w-full h-[40rem] flex-col    m-4 ">
          <TodoWrapper />
        </div>
      </div>
    </>
  );
}

export default App;
