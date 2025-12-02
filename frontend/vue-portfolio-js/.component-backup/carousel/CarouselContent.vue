<script setup>
import { useCarousel } from './useCarousel'
import { cn } from '@/lib/utils'

const { orientation } = useCarousel()
</script>

<template>
  <div
    :class="cn(
      'flex',
      orientation === 'horizontal' ? '-ml-4' : '-mt-4 flex-col',
      $attrs.class
    )"
  >
    <slot />
  </div>
</template>
