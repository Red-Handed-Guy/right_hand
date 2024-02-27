import { FC } from 'react'
import styles from './comics_gallery.module.css'
import { mockComics } from '../../utils/mock_data'
import Comic from '../comic/comic'
import { register } from 'swiper/element/bundle'
import { MyComponent } from '../swiper/swiper'
// register Swiper custom elements
register()

const ComicsGallery: FC = () => {
  return (
    <>
      <MyComponent />
      {/* <section className={styles.gallery} aria-label="Галерея комиксов">
        <Comic data={mockComics[0]} />
        <Comic data={mockComics[1]} />
        <Comic data={mockComics[2]} />
      </section> */}
    </>
  )
}

export default ComicsGallery
