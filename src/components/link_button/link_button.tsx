import { FC } from 'react'
import { Link } from 'react-router-dom'
import styles from './link_button.module.css'

interface LinkButtonInterface {
  text: string
  link: string
}

const LinkButton: FC<LinkButtonInterface> = ({ link, text }) => {
  const handleClick = () => {
    window.scrollTo(0, 0)
  }

  return (
    <Link
      onClick={handleClick}
      className={`text_T18_Medium ${styles.link}`}
      to={'/' + link}
    >
      {text}
    </Link>
  )
}

export default LinkButton
