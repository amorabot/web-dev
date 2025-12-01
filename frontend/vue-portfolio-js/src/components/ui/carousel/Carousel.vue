<script setup>
import { provide, ref, computed, watch, onMounted } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'
import { useProvideCarousel } from './useCarousel'

const props = defineProps({
  opts: {
    type: Object,
    default: () => ({})
  },
  plugins: {
    type: Array,
    default: () => []
  },
  orientation: {
    type: String,
    default: 'horizontal'
  }
})

const [emblaNode, emblaApi] = emblaCarouselVue(
  () => ({
    ...props.opts,
    axis: props.orientation === 'horizontal' ? 'x' : 'y'
  }),
  props.plugins
)

const canScrollNext = ref(false)
const canScrollPrev = ref(false)

const updateScrollState = () => {
  if (!emblaApi.value) return

  canScrollNext.value = emblaApi.value.canScrollNext()
  canScrollPrev.value = emblaApi.value.canScrollPrev()
}

watch(emblaApi, (api) => {
  if (!api) return

  updateScrollState()

  api.on('select', updateScrollState)
  api.on('reInit', updateScrollState)
})

function scrollPrev() {
  emblaApi.value?.scrollPrev()
}

function scrollNext() {
  emblaApi.value?.scrollNext()
}

function scrollTo(index) {
  emblaApi.value?.scrollTo(index)
}

const orientation = computed(() => props.orientation)

useProvideCarousel({
  emblaApi,
  canScrollNext,
  canScrollPrev,
  scrollPrev,
  scrollNext,
  scrollTo,
  orientation
})
</script>

<template>
  <div
    :class="['relative w-full', $attrs.class]"
    role="region"
    aria-roledescription="carousel"
  >
    <div ref="emblaNode" class="overflow-hidden">
      <slot />
    </div>
  </div>
</template>
