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
  position: relative;
  overflow: hidden;
  width: 100%;
  border: none;

  .image-item {
    display: block;
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-width: inherit;
    max-height: inherit;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
</style>
