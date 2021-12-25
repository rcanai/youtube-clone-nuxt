<template>
  <div>
    <TheHeader />
    <slot />
  </div>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/organisms/layouts/TheHeader.vue'

defineComponent({
  TheHeader
})
</script>
