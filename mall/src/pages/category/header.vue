<template>
  <me-navbar class="header">
    <me-searchbox
      placeholder="开学季有礼，好货5折起"
      slot="center"
      @get-query="getQuery"
      fake
      @click.native="gotoSearch"
    >

    </me-searchbox>
    <i class="iconfont icon-msg" slot="right"></i>
  </me-navbar>
</template>

<script>
  import MeNavbar from 'base/navbar';
  import MeSearchbox from 'base/search-box';

  export default {
    name: 'CategoryHeader',
    components: {
      MeNavbar,
      MeSearchbox
    },
    methods: {
      getQuery(query) {
        console.log(query);
      },
      gotoSearch() {
        this.$router.push('/search');
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .header {
    &.mine-navbar {
      background-color: $header-bgc-translucent;//背景色变成半透明
    }

    .iconfont {
      color: $icon-color-default;//背景色变成白色
      font-size: $icon-font-size;//字号变成24号
    }
  }
</style>
