import clsx from 'clsx';
import React from 'react';

interface DividerProps {
  color?: string;
}

export const Divider = ({ color }: DividerProps) => (
  <hr
    className={clsx(
      'border-t',
      color ? color : 'border-black dark:border-white'
    )}
  />
);
