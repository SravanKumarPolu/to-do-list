// TodoWrapper.tsx
import React, { useState } from "react";
import TodoForm from "./TodoForm";
import { v4 as uuidv4 } from "uuid";
import Todo from "./Todo";
import EditTodoForm from "./EditTodoForum";

type Todo = {
  id: string;
  task: string;
  completed: boolean;
  isEditing: boolean;
};

const TodoWrapper: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (todo: string) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: uuidv4(), task: todo, completed: false, isEditing: false },
    ]);
  };

  const toggleComplete = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id: string) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const editTodo = (id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo
      )
    );
  };

  const editTask = (newTask: string, id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? { ...todo, task: newTask, isEditing: !todo.isEditing }
          : todo
      )
    );
  };

  return (
    <div className="  flex  flex-col  w-[50rem] items-center h-[40rem] m-4 bg-slate-500">
      <h2 className="text-white">To-do-list</h2>
      <TodoForm addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoForm key={todo.id} editTodo={editTask} task={todo} />
        ) : (
          <Todo
            key={todo.id}
            task={todo}
            toggleComplete={() => toggleComplete(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
            editTodo={() => editTodo(todo.id)}
          />
        )
      )}
    </div>
  );
};

export default TodoWrapper;
