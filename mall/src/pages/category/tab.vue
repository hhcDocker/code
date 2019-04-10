<template>
  <me-scroll :scrollbar="false"> <!--滚动条默认不显示,参数不是字符串要加冒号-->
    <ul class="tab">
      <li class="tab-item"
          v-for="(item,index) in items"
          :key="index"
          @click="switchTab(item.id)"
          :class="{'tab-item-active':item.id === curId}"
      >{{item.name}}</li>
    </ul>
  </me-scroll>
</template>

<script>
  import MeScroll from 'base/scroll';
  import {categoryNames} from './config';

  export default {
    name: 'CategoryTab',
    components: {
      MeScroll
    },
    created() {
      this.init();
      this.switchTab(this.items[0].id);
    },
    data() {
      return {
        curId: ''
      };
    },
    methods: {
      init() {
        this.items = categoryNames;
      },
      switchTab(id) {
        // console.log('jimwhile');
        if (this.curId === id) {
          return;
        }
        this.curId = id;
        this.$emit('switch-tab', id); // 触发switch-tab事件，把id参数传出去，便于父组件传给兄弟组件
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  $tab-item-height: 46px;

  .tab {
    width: 100%;

    &-item {
      height: $tab-item-height;
      background-color: #fff;
      border-right: 1px solid $border-color;
      border-bottom: 1px solid $border-color;
      color: #080808;
      font-size: $font-size-l;
      font-weight: bold;
      text-align: center;
      line-height: $tab-item-height;
      @include ellipsis();

      &:last-child {
        border-bottom: none;
      }
    }

    &-item-active {
      background: none;
      border-right: none;
      color: #f23030;
    }
  }
</style>
