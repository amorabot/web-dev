<script setup>
import { useCarousel } from './useCarousel'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-vue-next'
import { cn } from '@/lib/utils'

const { orientation, canScrollNext, scrollNext } = useCarousel()
</script>

<template>
  <Button
    v-if="canScrollNext"
    :class="cn(
      'absolute h-14 w-14 rounded-full shadow-xl transition-all duration-300 hover:scale-110 top-1/2 -translate-y-1/2 z-10',
      $attrs.class
    )"
    :style="{
      backgroundColor: 'hsl(71, 58%, 31%)',
      borderColor: 'hsl(73, 34%, 24%)',
      color: 'white',
      borderWidth: '2px',
      right: '1rem'
    }"
    variant="ghost"
    size="icon"
    @click="scrollNext"
    @mouseenter="(e) => e.currentTarget.style.backgroundColor = 'hsl(73, 34%, 24%)'"
    @mouseleave="(e) => e.currentTarget.style.backgroundColor = 'hsl(71, 58%, 31%)'"
  >
    <ArrowRight class="h-7 w-7" />
    <span class="sr-only">Next slide</span>
  </Button>
</template>
