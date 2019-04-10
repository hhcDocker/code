<template>
  <transition name="product">
    <div class="product">
      <header class="g-header-container">
        <pro-header></pro-header>
      </header>
      <me-scroll>
        <me-loading v-if="!sliders.length"></me-loading>
        <pro-slider :sliders="sliders" v-if="sliders.length"></pro-slider>
        <pro-info :price="price" :count="count"></pro-info>
        <me-loading v-if="!postage"></me-loading>
        <pro-synopsis
          :title="title"
          :postage="postage"
          :sellCount="sellCount"
          :address="address"
          v-if="postage"
        ></pro-synopsis>
        <pro-comment
          :commentCount="commentCount"
          :keywords="keywords"
          :commentHeadpic="commentHeadpic"
          :commentName="commentName"
          :commentSkuInfo="commentSkuInfo"
          :commentTime="commentTime"
          :commentContent="commentContent"
          v-if="postage"
        >
        </pro-comment>
        <pro-merchant :data="data" v-if="postage"></pro-merchant>
      </me-scroll>
      <pro-footer></pro-footer>
    </div>
  </transition>
</template>

<script>
  import proHeader from './header';
  import proSlider from './slider';
  import proInfo from './info';
  import proSynopsis from './synopsis';
  import proComment from './comment';
  import proMerchant from './merchant';
  import proFooter from './footer';
  import meScroll from 'base/scroll';
  import meLoading from 'base/loading';

  import {getData} from 'api/product';
  export default {
    name: 'index',
    props: {},
    components: {
      proHeader,
      proSlider,
      proInfo,
      proSynopsis,
      proComment,
      proMerchant,
      proFooter,
      meScroll,
      meLoading
    },
    data() {
      return {
        data: {},
        id: this.$route.params.id,
        price: this.$route.params.price,
        count: this.$route.params.count,
        sliders: [],
        title: '',
        postage: '',
        sellCount: '',
        address: '',
        commentCount: '',
        keywords: [],
        commentHeadpic: '',
        commentName: '',
        commentSkuInfo: '',
        commentTime: '',
        commentContent: ''
      };
    },
    created() {
      this.getDatas(this.id);
    },
    methods: {
      getDatas(id) {
        return getData(id).then(data => {
          this.sliders = data.images;
          this.title = data.title;
          this.postage = data.postage;
          this.sellCount = data.sellCount;
          this.address = data.address;

          this.commentCount = data.commentCount;
          this.keywords = data.keywords;

          this.commentHeadpic = data.commentHeadpic;
          this.commentName = data.commentName;
          this.commentSkuInfo = data.commentSkuInfo;
          this.commentTime = data.commentTime;
          this.commentContent = data.commentContent;
          this.data = data;
          console.log(this.data);
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
.product{
  overflow: hidden;
  z-index: $product-z-index;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: $bgc-theme;
  padding-bottom: 50px;
}
  .product-enter-active,
  .product-leave-active{
    transition: all 0.3s;
  }
  .product-enter,
  .product-leave-to{
    transform: translate3d(100%, 0, 0);
  }
</style>
