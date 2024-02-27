import { FC } from 'react'
import styles from './comics_gallery_page.module.css'
import comicsGalleryImage from '../../images/comics-gallery/4e1998dee29268731e7acb658d972a7c.jpeg'
import ComicsGallery from '../../components/comics_gallery/comics_gallery'

const ComicsGalleryPage: FC = () => {
  return (
    <>
      <section>
        <h1 className={`text_H1 ${styles.gallery_title}`}>Комиксы</h1>
        <div className={styles.container}>
          <p className={`text_H2`}>
            РЖЯ комиксы - нечто совершенно новое и удивительное! Православные
            комиксы, созданные нашими неслышащими иконописцами. Эти произведения
            искусства сочетают в себе богатую духовность православной традиции с
            захватывающими историями, рассказанными в стиле комиксов. Каждая
            иллюстрация пропитана глубоким смыслом и добротой.
          </p>
          <img
            className={styles.gallery_image}
            src={comicsGalleryImage}
            alt="Два человека общаются жестами"
          />
        </div>
      </section>
      <ComicsGallery />
    </>
  )
}

export default ComicsGalleryPage
