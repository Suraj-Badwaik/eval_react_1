import React, { useState } from "react";
import styles from "./counter.module.css";

const Counter = () => {
  // sample value to be replaced
  const [curr, setCount] = useState(0)
  // NOTE: do not delete `data-cy` key value pair
  let count = 0;
  count = curr
  return (
    <div className={styles.counter}>
      <button data-cy="task-counter-increment-button" onClick={() => setCount(count+1)}>+</button>
      <span data-cy="task-counter-value">{count}</span>
      <button disabled={count===0} data-cy="task-counter-decrement-button" onClick={() => 
        setCount(count-1)}>-</button>
    </div>
  );
};

export default Counter;
