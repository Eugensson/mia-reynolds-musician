import { PostList } from "@/components/post-list";
import { SectionHeader } from "@/components/section-header";

export const Blog = () => {
  return (
    <section className="section" id="blog">
      <div className="container">
        <SectionHeader pretitle="Our Blog" title="Latest News" />
        <PostList />
      </div>
    </section>
  );
};
