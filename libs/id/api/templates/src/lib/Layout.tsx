import React from 'react';
import { ReactNode } from 'react';
import { Divider } from './components/Divider';

interface LayoutProps {
  children: ReactNode;
  title: string;
}

export const Layout = ({ children, title }: LayoutProps) => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#bb562b] dark:bg-[#683926]">
      <div className="flex flex-col w-[85vw] p-4 bg-[#ffffff6c] rounded-xl text-lg dark:bg-[#563b2f] dark:text-white sm:w-[65vw] md:w-[60vw] lg:w-[40vw] xl:w-[35vw] 2xl:w-[25vw]">
        <div className="flex flex-col items-center gap-2 mb-2">
          <img
            src="/nrth.png"
            alt="northern order logo"
            width="176"
            height="176"
            className="rounded-full"
          />
          <p className="text-center font-bold text-xl md:text-2xl md:mb-1 xl:text-3xl xl:mb-2">
            {title}
          </p>
        </div>
        <Divider color="border-white" />
        {children}
      </div>
    </div>
  );
};
