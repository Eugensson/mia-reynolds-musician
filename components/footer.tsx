"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Nav } from "@/components/nav";
import { Logo } from "@/components/logo";
import { Socials } from "@/components/socials";

import { fadeIn } from "@/lib/variants";

export const Footer = () => {
  return (
    <footer className="h-125 xl:h-auto section bg-accent">
      <div className="h-full container flex flex-col items-center gap-y-8">
        <motion.div
          variants={fadeIn("up", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Link
            href="mailto:info@mia-reynolds.com"
            className="text-2xl lg:text-4xl font-semibold leading-tight hover:text-primary/80 transition-colors"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Send email"
          >
            info@mia-reynolds.com
          </Link>
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Nav
            containerStyles="flex flex-col xl:flex-row items-center justify-center gap-y-4 xl:gap-x-8 text-sm uppercase font-semibold"
            linkStyles="hover:text-primary/80 transition-colors"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.6)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Socials
            containerStyles="flex items-center gap-x-8 text-2xl"
            iconStyles="hover:text-primary/80 transition-colors"
          />
        </motion.div>
        <motion.div
          variants={fadeIn("up", 0.8)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.1 }}
        >
          <Logo />
        </motion.div>
      </div>
    </footer>
  );
};
