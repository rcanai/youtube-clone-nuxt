<template>
  <div>
    <TopInformation />
    <ListFilter />
    <VideoList />
  </div>
</template>

<script lang="ts" setup>
import TopInformation from '@/components/organisms/information/TopInformation.vue'
import ListFilter from '@/components/organisms/ListFilter.vue'
import VideoList from '@/components/organisms/video/VideoList.vue'

defineComponent({
  TopInformation,
  ListFilter,
  VideoList
})

useMeta({
  title: ''
})
</script>
