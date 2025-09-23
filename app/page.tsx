import { Hero } from "@/components/hero";
import { Blog } from "@/components/blog";
import { Player } from "@/components/player";
import { Albums } from "@/components/albums";
import { EventList } from "@/components/event-list";
import { Newsletter } from "@/components/newsletter";

const Home = () => {
  return (
    <main>
      <Hero />
      <Player />
      <EventList />
      <Albums />
      <Blog />
      <Newsletter />
    </main>
  );
};

export default Home;
