import { FC } from 'react'
import { ComicInterface } from '../../types'
import styles from './comic.module.css'
import LinkButton from '../link_button/link_button'

interface ComicComponentInterface {
  data: ComicInterface
}

const Comic: FC<ComicComponentInterface> = ({ data }) => {
  const { date, id, img, title } = data

  return (
    <article className={styles.container}>
      <img className={styles.img} src={img} alt={title} />
      <h3 className={`text_T24_Regular ${styles.title}`}>{title}</h3>
      <p className={`text_T18_Regular ${styles.date}`}>{date}</p>
      <LinkButton link={id + ''} text="Читать" />
    </article>
  )
}

export default Comic
