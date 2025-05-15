'use client';

import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { decrement, increment } from '@/redux/features/counterSlice';

const ReduxDemo = () => {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Redux Demo</h1>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
};

export default ReduxDemo;
