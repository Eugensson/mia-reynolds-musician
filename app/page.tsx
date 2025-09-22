import { Hero } from "@/components/hero";
import { Player } from "@/components/player";
import { EventList } from "@/components/event-list";

const Home = () => {
  return (
    <section>
      <Hero />
      <Player />
      <EventList />
      <div className="h-1000" />
    </section>
  );
};

export default Home;
