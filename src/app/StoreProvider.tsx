'use client';
import { useRef, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { makeStore, AppStore } from '@/redux/store';
import { initializeCount } from '@/redux/features/counterSlice';

export default function StoreProvider({ children }: { children: ReactNode }) {
  const storeRef = useRef<AppStore | null>(null);
  if (!storeRef.current) {
    storeRef.current = makeStore();

    // Loading Initial Data
    storeRef.current.dispatch(initializeCount(100));
  }

  return <Provider store={storeRef.current}>{children}</Provider>;
}
