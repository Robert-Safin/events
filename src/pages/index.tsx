import {NextPage} from 'next'
import {getFeaturedEvents} from '../../dummy-data'
import EventList from '@/components/EventList/EventList'

const HomePage:NextPage = () => {
  const featuredEvents = getFeaturedEvents()
  return (
    <>
    <EventList events={featuredEvents}/>
    </>
  )
}

export default HomePage
