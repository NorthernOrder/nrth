import type { ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
}

export function Button({ children }: ButtonProps) {
  return (
    <button className="flex items-center justify-center rounded-md bg-black text-white font-medium text-sm">
      {children}
    </button>
  );
}
