<template>
  <div id="default">
    <TheHeader class="header" />
    <TheMenu class="menu" />
    <div class="page">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/organisms/layouts/TheHeader.vue'
import TheMenu from '@/components/organisms/layouts/TheMenu.vue'

defineComponent({
  TheHeader,
  TheMenu
})
</script>

<style lang="scss" scoped>
@import '~/assets/styles/partials/index';

#default {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr;

  .header {
    grid-column: 1 / 3;
    grid-row: 1 / 2;
  }
  .menu {
    grid-column: 1 / 2;
    grid-row: 2 / 3;
  }
  .page {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    background-color: #F9F9F9; // FIXME: var化
  }
}
</style>
