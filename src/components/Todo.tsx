import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

type Props = {
  task: {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
  };
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
};

const Todo: React.FC<Props> = ({
  task,
  toggleComplete,
  deleteTodo,
  editTodo,
}) => {
  return (
    <div className="flex flex-row ml-4 p-2 justify-between">
      <p onClick={() => toggleComplete(task.id)}>{task.task}</p>
      <div className="flex flex-row gap-1">
        <FontAwesomeIcon icon={faPenSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(task.id)} />
      </div>
    </div>
  );
};

export default Todo;
