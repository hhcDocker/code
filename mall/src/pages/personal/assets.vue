<template>
    <div class="assets">
      <div class="assets-top">
        <i class="iconfont icon-wodezichan"></i>
        <span class="assets-title" >我的资产</span>
      </div>
      <div class="assets-content">
        <ul class="assets-list">
          <li v-for="(item,index) in dataArray" :key="index" class="assets-item">
            <span>{{item.text}}</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'assets',
    data() {
      return {
        dataArray: [{
          text: '现金券'
        }, {
          text: '红包'
        }, {
          text: '余额'
        }, {
          text: '礼品卡'
        }]
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .assets{
    &-top{
       display: flex;
       align-items: center;
       background-color: #fff;
       margin-top: 10px;
       margin-bottom: 2px;
       height: 40px;
       width: 100%;
       font-size: $font-size-l;
     }
    &-title{
       padding-left: 16px;
       font-weight: 1000;
     }
    &-list{
       height: 68px;
       background-color: #fff;
     @include flex-between();
     }
    &-item{
       padding: 0 15px;
       font-size: $font-size-base;
     @include flex-center(column);
     }
    }
    .icon{
    &-wodezichan:before{
       padding-left: 10px;
     }
    }
    .iconfont{
      font-size: $icon-font-size;
      margin-bottom: 8px;
    }
</style>
