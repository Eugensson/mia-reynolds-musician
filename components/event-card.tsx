import { RiMapPin2Fill } from "react-icons/ri";

import { Event } from "@/types";

interface EventCardProps {
  event: Event;
}

export const EventCard = ({ event }: EventCardProps) => {
  return (
    <div className="my-4 xl:my-0 pb-10 xl:py-3 flex flex-col xl:flex-row items-center justify-between gap-4 xl:gap-y-0 text-center xl:text-left">
      <div className="mb-4 xl:mb-0 w-20 flex flex-col items-center justify-center leading-tight">
        <p className="text-5xl font-extrabold text-accent">{event.date.day}</p>
        <p className="text-xl font-bold">{event.date.month}</p>
      </div>
      <div className="w-64 flex flex-col gap-y-2">
        <p className="text-lg leading-none font-semibold">{`${event.location.city}, ${event.location.country}`}</p>
        <div className="flex items-center justify-center xl:justify-start gap-x-1">
          <RiMapPin2Fill size={18} className="text-accent" />
          <p className="font-light">{event.location.address}</p>
        </div>
      </div>
      <p className="w-25 text-lg text-center text-accent font-semibold">
        {event.priceRange}
      </p>
      <button type="button" className="btn btn-sm btn-accent">
        Get Tickets
      </button>
    </div>
  );
};
