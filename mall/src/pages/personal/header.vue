<template>
  <me-navbar class="header">
    <span class="header-title" slot="center">我的幕淘</span>
    <i class="iconfont icon-shezhi" slot="right"></i>
    <i class="iconfont icon-xiaoxi" slot="right"></i>
  </me-navbar>
</template>

<script>
  import meNavbar from 'base/navbar';
  export default {
    name: 'header',
    components: {
      meNavbar
    }
  };
</script>

<style lang="scss" scoped>
  @import '~assets/scss/mixins';
.header{
  &.mine-navbar{
    background-color: $header-bgc-translucent;
    color: $icon-color-default;
  }
  &-title{
    transform: translateX(7%);
    @include flex-center();
  }
}
  .icon-shezhi{
    padding-right: 10px;
  }
</style>
