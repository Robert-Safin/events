import { FC } from 'react'
import { DummyData } from "../../../dummy-data";
import Link from 'next/link'
import Image from 'next/image'
import styles from './EventItem.module.css'
import Button from './ui/Button'
import DateIcon from './icons/date-icon'
import AddressIcon from './icons/address-icon'
import ArrowRightIcon from './icons/arrow-right-icon'
interface Props {
  eventData: DummyData
}

const EventItem: FC<Props> = (props) => {
  const humanDate = new Date(props.eventData.date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: "numeric"
  })
  const formatAdress = props.eventData.location.replace(', ', '\n')

  const exploreLink = `events/${props.eventData.id}`
  return (
    <li className={styles.item}>
      <Image src={'/' + props.eventData.image} alt={props.eventData.description} width={250} height={160} />
      <div className={styles.content}>
        <div className={styles.summary}>
          <h2>{props.eventData.title}</h2>
        </div>
        <div className={styles.date}>
          <DateIcon />
          <time> {humanDate}</time>
        </div>
        <div className={styles.address}>
          <AddressIcon />
          <address> {formatAdress}</address>
        </div>
        <div className={styles.actions}>
          <Button link={exploreLink}>
            <span>Explore event</span>
            <span className={styles.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  )
}

export default EventItem
