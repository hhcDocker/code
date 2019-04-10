<template>
    <div class="g-footer-container footer">
      <div class="footer-left-container">
        <ul class="footer-list">
          <li>
            <i class="iconfont icon-dianpu"></i>
            <span class="shop">店铺</span>
          </li>
          <li>
            <i class="iconfont icon-kefu"></i>
            <span class="shop">客服</span>
          </li>
          <li>
            <i class="iconfont icon-shoucang"></i>
            <span class="shop">收藏</span>
          </li>
        </ul>
      </div>
      <div class="footer-right-container">
        <div class="footer-cart-container">
          <span class="footer-cart">加入购物车</span>
        </div>
        <div class="footer-loot-container">
          <span class="footer-loot">马上抢</span>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'footer'
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
.footer{
  height: $tabbar-height;
  display: flex;
  background-color: #fff;
  &-left-container{
    flex: 9;
  }
  &-right-container{
    flex: 11;
  }
  &-list{
    height: 100%;
    padding: 3px 20px;
    @include flex-between
    li{
      @include flex-center(column);
    }
  }
  &-right-container{
    display: flex;
  }
  &-cart-container{
    height: 100%;
    background-color: #ff9500;
    flex: 1;
    @include flex-center();
  }
  &-loot-container{
    height: 100%;
    background-color: #ff0036;
    flex: 1;
    @include flex-center();
  }
}
</style>
