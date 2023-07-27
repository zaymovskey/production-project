import React, {useState} from 'react';
import classes from './Counter.module.scss';

const Counter = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div>
      <h1 className={classes.title}>{count}</h1>
      <button onClick={increment}>Увеличить</button>
    </div>
  );
};

export default Counter;