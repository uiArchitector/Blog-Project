'use client';

import { StyleProvider } from '@ant-design/cssinjs';
import { ReactNode } from 'react';

export function Providers({ children }: { children: ReactNode }) {
  return <StyleProvider>{children}</StyleProvider>;
}