/* eslint-disable @typescript-eslint/no-namespace */
import { ReactNode, RefObject } from 'react'
import Swiper from 'swiper'
import { SwiperSlideProps } from 'swiper/react'
import { SwiperOptions } from 'swiper/types'

export interface ComicInterface {
  img: string
  title: string
  date: string
  id: number
}

export interface ComicImageInterface {
  img: string
  id: number
}

export type SwiperRef = HTMLElement & { swiper: Swiper; initialize: () => void }

export type Kebab<
  T extends string,
  A extends string = '',
> = T extends `${infer F}${infer R}`
  ? Kebab<R, `${A}${F extends Lowercase<F> ? '' : '-'}${Lowercase<F>}`>
  : A

export type KebabObjectKeys<T> = {
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
      class?: string
    }
    interface SwiperSlideAttributes extends KebabObjectKeys<SwiperSlideProps> {
      key?: React.Key
      class?: string
    }
  }
}
