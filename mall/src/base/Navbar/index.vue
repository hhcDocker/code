<template>
    <div class="mine-navbar">
      <div class="mine-navbar-left" v-if="$slots.left">
        <slot name="left"></slot>
      </div>
      <div class="mine-navbar-center" v-if="$slots.center">
        <slot name="center"></slot>
      </div>
      <div class="mine-navbar-right" v-if="$slots.right" >
        <slot name="right"></slot>
      </div>
      <h1 class="mine-navbar-title" v-if="title" >
        <span class="mine-navbar-text" v-text="title"></span>
      </h1>
    </div>
</template>

<script>
  export default {
    name: 'myNavbar',
    props: {
      title: {
        type: String, //  数据类型
        default: ''//  默认为空
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .mine-navbar{
   @include flex-between();
    /*width: 100%;*/
    height: $navbar-height; //撑起头部容器的高度
    background-color: #fff;
    position: relative;
    &-left{
      margin-left: 10px;

      ~.mine-navbar-right{
        position: static; //进入文档流
      }
    }
    &-center{
     flex: 1;
      margin: 0 10px;
      ~.mine-navbar-right{
        position: static;  //进入文档流
      }
    }
    &-right{
      position: absolute;
      right: 0;
      @include flex-center(); //水平垂直居中显示
      height: 100%;
      margin-right: 10px;
    }
    &-title{
      position: absolute;
      top: 0;
      bottom: 0;
      left: 20%;
      right: 20%;
      @include flex-center(); //水平垂直居中显示

    }

    &-text{
      width: 100%;
      text-align: center;
      line-height: 1.5;
      font-size: $icon-font-size-sm;
      @include ellipsis();  //多余内容省略号显示
    }
  }
</style>
