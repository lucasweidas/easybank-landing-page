import { ReactNode } from 'react';

export type device = 'sm' | 'lg';

export interface MobileGuideWrapperProps {
  children: ReactNode;
  onToggle: () => void;
}
