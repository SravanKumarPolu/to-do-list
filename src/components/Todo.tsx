import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
type Props = {};

const todo = (props: Props) => {
  return (
    <div className="flex flex-row ml-4 p-2 justify-between">
      <p>Go to school</p>
      <div className="flex flex-row gap-1">
        <FontAwesomeIcon icon={faPenToSquare} />
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default todo;
