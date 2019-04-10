<template>
    <div class="info">
      <p class="product-info">
        <span class="product-price">¥<strong class="product-price-num">{{price}}</strong></span>
        <span class="product-count">{{count}}件已售</span>
      </p>
    </div>
</template>

<script>
  export default {
    name: 'info',
    props: {
      price: {
        type: String,
        default: ''
      },
      count: {
        type: Number,
        default: null
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .product{
    &-info{
      padding: 0 10px;
      height: 50px;
      background: -webkit-linear-gradient(left,#FF697A,orange);
      @include flex-between();
    }
    &-price-num{
      font-size: 20px;
    }
    &-count{
      padding: 5px;
      background-color:#e61414;
    }
  }
</style>
