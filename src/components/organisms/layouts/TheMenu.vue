<template>
  <div id="the-menu">
    <ul class="menu-list">
      <li v-for="menuItem in menu1" :key="menuItem.to" class="menu-list-item">
        <NuxtLink class="item-link" to="/fixme">
          <i>●</i>
          <span>{{ menuItem.text }}</span>
        </NuxtLink>
      </li>
    </ul>
    <hr>
    <ul class="menu-list">
      <li v-for="menuItem in menu2" :key="menuItem.to" class="menu-list-item">
        <NuxtLink class="item-link" to="/fixme">
          <i>●</i>
          <span>{{ menuItem.text }}</span>
        </NuxtLink>
      </li>
    </ul>
    <hr>
    <p>BEST OF YOUTUBE</p>
    <ul class="menu-list">
      <li v-for="menuItem in menu3" :key="menuItem.to" class="menu-list-item">
        <NuxtLink class="item-link" to="/fixme">
          <i>●</i>
          <span>{{ menuItem.text }}</span>
        </NuxtLink>
      </li>
    </ul>
    <hr>
    <p>YOUTUBEの他のサービス</p>
    <ul class="menu-list">
      <li v-for="menuItem in menu4" :key="menuItem.to" class="menu-list-item">
        <NuxtLink class="item-link" to="/fixme">
          <i>●</i>
          <span>{{ menuItem.text }}</span>
        </NuxtLink>
      </li>
    </ul>
    <hr>
    <ul class="menu-list">
      <li v-for="menuItem in menu5" :key="menuItem.to" class="menu-list-item">
        <NuxtLink class="item-link" to="/fixme">
          <i>●</i>
          <span>{{ menuItem.text }}</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
type Menu = {
  to: string,
  text: string,
  icon: string
}

const menu1: Menu[] = [
  { to: '/fixme1', text: 'ホーム', icon: '' },
  { to: '/fixme2', text: '探索', icon: '' },
  { to: '/fixme3', text: '登録チャンネル', icon: '' }
]

const menu2: Menu[] = [
  { to: '/fixme1', text: 'ライブラリ', icon: '' },
  { to: '/fixme2', text: '履歴', icon: '' }
]

const menu3: Menu[] = [
  { to: '/fixme1', text: '音楽', icon: '' },
  { to: '/fixme2', text: 'スポーツ', icon: '' },
  { to: '/fixme3', text: 'ゲーム', icon: '' },
  { to: '/fixme4', text: '音楽と番組', icon: '' },
  { to: '/fixme5', text: 'ニュース', icon: '' },
  { to: '/fixme6', text: 'ライブ', icon: '' },
  { to: '/fixme7', text: '学び', icon: '' },
  { to: '/fixme8', text: 'スポットライト', icon: '' },
  { to: '/fixme9', text: '360°動画', icon: '' }
]

const menu4: Menu[] = [
  { to: '/fixme1', text: 'YouTube Premium', icon: '' },
  { to: '/fixme2', text: 'ライブ', icon: '' }
]

const menu5: Menu[] = [
  { to: '/fixme1', text: '設定', icon: '' },
  { to: '/fixme2', text: '報告履歴', icon: '' },
  { to: '/fixme3', text: 'ヘルプ', icon: '' },
  { to: '/fixme4', text: 'フィードバック', icon: '' }
]

</script>

<style lang="scss" scoped>
@import '~/assets/styles/partials/index';

#the-menu {
  height: calc(100vh - #{$header-height}); // ヘッダーの高さを引く）
  overflow: auto;

  .item-link {
    height: size(40);
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
}
</style>
