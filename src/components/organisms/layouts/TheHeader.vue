<template>
  <header id="the-header">
    <div class="container">
      <div class="header-menu">
        E
      </div>
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

defineComponent({
  FormInput,
  GeneralButton
})
</script>

<style lang="scss" scoped>
@import '~/assets/styles/partials/index';

#the-header {
  height: $header-height;

  .container {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  .header-menu {
    //
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
