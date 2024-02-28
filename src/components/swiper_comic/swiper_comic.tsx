import { FC, useEffect, useRef } from 'react'
import { register } from 'swiper/element/bundle'
import { ComicImageInterface } from '../../types'
import styles from './swiper_comic.module.css'

interface SwiperComicInterface {
  comicImage: ComicImageInterface[]
}

const SwiperComic: FC<SwiperComicInterface> = ({ comicImage }) => {
  const swiperRef = useRef(null)

  useEffect(() => {
    register()
    // Object with parameters
    const params = {
      slidesPerView: 1,
      pagination: {
        type: 'fraction',
      },
    }

    // Assign it to swiper element
    Object.assign(swiperRef.current, params)

    // initialize swiper
    swiperRef.current.initialize()
  }, [])

  useEffect(() => {
    if (swiperRef.current) {
      swiperRef.current.swiper.update() // или swiperRef.current.swiper.updateSize();
    }
  }, [comicImage])

  return (
    <div className={styles.wrapper}>
      <swiper-container
        class={styles.swiper_container}
        ref={swiperRef}
        navigation-next-el=".custom-next-button"
        navigation-prev-el=".custom-prev-button"
        style={{
          '--swiper-pagination-bottom': '0px',
        }}
      >
        {comicImage?.map(item => {
          return (
            <swiper-slide class={styles.swiper_slide} key={item.id}>
              <img className={styles.img} src={item.img} alt={'#'} />
            </swiper-slide>
          )
        })}
      </swiper-container>
      <div className={styles.buttons_wrapper}>
        <div className="nav-btn custom-prev-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.5892 4.75462C10.9147 4.42918 10.9147 3.90155 10.5892 3.57611C10.2638 3.25067 9.73616 3.25067 9.41072 3.57611L3.58081 9.40602C3.56925 9.41745 3.55802 9.42922 3.54714 9.4413C3.41421 9.58895 3.33331 9.78437 3.33331 9.99868L3.33332 10.0012C3.33364 10.1101 3.35484 10.214 3.39313 10.3093C3.4338 10.4107 3.49522 10.5058 3.57739 10.588L9.41072 16.4213C9.73616 16.7467 10.2638 16.7467 10.5892 16.4213C10.9147 16.0958 10.9147 15.5682 10.5892 15.2428L6.17847 10.832H15.8333C16.2935 10.832 16.6666 10.4589 16.6666 9.99868C16.6666 9.53844 16.2935 9.16534 15.8333 9.16534H6.17851L10.5892 4.75462Z"
              fill="#828282"
            />
          </svg>
        </div>

        <div className="nav-btn custom-next-button">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              d="M10.5893 3.57611C10.2638 3.25067 9.73619 3.25067 9.41076 3.57611C9.08532 3.90155 9.08532 4.42918 9.41076 4.75462L13.8215 9.16534H4.16668C3.70644 9.16534 3.33334 9.53844 3.33334 9.99868C3.33334 10.4589 3.70644 10.832 4.16668 10.832H13.8215L9.41076 15.2428C9.08532 15.5682 9.08532 16.0958 9.41076 16.4213C9.73619 16.7467 10.2638 16.7467 10.5893 16.4213L16.4226 10.588C16.5057 10.5049 16.5676 10.4086 16.6082 10.3059C16.6432 10.2177 16.6636 10.122 16.6664 10.0219C16.6667 10.0082 16.6668 9.99439 16.6665 9.98062C16.6642 9.87152 16.6409 9.76759 16.6005 9.67268C16.5647 9.5883 16.5143 9.50862 16.4494 9.43747C16.4397 9.42681 16.4297 9.4164 16.4194 9.40626L10.5893 3.57611Z"
              fill="#828282"
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SwiperComic
