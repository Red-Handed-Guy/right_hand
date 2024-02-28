import { FC } from 'react'
import styles from './comics_gallery_page.module.css'
import SwiperComicsGallery from '../../components/swiper_comics_gallery/swiper_comics_gallery'
import { mockComics } from '../../utils/mock_data'
import { useWindowWidth } from '../../components/app/app'
import TextAndImgComponent from '../../components/text_and_img_component/text_and_img_component'
import Jpeg from '../../images/comics-gallery/4e1998dee29268731e7acb658d972a7c.jpeg'

const ComicsGalleryPage: FC = () => {
  const { windowWidth } = useWindowWidth()

  return (
    <>
      <section className={styles.gallery_section}>
        <h1 className={`text_H1 ${styles.gallery_title}`}>Комиксы</h1>
        <TextAndImgComponent
          text="РЖЯ комиксы - нечто совершенно новое и удивительное! Православные
            комиксы, созданные нашими неслышащими иконописцами. Эти произведения
            искусства сочетают в себе богатую духовность православной традиции с
            захватывающими историями, рассказанными в стиле комиксов. Каждая
            иллюстрация пропитана глубоким смыслом и добротой."
          windowWidth={windowWidth}
          img={Jpeg}
          alt="Два человека обзаются жестами"
        />
      </section>
      <SwiperComicsGallery comics={mockComics} windowWidth={windowWidth} />
    </>
  )
}

export default ComicsGalleryPage
