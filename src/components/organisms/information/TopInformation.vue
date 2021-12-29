<template>
  <div class="top-information">
    <div class="information-text">
      <i>●</i>
      <p>YouTube の利用規約が 2022 年 1 月 5 日に更新されます。詳細は規約をご確認ください。</p>
    </div>
    <a href="#">
      閉じる
    </a>
    <a href="#">
      規約を確認
    </a>
  </div>
</template>

<style lang="scss" scoped>
@import '~/assets/styles/partials/index';

.top-information {
  width: 100%;
  height: $header-height;
  background-color: #F2F8FE; // FIXME: var化
  display: flex;
  flex-flow: row nowrap;
  align-items: center;

  .information-text {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }
}
</style>
