'use client';

import { useAppSelector, useAppDispatch } from '@/redux/hooks';
import { increment, decrement } from '@/redux/features/counterSlice';

export default function HomePage() {
  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  );
}
