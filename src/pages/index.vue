<template>
  <div>
    <TopInformation />
    <ListFilter />
  </div>
</template>

<script lang="ts" setup>
import TopInformation from '@/components/organisms/information/TopInformation.vue'
import ListFilter from '@/components/organisms/ListFilter.vue'

defineComponent({
  TopInformation,
  ListFilter
})
</script>
