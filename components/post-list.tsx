"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { PostCard } from "@/components/post-card";

import { posts } from "@/lib/data";
import { fadeIn } from "@/lib/variants";

export const PostList = () => {
  const [showAll, setShowAll] = useState(false);

  const visiblePosts = showAll ? posts : posts.slice(0, 3);

  return (
    <motion.section
      variants={fadeIn("up", 0.4)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.3 }}
      className="flex flex-col items-center"
    >
      <ul className="py-10 xl:pt-16 xl:pb-24 grid grid-cols-1 xl:grid-cols-3 gap-12 xl:gap-y-18 border-t border-white/10 flex-wrap">
        {visiblePosts.map((post) => (
          <li key={post.id} className="flex-1">
            <PostCard post={post} />
          </li>
        ))}
      </ul>

      {!showAll && (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="btn btn-lg btn-accent"
        >
          View all posts
        </button>
      )}
    </motion.section>
  );
};
