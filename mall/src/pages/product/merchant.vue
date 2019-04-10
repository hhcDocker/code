<template>
    <div class="merchant">
      <img :src="data.shopIcon" alt="" class="merchant-headicon">
      <div class="merchant-content">
        <span class="merchant-name">{{data.fbt2User}}</span>
        <img :src="data.creditLevelIcon" alt="" class="merchant-creditLevelIcon">
      </div>
      <ul class="merchant-list">
        <li class="merchant-item" v-for="(item, index) in data.evaluates" :key="index">{{item.title}} {{item.score}}</li>
      </ul>
    </div>
</template>

<script>
  export default {
    name: 'merchant',
    props: {
      data: {
        type: Object,
        default() {
          return {};
        }
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
.merchant{
  padding: 6px;
  &-headicon{
    width: 40px;
  }
  &-content{
    padding: 5px;
    display: inline-block;
  }
  &-name{
    font-size: 13px;
  }
  &-creditLevelIcon{
    padding-top: 3px;
    display: block;
    width: 30px;
  }
  &-list{
    padding: 10px 30px;
    @include flex-between();
  }
}
</style>
