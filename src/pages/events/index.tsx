import { GetStaticProps, NextPage } from "next";
import Head from 'next/head'
import EventList from "@/components/EventList/EventList";
import { getAllEvents } from "../../../helpers/api-util";

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
    <Head>
      <title>Title which appears in the tab</title>
      <meta name="description" content="description for search engines cralwers"/>
    </Head>
    <EventList events={props.events}/>
    </>
  )
}

export const getStaticProps:GetStaticProps = async() => {

  const events = await getAllEvents()
  return {
    props : {
      events : events
    },
    revalidate: 1800
  }
}


export default HomePage
