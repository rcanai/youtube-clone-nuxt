<template>
  <button :type="props.type">
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
