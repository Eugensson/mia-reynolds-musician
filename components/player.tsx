"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { AudioPlayer } from "react-audio-play";

import { fadeIn } from "@/lib/variants";

export const Player = () => {
  return (
    <motion.section
      variants={fadeIn("up", 0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
      className="relative z-40 h-28 flex items-center bg-gradient-to-r from-tertiary/70 to-primary/10 backdrop-blur-[15px]"
    >
      <div className="container flex flex-col xl:flex-row items-center justify-between">
        <div className="hidden w-75 xl:flex items-center gap-x-4">
          <div className="relative size-16">
            <Image src="/assets/player/avatar.png" fill priority alt="Avatar" />
          </div>
          <div className="leading-none">
            <p className="text-lg font-medium">Mia Reynolds</p>
            <p className="text-sm font-light">Freedom</p>
          </div>
        </div>
        <div className="w-full max-w-4xl">
          <AudioPlayer
            loop
            preload="none"
            color="#ffffff"
            volume={20}
            volumePlacement="top"
            src="/assets/freedom.mp3"
            style={{
              background: "transparent",
              boxShadow: "none",
              width: "100%",
            }}
          />
        </div>
      </div>
    </motion.section>
  );
};
