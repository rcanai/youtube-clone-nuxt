<template>
  <header id="the-header">
    <div class="container">
      <div class="header-menu">
        E
      </div>
      <div class="header-logo">
        YouTube
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
    display: grid;
    grid-template-columns: size(40) size(120) size(450) auto;
    grid-template-rows: 100%;
    justify-items: center;
    align-items: center;
  }

  .header-menu {
    grid-column: 1 / 2;
    grid-row: 1 / 2;
  }

  .header-logo {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
  }

  .header-search {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
  }

  .header-actions {
    grid-column: 4 / 5;
    grid-row: 1 / 2;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
}
</style>
