
import { FC } from 'react'
import { DummyData } from "../../../dummy-data";
import Link from 'next/link'
import Image from 'next/image'
import styles from './EventItem.module.css'

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

  const exploreLink = `evenets/${props.eventData.id}`
  return (
    <li className={styles.item}>
      <Image src={'/' + props.eventData.image} alt={props.eventData.description} width={300} height={300} />



      <div className={styles.content}>

        <div className={styles.summary}>
          <h2>{props.eventData.title}</h2>
        </div>

        <div className={styles.date}>
          <time> {humanDate}</time>
        </div>

        <div className={styles.address}>
          <address> {formatAdress}</address>
        </div>

        <div className={styles.actions}>
          <Link href={exploreLink}>Explore more</Link>
        </div>

      </div>





    </li>
  )
}

export default EventItem
