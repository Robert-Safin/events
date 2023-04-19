import { FC } from "react";
import { DummyData } from "../../../dummy-data";
import EventItem from './EventItem'
import styles from './EventList.module.css'
interface Props {
  events: DummyData[];
}

const EventList: FC<Props> = (props) => {
  return (
    <ul className={styles.list}>
      {props.events.map(event =>
        <EventItem eventData={event} key={event.id} />)}
    </ul>
  );
};

export default EventList;
