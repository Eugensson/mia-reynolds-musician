import { Hero } from "@/components/hero";
import { Blog } from "@/components/blog";
import { Player } from "@/components/player";
import { Albums } from "@/components/albums";
import { EventList } from "@/components/event-list";
import { Newsletter } from "@/components/newsletter";

const Home = () => {
  return (
    <section>
      <Hero />
      <Player />
      <EventList />
      <Albums />
      <Blog />
      <Newsletter />
      <div className="h-1000" />
    </section>
  );
};

export default Home;
