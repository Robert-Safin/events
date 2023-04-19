import {NextPage} from 'next'
import {getFeaturedEvents} from '../../dummy-data'
import EventList from '@/components/EventList/EventList'
import EventSearch from '@/components/EventSearch'
import {useRouter} from 'next/router'
const HomePage:NextPage = () => {
  const router = useRouter()
  const featuredEvents = getFeaturedEvents()

  const handleFindEvent = (year:string, month:string):void => {
    const path = `/events/${year}/${month}`
    router.push(path)
  }
  return (
    <>
    <EventSearch onSearch={handleFindEvent}/>
    <EventList events={featuredEvents}/>
    </>
  )
}

export default HomePage
