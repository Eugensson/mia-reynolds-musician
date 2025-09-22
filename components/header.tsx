"use client";

import { useEffect, useState } from "react";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";
import { MenuBtn } from "@/components/menu-btn";
import { MobileNav } from "@/components/mobile-nav";

import { cn } from "@/lib/utils";

export const Header = () => {
  const [active, setActive] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed z-50 w-full transition-all",
        active ? "py-6 bg-[#030315]" : "py-6 bg-transparent"
      )}
    >
      <div className="container flex flex-col xl:flex-row items-center justify-between">
        <Logo />
        <Nav
          containerStyles="hidden xl:flex items-center gap-x-8"
          linkStyles="cursor-pointer"
        />
        <MobileNav />
        <div className="absolute top-9 right-7 z-10 xl:hidden">
          <MenuBtn />
        </div>
        <Socials
          containerStyles="flex items-center gap-x-4 text-2xl"
          iconStyles="hover:text-accent transition-colors"
        />
      </div>
    </header>
  );
};
