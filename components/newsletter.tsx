"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/section-header";

import { fadeIn } from "@/lib/variants";

export const Newsletter = () => {
  return (
    <section
      className="section bg-newsletter bg-fixed bg-cover bg-center bg-no-repeat w-full h-120"
      id="contact"
    >
      <div className="h-full container">
        <div className="h-full flex flex-col items-center justify-center">
          <SectionHeader
            pretitle="Get in touch"
            title="Sign up to our newsletter"
          />
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="relative w-full max-w-xl flex items-center"
          >
            <input
              type="text"
              name="email"
              id="email"
              placeholder="Your email address"
              className="w-full h-16 px-8 outline-none rounded-full bg-primary/60 backdrop-blur-[15px]"
            />
            <button
              type="submit"
              className="absolute right-2 h-11.5 px-6 rounded-full text-[15px] bg-accent hover:bg-accent-hover transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
