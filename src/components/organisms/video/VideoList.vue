<template>
  <ul class="video-list">
    <li v-for="item in items" :key="item.id" class="video-list-item">
      <a href="#" class="video-link" @click.prevent>
        <ImageView class="video-image" src="https://t.pimg.jp/062/511/808/1/62511808.jpg" />
        {{ item.text }}
      </a>
    </li>
  </ul>
</template>

<script lang="ts" setup>
import ImageView from '@/components/atoms/ImageView.vue'

type Item = {
  id: string | number,
  text: string,
}

const items: Item[] = [
  { id: 1, text: 'すべて' },
  { id: 2, text: 'アニメーション' },
  { id: 3, text: '料理番組' },
  { id: 4, text: 'ライブ' },
  { id: 5, text: 'サッカー' },
  { id: 6, text: '音楽' },
  { id: 7, text: '数学' },
  { id: 8, text: 'ペット' },
  { id: 9, text: 'アクション&アドベンチャー' },
  { id: 10, text: 'スポーツビデオ' },
  { id: 11, text: '最近アップロードされた動画' }
]

defineComponent({
  ImageView
})
</script>

<style lang="scss" scoped>
@import '~/assets/styles/partials/index';

.video-list {
  display: flex;
  flex-flow: row wrap;
  --items-per-row: 4;
  --item-margin: 24px;

  .video-list-item {
    width: calc( 100% / var(--items-per-row) - var(--item-margin) - 0.01px );
  }

  .video-link {
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
  }

  .video-image {
    &::before {
      content: "";
      display: block;
      width: 100%;
      padding-top: 56.25%;
    }
  }
}
</style>
