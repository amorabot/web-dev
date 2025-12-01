import { inject, provide } from 'vue'

const INJECTION_KEY = Symbol('carousel')

export function useProvideCarousel(carouselState) {
  provide(INJECTION_KEY, carouselState)
}

export function useCarousel() {
  const carouselState = inject(INJECTION_KEY)

  if (!carouselState) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return carouselState
}
