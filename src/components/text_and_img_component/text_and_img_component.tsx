import { FC } from 'react'
import styles from './text_and_img_component.module.css'

interface TextAndImgComponentInterface {
  windowWidth: number
  text: string
  alt: string
  img: string
}

const TextAndImgComponent: FC<TextAndImgComponentInterface> = ({
  windowWidth,
  text,
  img,
  alt,
}) => {
  return (
    <>
      <div className={styles.container}>
        <p className={windowWidth > 768 ? 'text_H2' : 'text_T18_Regular'}>
          {text}
        </p>
        <div className={styles.image_wrapper}>
          <img className={styles.img} src={img} alt={alt} />
        </div>
      </div>
    </>
  )
}

export default TextAndImgComponent
