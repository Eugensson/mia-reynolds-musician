"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { EventCard } from "@/components/event-card";

import { events } from "@/lib/data";
import { fadeIn } from "@/lib/variants";

export const EventList = () => {
  return (
    <section className="section" id="tours">
      <div className="container">
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.3 }}
          className="relative p-4 xl:p-12 bg-secondary/60 rounded-[10px] overflow-hidden"
        >
          <div className="h-155 xl:h-full flex flex-col xl:flex-row justify-between gap-x-4">
            <div className="hidden xl:block w-100">
              <Image
                src="/assets/events/singer.png"
                width={358}
                height={489}
                priority
                alt="Photo of singer"
              />
            </div>
            <ul className="xl:pr-6 flex-1 h-125 flex flex-col justify-between overflow-y-scroll scrollbar-thin scrollbar-thumb-accent scrollbar-track-white/10">
              {events.map((event) => (
                <li
                  key={event.id}
                  className="border-b border-white/10 last-of-type:border-none"
                >
                  <EventCard event={event} />
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
