<template>
  <div class="image-view">
    <img class="image-item" :src="props.src" :alt="props.alt">
  </div>
</template>

<script lang="ts" setup>
type PropsType = {
  src: string
  alt?: string
};
const props = withDefaults(defineProps<PropsType>(), {
  alt: ''
})
</script>

<style lang="scss" scoped>
@import '~/assets/styles/partials/index';

.image-view {
  .image-item {
    width: inherit;
    height: inherit;
    object-fit: cover;
  }
}
</style>
