"use client";

import { useContext } from "react";
import { useMediaQuery } from "react-responsive";
import { Link as ScrollLink } from "react-scroll";

import { cn } from "@/lib/utils";
import { navLinks } from "@/lib/data";
import { NavContext } from "@/context/nav-context";

interface NavProps {
  containerStyles?: string;
  linkStyles?: string;
  onClick?: () => void;
}

export const Nav = ({ containerStyles, linkStyles }: NavProps) => {
  const { setIsOpen } = useContext(NavContext);
  const isDesktop = useMediaQuery({
    query: "(min-width: 1310px)",
  });

  return (
    <nav className="h-full">
      <ul className={containerStyles}>
        {navLinks.map(({ path, label }) => (
          <li key={path}>
            <ScrollLink
              to={path}
              smooth={isDesktop ? false : true}
              spy
              offset={-50}
              activeClass="active"
              className={cn(
                "border-b-2 border-transparent cursor-pointer",
                linkStyles
              )}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
