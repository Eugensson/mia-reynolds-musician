"use client";

import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";
import Image from "next/image";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { fadeIn } from "@/lib/variants";
import { locationSequence } from "@/lib/data";

export const Hero = () => {
  return (
    <section className="h-[80vh] xl:h-212.5" id="home">
      <div className="container h-full flex items-center justify-center xl:justify-start">
        <div className="h-full flex flex-col items-center xl:items-start justify-center z-20 pt-12">
          <MouseParallaxContainer
            globalFactorX={0.1}
            globalFactorY={0.2}
            resetOnLeave
            className="relative h-30 xl:h-max xl:w-210 flex items-center"
          >
            <MouseParallaxChild
              factorX={0.2}
              factorY={0.4}
              className="relative"
            >
              <motion.div
                variants={fadeIn("up", 0.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-75 h-25 xl:w-181.25 xl:h-61.25"
              >
                <Image
                  src="/assets/hero/typo-1.svg"
                  alt="Mia"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.9}
              factorY={0.9}
              className="absolute xl:left-6 z-30"
            >
              <motion.div
                variants={fadeIn("up", 0.7)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-75 h-25 xl:w-156.25 xl:h-61.25"
              >
                <Image
                  src="/assets/hero/typo-2.svg"
                  alt="Reynolds"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </MouseParallaxChild>
            <MouseParallaxChild
              factorX={0.3}
              factorY={0.6}
              className="hidden xl:block absolute right-0 z-20 opacity-80"
            >
              <motion.div
                variants={fadeIn("left", 1.4)}
                initial="hidden"
                whileInView={"show"}
                viewport={{ once: false, amount: 0.3 }}
                className="w-37.5 h-25 xl:w-62 xl:h-50 mix-blend-luminosity"
              >
                <Image
                  src="/assets/hero/bird.png"
                  alt="Colibri bird"
                  fill
                  className="object-contain"
                />
              </motion.div>
            </MouseParallaxChild>
          </MouseParallaxContainer>
          <motion.div
            variants={fadeIn("up", 1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="min-h-15 mb-6 flex items-center text-[26px]"
          >
            <div className="hidden xl:flex items-center xl:gap-x-0">
              <p>World</p>
              <div className="relative flex items-center justify-center size-2 mx-2">
                <Image
                  src="/public/assets/hero/dot.svg"
                  alt="Dot icon"
                  fill
                  className="rounded-full"
                />
              </div>
              <p>Tour</p>
              <div className="relative flex items-center justify-center size-2 mx-2">
                <Image
                  src="/public/assets/hero/dot.svg"
                  alt="Dot icon"
                  fill
                  className="rounded-full"
                />
              </div>
              <p>2025</p>
            </div>
            <div className="hidden xl:flex items-center justify-center relative size-7 mx-4">
              <Image src="/assets/hero/mic.svg" alt="Microphone icon" fill />
            </div>
            <TypeAnimation
              sequence={locationSequence}
              wrapper="div"
              speed={10}
              deletionSpeed={10}
              repeat={Infinity}
              cursor={false}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 1.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
          >
            <button type="button" className="btn btn-lg btn-accent">
              Get tickets
            </button>
          </motion.div>
        </div>
        <motion.div
          variants={fadeIn("left", 0.2)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="hidden xl:block absolute top-0 right-0 before:w-196 before:h-223.25 before:absolute before:top-0 before:right-0 before:z-10 before:bg-singerOverlay"
        >
          <Image
            src="/assets/hero/singer.png"
            alt="Photo of singer"
            width={617}
            height={893}
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};
