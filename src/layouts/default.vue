<template>
  <div id="default">
    <TheHeader />
    <TheMenu />
    <!-- ヘッダーとメニューはfixed、PCではヘッダーのzIndexが一番高い、tabではメニューのzIndexが一番高い -->
    <div
      class="page-container"
      :class="{
        'show-menu': showMenu
      }"
    >
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup>
import TheHeader from '@/components/organisms/layouts/TheHeader.vue'
import TheMenu from '@/components/organisms/layouts/TheMenu.vue'
import { globalStore } from '~/store/globalStore'

defineComponent({
  TheHeader,
  TheMenu
})

const global = globalStore()
const showMenu = computed(() => global.getShowMenu)
</script>

<style lang="scss" scoped>
@import '~/assets/styles/partials/index';

#default {
  .page-container {
    &.show-menu {
      padding-left: size($menu-width-large);
    }
  }
}
</style>
