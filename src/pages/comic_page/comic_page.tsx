import { FC, useEffect, useState } from 'react'
import { mockComics } from '../../utils/mock_data'
import { useWindowWidth } from '../../components/app/app'
import SwiperComicsGallery from '../../components/swiper_comics_gallery/swiper_comics_gallery'
import { ComicImageInterface, ComicInterface } from '../../types'
import { useParams } from 'react-router-dom'
import TextAndImgComponent from '../../components/text_and_img_component/text_and_img_component'
import styles from './comic_page.module.css'
import SwiperComic from '../../components/swiper_comic/swiper_comic'

const defaultComic: ComicInterface = {
  date: '',
  id: Math.random(),
  img: '',
  title: '',
}

const loremTest =
  'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima repudiandae obcaecati tenetur velit, odio architecto, nobis impedit suscipit nam labore adipisci. Atque accusamus quasi libero dicta expedita praesentium soluta nobis?'

const ComicPage: FC = () => {
  const [mockComicsFiltered, setMockComicsFiltered] = useState<
    ComicInterface[]
  >([])
  const [activeComic, setActiveComic] = useState<ComicInterface>(defaultComic)
  const [activeComicImage, setActiveComicImage] = useState<
    ComicImageInterface[]
  >([])
  const { windowWidth } = useWindowWidth()
  const params = useParams()

  useEffect(() => {
    const nums = [1, 2, 3, 4, 5]
    const comic = mockComics.find(comic => comic.id === +params.id)
    if (comic) {
      setActiveComic(comic)
    }
    setMockComicsFiltered(
      mockComics.filter(comicItem => comicItem.id !== +params.id),
    )
    setActiveComicImage(
      nums.map(num => {
        return { id: num, img: comic.img }
      }),
    )
  }, [params.id])

  return (
    <>
      <article className={styles.article_container}>
        <p className={`text_T18_Regular`}>{activeComic.date}</p>
        <h1 className={`text_H1 ${styles.title}`}>
          &#171;{activeComic.title}&#187;
        </h1>
        <TextAndImgComponent
          alt={activeComic.title}
          img={activeComic.img}
          text={loremTest}
          windowWidth={windowWidth}
        />
        <SwiperComic comicImage={activeComicImage} />
      </article>

      <SwiperComicsGallery
        comics={mockComicsFiltered}
        windowWidth={windowWidth}
      />
    </>
  )
}

export default ComicPage
