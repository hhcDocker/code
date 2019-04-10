<template>
    <div class="synopsis">
      <p class="synopsis-title">{{title}}</p>
      <div class="msg-container">
        <span class="synopsis-msg-left">{{postage}}</span>
        <span class="synopsis-msg-center">月销量{{sellCount}}件</span>
        <span class="synopsis-msg-right">{{address}}</span>
      </div>
    </div>
</template>

<script>
  export default {
    name: 'synopsis',
    props: {
      title: {
        type: String,
        default: ''
      },
      postage: {
        type: String,
        default: ''
      },
      sellCount: {
        type: String,
        default: ''
      },
      address: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .synopsis{
    &-title{
      padding: 7px 6px;
      font-size: $font-size-base;
      font-weight: 600;
    }
  }
  .msg-container{
    padding: 6px;
    border-bottom: 6px solid #eee;
    @include flex-between();
  }
</style>
