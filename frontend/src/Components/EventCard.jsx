import React, { useMemo } from "react";
import FeaturedEventCard from "../Components/FeaturedEventCard";
import eventImage from "../Assets/Common_images/sampleEvent.png";

const FeaturedEvents = [
  {
    key: 1,
    eventName: "Event-1",
    date: "13 Mar",
    category: "Technical",
    seats: "10/15",
    eventImage: eventImage,
    bgColor: "bg-[#86000A]",
  },
  {
    key: 2,
    eventName: "Event-2",
    date: "14 Mar",
    category: "Cultural",
    seats: "8/15",
    eventImage: eventImage,
    bgColor: "bg-[#B7181B]",
  },
  {
    key: 3,
    eventName: "Events",
    date: "14 Mar",
    category: "NSS",
    seats: "15/30",
    eventImage: eventImage,
    bgColor: "bg-[#F44B1E]",
  },
  {
    key: 4,
    eventName: "Seminar-2",
    date: "15 Mar",
    category: "Technical",
    seats: "15/20",
    eventImage: eventImage,
    bgColor: "bg-[#FF8E00]",
  },
  {
    key: 5,
    eventName: "Seminar-3",
    date: "15 Mar",
    category: "Technical",
    seats: "13/30",
    eventImage: eventImage,
    bgColor: "bg-[#FFB800]",
  },
  {
    key: 6,
    eventName: "Event-1",
    date: "15 Mar",
    category: "Cultural",
    seats: "10/15",
    eventImage: eventImage,
    bgColor: "bg-[#86000A]",
  },
  {
    key: 7,
    eventName: "Event-1",
    date: "13 Mar",
    category: "Seminar",
    seats: "10/15",
    eventImage: eventImage,
    bgColor: "bg-[#FF8E00]",
  },
  {
    key: 8,
    eventName: "Event-1",
    date: "13 Mar",
    category: "Cultural",
    seats: "10/15",
    eventImage: eventImage,
    bgColor: "bg-[#86000A]",
  },
  {
    key: 9,
    eventName: "Seminar-2",
    date: "15 Mar",
    category: "Seminar",
    seats: "15/20",
    eventImage: eventImage,
    bgColor: "bg-[#FF8E00]",
  },
  {
    key: 10,
    eventName: "Seminar-3",
    date: "15 Mar",
    category: "Technical",
    seats: "13/30",
    eventImage: eventImage,
    bgColor: "bg-[#FFB800]",
  },
  {
    key: 11,
    eventName: "Event-1",
    date: "14 Mar",
    category: "Technical",
    seats: "10/15",
    eventImage: eventImage,
    bgColor: "bg-[#86000A]",
  },
  {
    key: 12,
    eventName: "Event-1",
    date: "13 Mar",
    category: "Cultural",
    seats: "10/15",
    eventImage: eventImage,
    bgColor: "bg-[#FF8E00]",
  },
 
];

const EventCard = ({ day, event }) => {
  // Filter events based on selected day and event
  const filteredEvents = useMemo(() => {
    let filtered = FeaturedEvents;

    if (day === "Day One") {
      filtered = filtered.filter((event) => event.date === "13 Mar");
    } else if (day === "Day Two") {
      filtered = filtered.filter((event) => event.date === "14 Mar");
    } else if (day === "Day Three") {
      filtered = filtered.filter((event) => event.date === "15 Mar");
    }

    if (event === "Cultural") {
      filtered = filtered.filter((event) => event.category === "Cultural");
    } else if (event === "Technical") {
      filtered = filtered.filter((event) => event.category === "Technical");
    } else if (event === "Seminar") {
      filtered = filtered.filter((event) => event.category === "Seminar");
    }

    return filtered;
  }, [day, event]);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {filteredEvents.map((event) => (
        <FeaturedEventCard key={event.key} {...event} />
      ))}
    </div>
  );
};

export default EventCard;
