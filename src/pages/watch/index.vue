<template>
  <div>
    プレイヤー!
    {{ globalCount }}
  </div>
</template>

<script lang="ts" setup>
import { globalStore } from '~/store/globalStore'

const global = globalStore()
const globalCount = computed(() => global.getCount)

useMeta({
  title: 'プレイヤー'
})
</script>
