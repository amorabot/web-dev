import type { Ref, ComputedRef, InjectionKey } from 'vue'
import { inject, provide } from 'vue'
import type { EmblaCarouselType } from 'embla-carousel'

export interface CarouselState {
  emblaApi: Ref<EmblaCarouselType | undefined>
  canScrollNext: Ref<boolean>
  canScrollPrev: Ref<boolean>
  scrollPrev: () => void
  scrollNext: () => void
  scrollTo: (index: number) => void
  orientation: ComputedRef<string>
}

const INJECTION_KEY = Symbol('carousel') as InjectionKey<CarouselState>

export function useProvideCarousel(carouselState: CarouselState) {
  provide(INJECTION_KEY, carouselState)
}

export function useCarousel() {
  const carouselState = inject(INJECTION_KEY)

  if (!carouselState) {
    throw new Error('useCarousel must be used within a <Carousel />')
  }

  return carouselState
}
