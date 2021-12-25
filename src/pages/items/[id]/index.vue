<template>
  <div>
    {{ route.params.id }}
    <div>
      count: {{ globalCount }}
    </div>
    <div>
      hello: {{ $hello() }}
    </div>
    <div>
      <button type="button" @click="global.addCount">
        +1
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { globalStore } from '~/store/globalStore'

const global = globalStore()

const route = useRoute()

const globalCount = computed(() => global.getCount)

const { $hello } = useNuxtApp()

useMeta({
  title: 'タイトル変更'
})
</script>

<script lang="ts">
export default {
  layout: 'custom'
}
</script>
