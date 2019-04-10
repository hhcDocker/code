<template>

  <my-navbar class="header" title="" v-show="visable">
    <i class="iconfont icon-saoyisao" slot="left"></i>
    <me-searchbox
      placeholder="开学季有礼，好货5折起"
      slot="center"
      @get-query="getQuery"
      fake
      @click.native="gotoSearch"
    >

    </me-searchbox>
    <i class="iconfont icon-xiaoxi" slot="right"></i>
  </my-navbar>

</template>

<script>
  import MyNavbar from 'base/Navbar';
  import MeSearchbox from 'base/search-box';
  export default {
    name: 'home-header',
    components: {
      MyNavbar,
      MeSearchbox
    },
    data() {
      return {
        visable: true
      };
    },
    methods: {
      show() {
        this.visable = true;
      },
      hide() {
        this.visable = false;
      },
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

  .header{
    &.mine-navbar{ //父级元素
      background-color: transparent;
      transition: background-color 0.5s;
      /*background-color: $header-bgc-translucent;*/
    }
    &.header-transition{ //子级元素
      background-color: $header-bgc-translucent;
    }
    .iconfont{
      font-size: $icon-font-size;
      color: $icon-color-default;
    }
  }
</style>
