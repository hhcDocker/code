<template>
  <swiper :options="swiperOption" :key="keyId">
    <slot></slot>
    <div class="swiper-pagination" v-if="pagination" slot="pagination"></div>
  </swiper>

</template>

<script>
  import {swiper} from 'vue-awesome-swiper';
  export default {
    name: 'MeSlider',
    components: {
      swiper
    },
    props: { // 父组件要传递的参数
      direction: { // 轮播方向
        type: String,
        default: 'horizontal',
        validator(value) {
          return ['horizontal', 'vertical'].indexOf(value) > -1;
        }
      },
      interval: { // 自动轮播时间间距
        type: Number,
        default: 3000,
        validator(value) {
          return value >= 0;
        }
      },
      loop: { // 无缝滚动
        type: Boolean,
        default: true
      },
      pagination: { // 分页器
        type: Boolean,
        default: true
      },
      data: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    watch: {
      data(newData) {
        if (newData.length === 0) return;
        this.keyId = Math.random();
        this.swiperOption.loop = newData.length === 1 ? false : this.loop;
      }
    },
    data() {
      return {
        keyId: Math.random()
      };
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        this.swiperOption = {
          watchOverflow: true, // 只有一个slide（非loop），swiper会失效且隐藏导航等
          direction: this.direction,
          autoplay: this.interval ? {
            delay: this.interval,
            disableOnInteraction: false //  slide被点击时不会停止轮播效果
          } : false,
          slidesPerView: 1, //  设置slider容器能够同时显示的slide数量
          loop: this.data.length <= 1 ? false : this.loop,
          pagination: {
            el: this.pagination ? '.swiper-pagination' : null
          }
        };
      }
    }
  };
</script>

<style lang="scss" scoped>
  .swiper-container{
    height: 100%;
    width: 100%;
  }

</style>
