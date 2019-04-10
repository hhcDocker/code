<template>
    <div class="comment">
      <p class="comment-title">商品评价({{commentCount}})</p>
      <ul
        class="comment-list"
      >
        <li
          v-for="(item,index) in keywords"
          :key="index"
          class="comment-item"
        >{{(item.word)}}（{{item.count}}）</li>
      </ul>
      <div class="comment-container">
        <img :src="commentHeadpic" alt="" class="comment-headpic">
        <span class="comment-name">{{commentName}}</span>
        <p class="comment-content">{{commentContent}}</p>
        <span class="comment-time">{{commentTime}}</span>
        <span class="comment-product">{{commentSkuInfo}}</span>
      </div>

    </div>
</template>

<script>
  export default {
    name: 'comment',
    props: {
      keywords: {
        type: Array,
        default() {
          return [];
        }
      },
      commentCount: {
        type: String,
        default: ''
      },
      commentHeadpic: {
        type: String,
        default: ''
      },
      commentName: {
        type: String,
        default: ''
      },
      commentSkuInfo: {
        type: String,
        default: ''
      },
      commentTime: {
        type: String,
        default: ''
      },
      commentContent: {
        type: String,
        default: ''
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .comment{
    border-bottom: 6px solid #eee;
    &-title{
      padding: 10px 6px;
    }
    &-list{
      padding-left: 6px;
    }
    &-item{
      display: inline-block;
      margin: 5px 2px;
      border-radius: 8px;
      padding: 2px;
      background-color: #ffc0cb3b;
      @include ellipsis();
    }
    &-container{
      margin: 8px;
    }
    &-headpic{
      margin: 0 3px;
      width: 15px;
      border-radius:5px;
    }
    &-name{
      font-size: $font-size-base;
    }
    &-content{
      margin: 8px 0;
      font-size: $font-size-base;
      font-weight: 600;
    }
    &-time,&-product{
      font-size: 1px;
      font-weight: 200;
    }
  }
</style>
