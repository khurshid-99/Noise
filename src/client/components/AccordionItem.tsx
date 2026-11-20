"use client";

import { useState, ReactNode } from "react";
import { DownArrow } from "./Icons";

interface AccordionItemProps {
  title: string;
  children: ReactNode;
  style?: string;
}

const AccordionItem = ({ title, children, style }: AccordionItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-14 text-white font-Inter font-normal">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="w-full flex items-center justify-between"
      >
        <span>{title}</span>

        <span
          className={`transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        >
          <DownArrow />
        </span>
      </button>

      <div
        className={`grid transition-all duration-500 ease-in-out ${
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className={` flex flex-col gap-14p pt-14p ${style}`}>
            {children}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;
