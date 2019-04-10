<template>
    <div class="banner">
      <i class="iconfont icon-tab_personal banner-icon"></i>
      <p class="banner-title">
        <span class="banner-title-left">注册</span>|
        <span class="banner-title-right">登录</span>
      </p>
    </div>
</template>

<script>
  export default {
    name: 'banner'
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
.banner{
  height: 172px;
  @include flex-center(column);
  background-color: $header-bgc-translucent;
  &-title{
    padding-top: 20px;
    font-size: $icon-font-size;
    color: #fff;
    &-left{
      margin-right: 25px;
    }
    &-right{
      margin-left: 25px;
    }
  }
}
  .icon-tab_personal:before{
    color: $header-bgc;
    @include flex-center();
    background-color: #fff;
    font-size: 50px;
    width: 94px;
    height: 94px;
    border-radius: 50%;
  }
</style>
