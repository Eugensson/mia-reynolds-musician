import { Hero } from "@/components/hero";
import { EventList } from "@/components/event-list";

const Home = () => {
  return (
    <section>
      <Hero />
      <EventList />
      <div className="h-1000" />
    </section>
  );
};

export default Home;
