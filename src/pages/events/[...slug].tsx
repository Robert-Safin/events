import { NextPage } from "next";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { getFilteredEvents } from "../../../dummy-data";
import EventList from "@/components/EventList/EventList";
import ResultsTitle from "@/components/results-title";
interface QueryParams extends ParsedUrlQuery {
  year: string;
  month: string;
}

const FilteredEvents: NextPage<QueryParams> = () => {
  const router = useRouter();

  const params = router.query.slug

  if (!params) {
    return (
      <>
        <p className="center">Loading </p>
      </>
    )
  }

  const filteredYear = + params[0]
  const filteredMonth = + params[1]


  if (isNaN(filteredMonth) || isNaN(filteredYear)
    || filteredYear > 2030 || filteredYear < 2000
    || filteredMonth < 1 || filteredMonth > 12) {
    return (
      <p>Invalid filter</p>
    )
  }

  const filteredEvents = getFilteredEvents({
    year: filteredYear,
    month: filteredMonth,
  })

  if (!filteredEvents || filteredEvents.length === 0) {
    console.log(filteredEvents);

    return (
      <p>no events found for the filter</p>
    )
  }
  const date = new Date(filteredYear, filteredMonth-1)

  return (
    <>
    <ResultsTitle date={date}/>
      <EventList events={filteredEvents}/>
    </>
  );
};

export default FilteredEvents;
