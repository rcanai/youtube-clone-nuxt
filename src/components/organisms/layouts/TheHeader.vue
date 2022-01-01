<template>
  <header id="the-header">
    <div class="container">
      <a class="header-menu" @click.prevent="global.toggleMenu">
        E
      </a>
      <div class="header-logo">
        <NuxtLink to="/">
          YouTube
        </NuxtLink>
      </div>
      <div class="header-search">
        <FormInput type="text">
          <template #suffix>
            <GeneralButton>検索</GeneralButton>
          </template>
        </FormInput>
      </div>
      <div class="header-actions">
        ●
        ●
        ●
        ●
      </div>
    </div>
  </header>
</template>

<script lang="ts" setup>
import FormInput from '~~/src/components/molecules/FormInput.vue'
import GeneralButton from '@/components/atoms/GeneralButton.vue'
import { globalStore } from '~/store/globalStore'

defineComponent({
  FormInput,
  GeneralButton
})

const global = globalStore()
</script>

<style lang="scss" scoped>
@import '~/assets/styles/partials/index';

#the-header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: size($header-height);
  z-index: $header-z-index;
  background-color: var(--color-white);

  .container {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  .header-menu {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
  }

  .header-logo {
    //
  }

  .header-search {
    //
  }

  .header-actions {
    //
  }
}
</style>
