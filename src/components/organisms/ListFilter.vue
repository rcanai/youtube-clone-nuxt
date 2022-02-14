<template>
  <div class="list-filter">
    <ul class="filter-list">
      <li v-for="item in items" :key="item.id" class="filter-list-item">
        <a href="#" class="item-link" @click.prevent>
          {{ item.text }}
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
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
</script>

<style lang="scss" scoped>
@import '~/assets/styles/partials/index';

.list-filter {
  width: 100%;
  height: size($header-height);
  overflow: auto;
  background-color: var(--color-white);
  border-top: thin solid var(--color-gray);
  border-bottom: thin solid var(--color-gray);
  padding: size(12);
  white-space: nowrap;

  .filter-list {
    height: 100%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  .filter-list-item {
    margin-right: size(12);

    .item-link {
      display: block;
      padding: 0 size(12);
      background-color: var(--color-lightgray);
      border: thin solid var(--color-gray);
      border-radius: 1em;
    }
  }
}
</style>
