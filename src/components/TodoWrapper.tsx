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
  };

  const toggleComplete = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo, index) => (
        <Todo
          key={index}
          task={todo}
          toggleComplete={() => toggleComplete(todo.id)}
          deleteTodo={() => deleteTodo(todo.id)}
        />
      ))}
    </div>
  );
};

export default TodoWrapper;
