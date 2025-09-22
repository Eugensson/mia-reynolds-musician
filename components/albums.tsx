"use client";

import { motion } from "framer-motion";

import { AlbumsSlider } from "@/components/albums-slider";
import { SectionHeader } from "@/components/section-header";

import { fadeIn } from "@/lib/variants";

export const Albums = () => {
  return (
    <section id="discography">
      <div className="container">
        <SectionHeader pretitle="Discography" title="Popular Albums" />
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
        >
          <AlbumsSlider />
        </motion.div>
      </div>
    </section>
  );
};
