<script setup lang="ts">
import type { CarouselEmits, CarouselProps, WithClassAsProps } from "./interface"
import { cn } from "@/lib/utils"
import { useProvideCarousel } from "./useCarousel"
import { onMounted, onUnmounted } from 'vue'

const props = withDefaults(defineProps<CarouselProps & WithClassAsProps>(), {
  orientation: "horizontal",
})

const emits = defineEmits<CarouselEmits>()

const { canScrollNext, canScrollPrev, carouselApi, carouselRef, orientation, scrollNext, scrollPrev } = useProvideCarousel(props, emits)

defineExpose({
  canScrollNext,
  canScrollPrev,
  carouselApi,
  carouselRef,
  orientation,
  scrollNext,
  scrollPrev,
})

function onKeyDown(event: KeyboardEvent) {
  const prevKey = props.orientation === "vertical" ? "ArrowUp" : "ArrowLeft"
  const nextKey = props.orientation === "vertical" ? "ArrowDown" : "ArrowRight"

  if (event.key === prevKey) {
    event.preventDefault()
    scrollPrev()

    return
  }

  if (event.key === nextKey) {
    event.preventDefault()
    scrollNext()
  }
}

// Mouse wheel scroll functionality
const handleWheel = (event: WheelEvent) => {
  if (!carouselApi.value) return

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
  if (carouselRef.value) {
    carouselRef.value.addEventListener('wheel', handleWheel, { passive: false })
  }
})

onUnmounted(() => {
  if (carouselRef.value) {
    carouselRef.value.removeEventListener('wheel', handleWheel)
  }
})
</script>

<template>
  <div
    :class="cn('relative', props.class)"
    role="region"
    aria-roledescription="carousel"
    tabindex="0"
    @keydown="onKeyDown"
  >
    <slot :can-scroll-next :can-scroll-prev :carousel-api :carousel-ref :orientation :scroll-next :scroll-prev />
  </div>
</template>
