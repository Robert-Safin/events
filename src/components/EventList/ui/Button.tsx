import {FC, ReactNode} from 'react'
import Link from 'next/link'
import styles from './Button.module.css'
interface Props {
  children: ReactNode
  link: string
}

const Button:FC<Props> = (props) => {
  return (
    <Link href={props.link} className={styles.btn}>
    {props.children}
    </Link>
  )
}

export default Button
