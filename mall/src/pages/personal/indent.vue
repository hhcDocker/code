<template>
    <div class="indent">
      <div class="indent-top">
        <i class="iconfont icon-wodedingdan"></i>
        <span class="indent-title" >我的订单</span>
        <span class="indent-operation">查看我的全部订单</span>
        <i class="iconfont icon-back"></i>
      </div>
      <div class="indent-content">
        <ul class="indent-list">
          <li v-for="(item,index) in dataArray1" :key="index" class="indent-item">
            <i :class="item.class"></i>
            <span>{{item.text}}</span>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'indent',
    data() {
      return {
        dataArray1: [{
          class: 'iconfont icon-daifukuan',
          text: '待付款'
        }, {
          class: 'iconfont icon-daishouhuo',
          text: '待收货'
        }, {
          class: 'iconfont icon-daipingjia',
          text: '待评价'
        }, {
          class: 'iconfont icon-tui',
          text: '退货/退款'
        }]
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
.indent{
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
  &-operation{
    padding-left: 110px;
    font-weight: 300;
  }
  &-list{
    height: 112px;
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
    &-wodedingdan:before{
      padding-left: 10px;
    }
    &-back:before{
      padding-left: 16px;
    }
  }
  .iconfont{
    font-size: $icon-font-size;
    margin-bottom: 8px;
  }
</style>
