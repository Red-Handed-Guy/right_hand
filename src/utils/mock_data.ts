import { ComicInterface } from '../types'
import BagOfPotatoes from '../images/comics/bag_of_potatoes.jpeg'
import BellRinging from '../images/comics/bell_ringing.jpeg'
import BlindAndLegless from '../images/comics/blind_and_legless.jpeg'
import PrayAndWork from '../images/comics/pray_and_work.jpeg'

export const mockComics: ComicInterface[] = [
  {
    date: '16.11.22',
    id: 1,
    img: BagOfPotatoes,
    title: 'Обида и мешок картошки',
  },
  {
    date: '16.11.22',
    id: 2,
    img: BellRinging,
    title: 'Колокольный звон',
  },
  {
    date: '16.11.22',
    id: 3,
    img: BlindAndLegless,
    title: '“Слепой и безногий” православная притча',
  },
  {
    date: '16.11.22',
    id: 4,
    img: PrayAndWork,
    title: '“Молись и трудись”',
  },
]
