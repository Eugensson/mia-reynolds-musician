"use client";

import { useContext } from "react";

import { NavContext } from "@/context/nav-context";

export const MenuBtn = () => {
  const { setIsOpen } = useContext(NavContext);

  return (
    <button
      type="button"
      onClick={() => setIsOpen(true)}
      className="flex flex-col items-end gap-y-2 cursor-pointer group transition-all"
    >
      <div className="w-7 h-0.5 bg-white" />
      <div className="w-4 group-hover:w-7 group-active:w-7 h-0.5 bg-white" />
      <div className="w-7 h-0.5 bg-white" />
    </button>
  );
};
