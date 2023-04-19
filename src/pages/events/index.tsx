import { NextPage } from "next";
import { getAllEvents } from "../../../dummy-data";
import EventList from "@/components/EventList/EventList";
const HomePage:NextPage = () => {
  const events = getAllEvents()
  return (
    <>
    <EventList events={events}/>
    </>
  )
}

export default HomePage
