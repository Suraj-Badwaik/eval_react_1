import React, { useState, useEffect } from "react";
import styles from "./addTask.module.css";
import Task from "../Task/Task";
import TaskHeader from "../TaskHeader/TaskHeader";

const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair

  const getList = () => {
    let list = localStorage.getItem("task");

    if (list) {
      return JSON.parse(localStorage.getItem("task"));
    } else {
      return [];
    }
  };

  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState(getList());

  const onDelete = (id) => {
    let newTask = todos.filter((todo) => todo.id !== id);
    window.location.reload();
    setTodos(newTask);
  };

  useEffect(() => {
    localStorage.setItem("task", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className={styles.main}>
      <div className={styles.counter}>
        <div className={styles.countvalue}>
          <TaskHeader />
        </div>
      </div>
      <div className={styles.todoForm}>
        <input
          className={styles.AddTask}
          data-cy="add-task-input"
          type="text"
          value={newTodo}
          onChange={(e) => {
            setNewTodo(e.target.value);
          }}
        />
        <button
          data-cy="add-task-button"
          onClick={() => {
            if(newTodo){
              setTodos([...todos, { id: Date.now(), value: newTodo }]);
              window.location.reload();
            }
            else{
              alert('Nothing to add!')
            }
          }}
        >
          Add Task
        </button>
      </div>

      <div className={styles.list}>
        {todos.map((todo) => {
          return <Task key={todo.id} todo={todo} onDelete={onDelete} />;
        })}
      </div>
    </div>
  );
};

export default AddTask;
