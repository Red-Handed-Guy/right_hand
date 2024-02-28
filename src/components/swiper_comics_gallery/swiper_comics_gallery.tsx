import { FC, useEffect, useState, useRef } from 'react'
import { register } from 'swiper/element/bundle'
import Comic from '../comic/comic'
import { ComicInterface } from '../../types'
import styles from './swiper_comics_gallery.module.css'

interface MyComponentInterface {
  comics: ComicInterface[]
  windowWidth: number
}

const SwiperComicsGallery: FC<MyComponentInterface> = ({
  comics,
  windowWidth,
}) => {
  const swiperRef = useRef(null)
  const [slidesPerView, setSlidesPerView] = useState<number>(3)
  const [spaceBetween, setSpaceBetween] = useState<number>(25)

  useEffect(() => {
    register()
  }, [])

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update() // или swiperRef.current.swiper.updateSize();
    }
  }, [comics])

  useEffect(() => {
    if (windowWidth > 1000) {
      setSlidesPerView(3)
      setSpaceBetween(25)
      return
    }
    if (1000 >= windowWidth && windowWidth > 768) {
      setSlidesPerView(3)
      setSpaceBetween(20)
      return
    }
    if (768 >= windowWidth && windowWidth > 500) {
      setSlidesPerView(2)
      setSpaceBetween(20)
      return
    }
    if (500 >= windowWidth) {
      setSlidesPerView(1)
      setSpaceBetween(0)
      return
    }
  }, [windowWidth])

  return (
    <swiper-container
      class={styles.swiper_container}
      ref={swiperRef}
      slides-per-view={slidesPerView}
      space-between={spaceBetween}
      scrollbar={false}
      pagination={true}
      mousewheel-enabled={true}
      mousewheel-release-on-edges={true}
      pagination-clickable="true"
      style={{
        '--swiper-pagination-bullet-width': '19px',
        '--swiper-pagination-bullet-height': '19px',
        '--swiper-pagination-color': '#ffd670',
        '--swiper-pagination-bullet-horizontal-gap': '8px',
      }}
    >
      {comics?.map(item => {
        return (
          <swiper-slide class={styles.swiper_slide} key={item.id}>
            <Comic data={item} />
          </swiper-slide>
        )
      })}
    </swiper-container>
  )
}

export default SwiperComicsGallery
