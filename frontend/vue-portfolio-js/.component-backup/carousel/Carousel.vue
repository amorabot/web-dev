<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted } from 'vue'
import emblaCarouselVue from 'embla-carousel-vue'
import type { EmblaCarouselType, EmblaOptionsType, EmblaPluginType } from 'embla-carousel'
import { useProvideCarousel } from './useCarousel'

interface Props {
  opts?: EmblaOptionsType
  plugins?: EmblaPluginType[]
  orientation?: 'horizontal' | 'vertical'
}

const props = withDefaults(defineProps<Props>(), {
  opts: () => ({}),
  plugins: () => [],
  orientation: 'horizontal'
})

const emit = defineEmits<{
  'init-api': [api: EmblaCarouselType]
}>()

const [emblaNode, emblaApi] = emblaCarouselVue(
  computed(() => ({
    ...props.opts,
    axis: props.orientation === 'horizontal' ? 'x' : 'y'
  })),
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

  // Emit the API instance to parent component
  emit('init-api', api)
})

function scrollPrev() {
  emblaApi.value?.scrollPrev()
}

function scrollNext() {
  emblaApi.value?.scrollNext()
}

function scrollTo(index: number) {
  emblaApi.value?.scrollTo(index)
}

const orientation = computed(() => props.orientation)

// Mouse wheel scroll functionality
const handleWheel = (event: WheelEvent) => {
  if (!emblaApi.value) return

  // Prevent default scroll behavior
  event.preventDefault()

  // Check scroll direction: positive deltaY means scroll down, negative means scroll up
  if (event.deltaY > 0) {
    // Scroll down = next slide (scroll right)
    if (canScrollNext.value) {
      scrollNext()
    }
  } else if (event.deltaY < 0) {
    // Scroll up = previous slide (scroll left)
    if (canScrollPrev.value) {
      scrollPrev()
    }
  }
}

onMounted(() => {
  if (emblaNode.value) {
    emblaNode.value.addEventListener('wheel', handleWheel, { passive: false })
  }
})

onUnmounted(() => {
  if (emblaNode.value) {
    emblaNode.value.removeEventListener('wheel', handleWheel)
  }
})

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
