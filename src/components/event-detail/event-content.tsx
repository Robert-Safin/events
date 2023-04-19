import classes from './event-content.module.css';
import {FC, ReactNode} from 'react'

interface Props {
  children: ReactNode
}

const EventContent:FC<Props> = (props) => {
  return (
    <section className={classes.content}>
      {props.children}
    </section>
  );
}

export default EventContent;
