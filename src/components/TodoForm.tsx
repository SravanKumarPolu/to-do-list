// TodoForm.tsx
import React, { useState } from "react";

type Props = {
  addTodo: (todo: string) => void;
};

const TodoForm: React.FC<Props> = ({ addTodo }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="todo-input m-4 p-3 border-2 rounded-full"
          placeholder="What is the task today"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="todo-btn">
          Add Task
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
