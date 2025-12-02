<script setup lang="ts">
import { Primitive } from "reka-ui";
import { cn } from "@/lib/utils";
import { buttonVariants, type ButtonVariants } from ".";
import type { HTMLAttributes } from "vue";

interface Props {
  variant?: ButtonVariants["variant"];
  size?: ButtonVariants["size"];
  class?: HTMLAttributes["class"];
  asChild?: boolean;
  as?: string;
}

const props = withDefaults(defineProps<Props>(), {
  as: "button",
});
</script>

<template>
  <Primitive
    :as="as"
    :as-child="asChild"
    :class="cn(buttonVariants({ variant, size }), props.class)"
  >
    <slot />
  </Primitive>
</template>
