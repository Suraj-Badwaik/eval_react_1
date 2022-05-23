import React from "react";
import styles from "./taskHeader.module.css";

const TaskHeader = () => {
  // sample values to be replaced
  let totalTask = 0;
  let unCompletedTask = 0;
  let total = JSON.parse(localStorage.getItem('task')) || [];
  totalTask = total.length;

  unCompletedTask= total.length

  

  // NOTE: do not delete `data-cy` key value pair
  return (
    <div data-cy="task-header" className={styles.taskHeader}>
      <div>
      <span>Uncomplete Tasks : </span>
      <b data-cy="header-remaining-task">{unCompletedTask}</b>
      </div>
      <div>
      <span>Total Tasks : </span>
      <b data-cy="header-total-task">{totalTask}</b>
      </div>
    </div>
  );
};

export default TaskHeader;
