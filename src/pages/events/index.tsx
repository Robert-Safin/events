import { GetStaticProps, NextPage } from "next";
import { getAllEvents } from "../../../dummy-data";
import EventList from "@/components/EventList/EventList";
import { getFeaturedEvents } from "../../../helpers/api-util";

interface Event {
  id: string,
  title: string,
  description: string,
  location: string,
  date: string,
  image: string,
  isFeatured: boolean
}

interface EventArray {
  events: [Event]
}



const HomePage:NextPage<EventArray> = (props) => {
  return (
    <>
    <EventList events={props.events}/>
    </>
  )
}

export const getStaticProps:GetStaticProps = async() => {

  const events = await getFeaturedEvents()
  return {
    props : {
      events : events
    }
  }
}


export default HomePage
