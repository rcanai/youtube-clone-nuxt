<template>
  <button class="general-button" :type="props.type">
    <slot />
  </button>
</template>

<script lang="ts" setup>
type PropsType = {
  type?: 'button' | 'submit' | 'reset';
  color?: string;
};
const props = withDefaults(defineProps<PropsType>(), {
  type: 'button',
  color: '--color-primary'
})
</script>

<style lang="scss" scoped>
@import '~/assets/styles/partials/index';

.general-button {
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
}
</style>
