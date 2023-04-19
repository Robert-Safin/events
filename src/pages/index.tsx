import {NextPage} from 'next'
import {getFeaturedEvents} from '../../dummy-data'
import EventList from '@/components/EventList/EventList'
import EventSearch from '@/components/EventSearch'

const HomePage:NextPage = () => {
  const featuredEvents = getFeaturedEvents()
  return (
    <>
    <EventSearch/>
    <EventList events={featuredEvents}/>
    </>
  )
}

export default HomePage
