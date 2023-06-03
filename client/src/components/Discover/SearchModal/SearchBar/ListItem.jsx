import React from "react";

export function ListItem({ children, key, className }) {
  return (
    <li
      key={key}
      className={`p-y-[8px] p-x-[24px] m-x-[-24px] flex w-[100vw] hover:bg-[#F7F7F7] ${className}`}
    >
      {children}
    </li>
  );
}
