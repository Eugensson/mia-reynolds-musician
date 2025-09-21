"use client";

import { motion } from "framer-motion";

import { fadeIn } from "@/lib/variants";

interface SectionHeaderProps {
  pretitle: string;
  title: string;
}

export const SectionHeader = ({ pretitle, title }: SectionHeaderProps) => {
  return (
    <section>
      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="pretitle text-center"
      >
        {pretitle}
      </motion.p>
      <motion.h2
        variants={fadeIn("up", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.3 }}
        className="mb-8 h2 text-center"
      >
        {title}
      </motion.h2>
    </section>
  );
};
