<template>
    <swiper :options="swiperOption" ref="swiper">
      <div class="mine-scroll-pull-down" v-if="pullDown">
        <me-loading inline :text="pullDownText" ref="pullDownLoading"></me-loading>
      </div>
      <!--里面放置滑块的内容-->
      <div class="swiper-slide">
        <!--父组件传过来的内容-->
        <slot></slot>
      </div>
      <div class="mine-scroll-pull-up" v-if="pullUp">
        <me-loading inline :text="pullUpText" ref="pullUpLoading"></me-loading>
      </div>
      <div class="swiper-scrollbar" v-if="scrollbar" slot="scrollbar"></div>
    </swiper>
</template>

<script>
  import {swiper, swiperSlide} from 'vue-awesome-swiper';
  import MeLoading from 'base/loading';
  import {
    PULL_DOWN_HEIGHT,
    PULL_DOWN_TEXT_INIT,
    PULL_DOWN_TEXT_START,
    PULL_DOWN_TEXT_ING,
    PULL_DOWN_TEXT_END,

    PULL_UP_HEIGHT,
    PULL_UP_TEXT_INIT,
    PULL_UP_TEXT_START,
    PULL_UP_TEXT_ING,
    PULL_UP_TEXT_END
  } from './config';
  export default {
    name: 'MeScroll',
    components: {
      swiper,
      swiperSlide,
      MeLoading
    },
    props: { // 父组件传过来的参数通过props来接收，子组件传过来的需要用methods里定义函数来接收
      scrollbar: {
        type: Boolean,
        default: true
      },
      data: {
        type: [Array, Object]
      },
      pullDown: {
        type: Boolean,
        default: false
      },
      pullUp: {
        type: Boolean,
        default: false
      }
    },
    watch: {
      data() { // 当从父组件传过来的data有变化时，触发函数
        this.update();
      }
    },
    methods: {
      update() { // 外部使用api
        // console.log(this.$refs.swiper);
        this.$nextTick(() => {
          this.$refs.swiper && this.$refs.swiper.swiper.update();
        });
      },
      scrollToTop(speed, runCallbacks) {
        this.$refs.swiper && this.$refs.swiper.swiper.slideTo(0, speed, runCallbacks);
      },
      // 内部使用api
      scroll() {
        const swiper = this.$refs.swiper.swiper;
        this.$emit('scroll', swiper.translate, swiper);

        if (this.pulling) return;
        if (swiper.translate > 0) { // 下拉
          if (!this.pullDown) return;
          if (swiper.translate > PULL_DOWN_HEIGHT) {
            // this.pullDownText = '111';    //传值会造成页面重新渲染，导致闪屏
            this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_START);
          } else {
            this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_INIT);
          }
        } else if (swiper.isEnd) { // 是否到达底部
          if (!this.pullUp) return;
          // console.log(swiper.height);
          const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > parseInt(swiper.$wrapperEl.css('height'));
          if (isPullUp) {
            this.$refs.pullUpLoading.setText(PULL_UP_TEXT_START);
          } else {
            this.$refs.pullUpLoading.setText(PULL_UP_TEXT_INIT);
          }
        }
      },
      scrollEnd() {
        this.$emit('scroll-end', this.$refs.swiper.swiper, this.$refs.swiper.swiper.translate, this.pulling);
      },

      touchEnd() {
        const swiper = this.$refs.swiper.swiper;
        if (this.pulling) return;
        if (swiper.translate > PULL_DOWN_HEIGHT) { // 超出下拉高度，执行代码
          if (!this.pullDown) return;
          this.pulling = true;
          swiper.allowTouchMove = false;// 禁止触摸
          swiper.setTransition(swiper.params.speed); // 设置速度
          swiper.setTranslate(PULL_DOWN_HEIGHT); // 回拉高度
          swiper.params.virtualTranslate = true; // 定住不给回弹
          this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_ING); // 设置文字
          this.$emit('pull-down', this.pullDownEnd); // 触发下拉刷新事件，传回刷新完成事件
        } else if (swiper.isEnd) {
          const totalHeight = parseInt(swiper.$wrapperEl.css('height'));
          const isPullUp = Math.abs(swiper.translate) + swiper.height - PULL_UP_HEIGHT > totalHeight;
          if (isPullUp) { // 满足上拉要求
            if (!this.pullUp) return;
            // console.log('jimwhile');
            this.pulling = true;
            swiper.allowTouchMove = false;// 禁止触摸
            swiper.setTransition(swiper.params.speed); // 设置速度
            swiper.setTranslate(-(totalHeight - swiper.height + PULL_UP_HEIGHT)); // 回拉高度
            swiper.params.virtualTranslate = true; // 定住不给回弹
            this.$refs.pullUpLoading.setText(PULL_UP_TEXT_ING); // 设置文字
            this.$emit('pull-up', this.pullUpEnd); // 触发下拉刷新事件，传回刷新完成事件
          }
        }
      },
      pullDownEnd() { // 下拉到底
        this.pulling = false;
        const swiper = this.$refs.swiper.swiper;
        swiper.allowTouchMove = true;// 允许触摸
        swiper.setTransition(swiper.params.speed); // 设置速度
        swiper.params.virtualTranslate = false; // 允许回弹
        swiper.setTranslate(0); // 回拉高度
        this.$refs.pullDownLoading.setText(PULL_DOWN_TEXT_END);
        setTimeout(() => {
          this.$emit('pull-down-transition-end');
        }, swiper.params.speed);
      },
      pullUpEnd() { // 上拉到底
        this.pulling = false;
        const swiper = this.$refs.swiper.swiper;
        swiper.allowTouchMove = true;// 允许触摸
        swiper.params.virtualTranslate = false; // 允许回弹
        this.$refs.pullUpLoading.setText(PULL_UP_TEXT_END);
      },
      init() {
        this.pulling = false;
        this.pullDownText = PULL_DOWN_TEXT_INIT;
        this.pullUpText = PULL_UP_TEXT_INIT;
        this.swiperOption = {
          direction: 'vertical', // 滑动方向为垂直方向
          slidesPerView: 'auto', // 可视窗口可浏览的图片数。自适应
          freeMode: true, // 自由滚动距离
          setWrapperSize: true, // 设置滑页高度尺寸
          scrollbar: {
            el: this.scrollbar ? '.swiper-scrollbar' : null,
            hide: true // 是否自动隐藏
          },
          on: {
            sliderMove: this.scroll,
            touchEnd: this.touchEnd,
            transitionEnd: this.scrollEnd
          }

        };
      }

    },
    created() {
      this.init();
    }
  };

</script>

<style lang="scss" scoped>
  .swiper-container{
    width: 100%;
    height: 100%;
    overflow: hidden;

  }
  .swiper-slide{
    height: auto;
  }
  .mine-scroll-pull-down,
  .mine-scroll-pull-up
  {
    position: absolute;
    left: 0;
    width: 100%;
  }
  .mine-scroll-pull-down{
    bottom: 100%;
    height: 80px;
  }
  .mine-scroll-pull-up{
    top: 100%;
    height: 30px;
  }
</style>
