import classes from './logistics-item.module.css';
import {FC, ReactNode} from 'react'


interface Props {
  icon: any
  children: ReactNode
}


const LogisticsItem:FC<Props> = (props) => {
  const { icon: Icon } = props;

  return (
    <li className={classes.item}>
      <span className={classes.icon}>
        <Icon />
      </span>
      <span className={classes.content}>{props.children}</span>
    </li>
  );
}

export default LogisticsItem;
