// TodoWrapper.tsx
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";

type Todo = {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
};

const TodoWrapper: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: string) => {
    setTodos([
      ...todos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
    console.log(todos);
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      <Todo />
    </div>
  );
};

export default TodoWrapper;
