'use client';
import { device } from '@/interfaces';
import {
  ReactNode,
  createContext,
  useContext,
  useLayoutEffect,
  useState,
} from 'react';

const DeviceContext = createContext<device>('sm');
export default function DeviceProvider({ children }: { children: ReactNode }) {
  const [device, setDevice] = useState<device>('sm');

  useLayoutEffect(() => {
    if (window.innerWidth >= 1024) {
      setDevice('lg');
    }

    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    function handleChange({ matches }: MediaQueryListEvent) {
      setDevice(matches ? 'lg' : 'sm');
    }

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [device]);

  return (
    <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>
  );
}

export function useDevice() {
  return useContext(DeviceContext);
}
