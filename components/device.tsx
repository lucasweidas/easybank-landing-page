'use client';
import { device } from '@/interfaces';
import { ReactNode, createContext, useContext, useEffect, useState } from 'react';

const DeviceContext = createContext<device>('mobile');
export default function DeviceProvider({ children }: { children: ReactNode }) {
  const [device, setDevice] = useState<device>('mobile');

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px)');
    function handleChange({ matches }: MediaQueryListEvent) {
      setDevice(matches ? 'desktop' : 'mobile');
    }

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [device]);

  return <DeviceContext.Provider value={device}>{children}</DeviceContext.Provider>;
}

export function useDevice() {
  return useContext(DeviceContext);
}
