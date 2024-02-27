/* eslint-disable @typescript-eslint/no-namespace */
import { RefObject, ReactNode } from 'react'
import { register } from 'swiper/element/bundle'
import { mockComics } from '../../utils/mock_data'
import './swiper.module.css'
import Comic from '../comic/comic'
import Swiper from 'swiper'
import { SwiperOptions } from 'swiper/types'
import { SwiperSlideProps } from 'swiper/react'
register()

type SwiperRef = HTMLElement & { swiper: Swiper; initialize: () => void }
register()

type Kebab<
  T extends string,
  A extends string = '',
> = T extends `${infer F}${infer R}`
  ? Kebab<R, `${A}${F extends Lowercase<F> ? '' : '-'}${Lowercase<F>}`>
  : A

type KebabObjectKeys<T> = {
  [key in keyof T as Kebab<key & string>]: T[key] extends object
    ? KebabObjectKeys<T[key]>
    : T[key]
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'swiper-container': SwiperContainerAttributes
      'swiper-slide': SwiperSlideAttributes
    }

    interface SwiperContainerAttributes extends KebabObjectKeys<SwiperOptions> {
      ref?: RefObject<SwiperRef>
      children?: ReactNode
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      style?: any
    }
    interface SwiperSlideAttributes extends KebabObjectKeys<SwiperSlideProps> {
      key?: React.Key
    }
  }
}

export const MyComponent = () => {
  return (
    <swiper-container
      slides-per-view={3}
      space-between="25"
      scrollbar={false}
      mousewheel-invert="true"
      pagination={true}
      pagination-clickable="true"
      style={{
        '--swiper-pagination-bullet-width': '19px',
        '--swiper-pagination-bullet-height': '19px',
        '--swiper-pagination-color': '#ffd670',
      }}
    >
      {mockComics.map(item => {
        return (
          <swiper-slide key={item.id}>
            <Comic data={item} />
          </swiper-slide>
        )
      })}
    </swiper-container>
  )
}
