"use client";

import { useContext } from "react";
import { RiCloseLine } from "react-icons/ri";

import { Nav } from "@/components/nav";

import { cn } from "@/lib/utils";
import { NavContext } from "@/context/nav-context";

export const MobileNav = () => {
  const { isOpen, setIsOpen } = useContext(NavContext);

  return (
    <nav
      className={cn(
        "fixed top-0 bottom-0 z-20 w-full transition-all duration-500 xl:hidden bg-primary overflow-y-hidden",
        isOpen ? "right-0" : "-right-full"
      )}
    >
      <button
        type="button"
        onClick={() => setIsOpen(false)}
        className="absolute right-4 top-5 z-10 cursor-pointer"
      >
        <RiCloseLine size={48} />
      </button>
      <Nav
        containerStyles="h-full flex flex-col items-center justify-center gap-y-8 text-3xl uppercase font-semibold xl:hidden"
        linkStyles="cursor-pointer"
      />
    </nav>
  );
};
