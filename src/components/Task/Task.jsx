import React from "react";
import Counter from "../Counter/Counter";

import styles from "./task.module.css";

const Task = ({todo,onDelete, onChange}) => {
  // NOTE: do not delete `data-cy` key value pair
  return (
    <li data-cy="task" className={styles.task}>
      <div>
      <input type="checkbox" data-cy="task-checkbox" className={styles.tasks} onChange={() => onChange()} />
      <div data-cy="task-text">{todo.value}</div>
      </div>
      <Counter/>
      <button data-cy="task-remove-button" onClick={() => onDelete(todo.id)}>REMOVE TASK</button>
    </li>
  );
};

export default Task;
