import clsx from 'clsx';
import React from 'react';
import { ReactNode } from 'react';

interface ButtonProps {
  children?: ReactNode;
  style?: string;
  type?: 'submit';
}

export const Button = ({ style, children, type }: ButtonProps) => (
  <button
    className={clsx(
      'rounded w-full h-9',
      style ? style : 'bg-white dark:bg-[#444] font-semibold'
    )}
    type={type}
  >
    {children}
  </button>
);
