<template>
  <div class="recommend">
    <h3 class="recommend-title">热卖推荐</h3>
    <div class="loading-container" v-if="!recommend.length">
      <loading inline></loading>
    </div>
    <ul class="recommend-list" v-else>
      <li
          class="recommend-item"
          v-for="(item,index) in recommend"
          :key ="index"
          :price="item.price.actPrice"
          :count="item.remind.soldCount"
          @click="transmit(item)"
      >
        <router-link
          class="recommend-link"
          to = "/home/Home-Product"
        >
          <p class="recommend-pic"><img class="recommend-img" v-lazy="item.baseinfo.picUrl" alt=""></p>
          <p class="recommend-name">{{item.name.shortName}}</p>
          <p class="recommend-origPrice"><del>¥{{item.price.origPrice}}</del></p>
          <p class="recommend-info">
            <span class="recommend-price">¥<strong class="recommend-price-num">{{item.price.actPrice}}</strong></span>
            <span class="recommeng-count">{{item.remind.soldCount}}件已售</span>
          </p>
        </router-link>
      </li>
    </ul>
  </div>

</template>

<script>
  //
  import {getHomeRecommend} from 'api/home';
  import loading from 'base/loading';
  export default {
    name: 'HomeRecommend',
    components: {
      loading
    },
    data() {
      return {
        recommend: [],
        curPage: 1,
        totalPage: 1
      };
    },
    created() {
      this.getRecommend();
    },
    methods: {
      transmit(item) {
        // console.log(item);
        this.$router.push({name: 'Home-Product', params: {id: item.baseinfo.itemId, price: item.price.actPrice, count: item.remind.soldCount}});
      },
      update() {
        return this.getRecommend();
      },

      getRecommend() {
        if (this.currentPage > this.totalPage) {
          return Promise.reject(new Error('没有更多了'));
        } ;
        return getHomeRecommend(this.curPage).then(data => {
          return new Promise(resolve => {
            if (data === undefined) {
              return;
            } ;
            this.totalPage = data.totalPage;
            this.curPage++;
            this.recommend = this.recommend.concat(data.itemList);
            console.log(this.recommend);
            this.$emit('reLoad', this.recommend);// 触发更新滚动棒事件，并传出this。recommend参数
            resolve();
          });
        });
      }
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
.recommend{
  width: 100%;
  &-title{
    position: relative;
    width: 100%;
    padding: 0 10px;
    font-size: $font-size-l;
    text-align: center;
    &:after,&:before{
      content: '';
      position: absolute;
      width: 40%;
      height: 1px;
      top: 50%;
      background-color: #ddd;
    }
    &:before{
      left: 0;
    }
    &:after{
      right: 0;
    }
  }
  &-list{
    @include flex-between();
    width: 100%;
    flex-wrap: wrap;
  }
  &-item{
  width: 49%;
    background-color: #fff;
    box-shadow: 0 1px 1px 0 rgba(0,0,0,.12);
    margin-bottom: 8px;
  }
  &-link{
    display: block;
  }
  &-pic{
    width: 100%;
    padding-top: 100%;
    position: relative;
    margin-bottom: 5px;
  }
  &-img{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &-name{
    height: 36px;
    padding:0 5px;
    margin-bottom: 8px;
    line-height: 1.5;
    @include multiline-ellipsis();//两行超出显示省略号
  }
  &-origPrice{
    padding: 0 5px;
    margin-bottom: 8px;
    color: #ccc;
  }
  &-info{
    @include flex-between();
    padding:0 5px;
    margin-bottom: 8px;
  }
  &-price {
    color: #e61414;
  }

  &-price-num {
    font-size: 20px;
  }

  &-count {
    color: #999;
  }
}
  .loading-container{
    padding-top: 100px;
  }
</style>
