import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

import { Post } from "@/types";

interface PostCardProps {
  post: Post;
}

export const PostCard = ({
  post: { date, title, description, href },
}: PostCardProps) => {
  return (
    <article className="flex-1">
      <p className="mb-1 text-accent font-medium">{date}</p>
      <h3 className="mb-4 text-xl font-semibold">{title}</h3>
      <p className="mb-6 text-white/70 font-light line-clamp-3">
        {description}
      </p>
      <Link
        href={href}
        className="flex items-center gap-x-2 group"
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Read more about ${title}`}
      >
        Read more
        <BsArrowRight size={20} className="group-hover:ml-1 transition-all" />
      </Link>
    </article>
  );
};
