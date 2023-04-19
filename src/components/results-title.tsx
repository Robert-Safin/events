import Button from './EventList/ui/Button';
import classes from './results-title.module.css';
import { FC } from 'react';

interface Props {
  date: Date
}


const ResultsTitle:FC<Props> = (props) =>{
  const { date } = props;

  const humanReadableDate = new Date(date).toLocaleDateString('en-US', {
    month: 'long',
    year: 'numeric',
  });

  return (
    <section className={classes.title}>
      <h1>Events in {humanReadableDate}</h1>
      <Button link='/events'>Show all events</Button>
    </section>
  );
}

export default ResultsTitle;
