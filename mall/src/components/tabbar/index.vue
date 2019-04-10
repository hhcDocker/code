<template>
  <div class="g-tabbar">
    <router-link class="g-tabbar-item" to="/home">
      <i class="iconfont icon-shouye"></i>
      <span>首页</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/category">
      <i class="iconfont icon-leimupinleifenleileibie2"></i>
      <span>分类</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/cart">
      <i class="iconfont icon-gouwuchekong"></i>
      <span>购物车</span>
    </router-link>
    <router-link class="g-tabbar-item" to="/personal">
      <i class="iconfont icon-iconfontgerenzhongxin"></i>
      <span>个人中心</span>
    </router-link>

  </div>
</template>
<script>
  export default {
    name: 'CTabbar',
    data() {
      return {

      };
    }
  };
</script>
<style lang="scss" scoped>
  @import "~assets/scss/mixins";
.router-link-active{
  color:$link-active-color;
}

</style>
