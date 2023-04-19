import classes from './event-summary.module.css';
import {FC} from 'react'

interface Props {
  title:string
}


const EventSummary:FC<Props> = (props) => {
  const { title } = props;

  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
}

export default EventSummary;
