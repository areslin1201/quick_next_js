## version

1. node: v22.12.0
2. yarn : v1.22.22
3. Next.js: 15.3.2
4. React.js: 19.0.0
5. eslint: v9
6. prettier: v3.5.3

## Getting Started

install

```bash
yarn install
```

start

```bash
yarn dev
```

## need

eslint

prettier

```bash
yarn add --dev prettier
```

## Redux
Next.js [Redux](https://redux.js.org/usage/nextjs)

### How to install
install required packages
```bash
yarn add react-redux @reduxjs/toolkit
```

### How to use
create a new slice
1. Add a new feature entry. in `src/redux/features/...`.
2. Add reducer in `src/redux/store.ts`.

the simple code

```typescript
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

```

### Initial Data
You can initialize the data before the page render, in `src/app/StoreProvider.tsx` to add the initialize function.