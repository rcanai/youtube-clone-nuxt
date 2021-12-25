<template>
  <div>
    <div>
      route: {{ route }}
    </div>
    <hr>
    <div>
      coffee: {{ coffee[0] }}
    </div>
    <hr>
    <div>
      <button type="button" @click="clickItem">
        テスト
      </button>
      <button type="button" @click="aaa">
        リフレッシュ
      </button>
      <hr>
    </div>
    errTest {{ errTest }}
    <hr>
    error {{ error }}
    <hr>
    <div>
      fetchRes: {{ fetchRes }}
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()
const { data: coffee } = await useAsyncData('coffee', () => $fetch('https://api.sampleapis.com/coffee/hot'))
const { data: errTest, error, refresh } = await useAsyncData('errTest', () => $fetch('https://api.sampleapis.com/coffee/hot/err'))

const fetchRes = await useFetch('https://api.sampleapis.com/coffee/cold')

const clickItem = () => {
  coffee.value[0].title = 'Change'
}

const aaa = () => {
  refresh()
}
</script>
