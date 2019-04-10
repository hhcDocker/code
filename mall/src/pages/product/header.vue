<template>
  <me-navbar class="header">
    <i class="iconfont icon-back" slot="left" @click="goBack"></i>
    <span class="header-text" slot="center">商品详情</span>
    <i class="iconfont icon-gouwuchekong" slot="right"></i>
  </me-navbar>
</template>

<script>
  import meNavbar from 'base/Navbar';
  export default {
    components: {
      meNavbar
    },
    methods: {
      goBack() {
        this.$router.back();
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
.header{
  background-color: $header-bgc-translucent;
  color: $icon-color-default;
  &-text{
    @include flex-center();
    font-size: $font-size-l;
  }
}
</style>
