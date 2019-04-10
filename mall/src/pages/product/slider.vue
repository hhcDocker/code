<template>
    <div>
     <me-slider
       :direction="direction"
       :loop="loop"
       :interval="interval"
       :pagination="pagination"
     >
       <swiper-slide
         v-for="item in sliders"
         :key="item"
       >
         <img :src="item" alt="" class="slider-img">
       </swiper-slide>
     </me-slider>
    </div>
</template>

<script>
  import MeSlider from 'base/slider';
  import {sliderOptions} from './config';
  import {swiperSlide} from 'vue-awesome-swiper';
  export default {
    name: 'slider',
    props: {
      sliders: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      MeSlider,
      swiperSlide
    },
    data() {
      return {
        direction: sliderOptions.direction,
        loop: sliderOptions.loop,
        interval: sliderOptions.interval,
        pagination: sliderOptions.pagination
      };
    }
  };
</script>

<style lang="scss" scoped>
.slider-img{
  width: 100%;
  height: 300px;
}
</style>
