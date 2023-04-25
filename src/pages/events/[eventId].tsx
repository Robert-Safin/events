import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import { getAllEvents, getEventById } from "../../../helpers/api-util"
import EventSummary from "@/components/event-detail/event-summary"
import EventLogistics from "@/components/event-detail/event-logistics"
import EventContent from "@/components/event-detail/event-content"
import Head from 'next/head'
interface Event {
  id: string,
  title: string,
  description: string,
  location: string,
  date: string,
  image: string,
  isFeatured: boolean
}

interface Props {
  event: Event
}

const EventDetailPage: NextPage<Props> = (props) => {

  const event = props.event

  if (!event) {
    return <p className="center">Loading...</p>
  }

  return (
    <>
    <Head>
      <title>{event.title}</title>
      <meta name="desciprtion" content="...."/>
    </Head>
      <EventSummary title={event.title} />
      <EventLogistics date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title} />
      <EventContent> <p>{event.description}</p></EventContent>
    </>
  )
}


export const getStaticPaths: GetStaticPaths = async () => {

  const data = await getAllEvents()
  const paths = data.map(event => ({ params: { eventId: event.id } }))

  return {
    paths: paths,
    fallback: false,
  }
}





export const getStaticProps: GetStaticProps = async (context) => {

  const eventId = context.params!.eventId as string

  const event = await getEventById(eventId)
  return {
    props: {
      event: event
    },
    revalidate: 30
  }
}





export default EventDetailPage
