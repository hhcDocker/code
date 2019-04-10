<template>
    <div class="home">
      <header class="g-header-container">
        <home-header :class="{'header-transition': isHeaderTransition}" ref="header"/>
      </header>
      <me-scroll
        :data="recommend"
        pullDown
        pullUp
        @pull-down="pullToRefresh"
        @pull-up="pullToLoadMore"
        @scroll-end="scrollEnd"
        @scroll="scroll"
        @pull-down-transition-end="pullDownTransitionEnd"
        ref="scroll"

      >
        <home-slider ref="slider" />
        <home-nav/>
        <home-recommend @reLoad="getRecommend" ref="recommend"></home-recommend>
      </me-scroll>
      <div class="g-backtop-container">
        <me-backtop :visible="isBacktoVisible" @backtop="backToTop"></me-backtop>
      </div>
      <router-view></router-view>
    </div>
</template>

<script>
  import HomeHeader from './home-header';
  import HomeSlider from './slider';
  import HomeNav from './nav';
  import HomeRecommend from './recommend';
  import MeScroll from 'base/scroll';
  import MeBacktop from 'base/backtop';
  import {HEADER_TRANSITION_HEIGHT} from './config';

  export default {
    name: 'Home',
    data() {
      return {
        recommend: [],
        isBacktoVisible: false,
        isHeaderTransition: false
      };
    },
    components: {
      HomeHeader,
      HomeSlider,
      HomeNav,
      HomeRecommend,
      MeScroll,
      MeBacktop
    },
    methods: {
      upDateScroll() {

      },
      getRecommend(recommend) { // 别忘了传参数
        this.recommend = recommend;// 接收从子组件传过来的参数recommend
      },
      pullToRefresh(end) {
        this.$refs.slider.update().then(end());
        // setTimeout(() => {
        //   console.log('下拉刷新');
        //   end();
        // }, 1000);
      },
      pullToLoadMore(end) {
        this.$refs.recommend.update().then(end()).catch(error => {
          if (error) {
            console.log(error);
            end();
          }
        });
        // setTimeout(() => {
        //   console.log('上拉加载更多');
        //   end();
        // }, 1000);
      },
      scrollEnd(swiper, translate, pulling) {
        this.isBacktoVisible = swiper.height < -translate && translate < 0;// 滑到底部让backtop显示
        if (!pulling) this.changeHeaderStatus(translate);
      },
      backToTop() {
        this.$refs.scroll && this.$refs.scroll.scrollToTop();
      },
      changeHeaderStatus(translate) {
        if (translate > 0) {
          this.$refs.header.hide();
          return;
        }
        this.$refs.header.show();
        this.isHeaderTransition = -translate > HEADER_TRANSITION_HEIGHT;
      },
      scroll(translate) {
        this.changeHeaderStatus(translate);
      },
      pullDownTransitionEnd() {

      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";

  .home{
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: $bgc-theme;
  }
</style>
