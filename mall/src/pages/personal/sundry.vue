<template>
    <div class="sundry">
      <ul class="sundry-list">
        <li class="sundry-item" v-for="(item,index) in dataArray" :key="index">
          <i :class="item.class"></i>
          <span class="sundry-text">{{item.text}}</span>
          <i class="iconfont icon-back"></i>
        </li>
      </ul>
      <p class="sundry-info-bottom">
        客服热线400-123-8888（8:00-22:00）<br />
        拨打前请记录您的UID 0
      </p>
    </div>
</template>

<script>
  export default {
    name: 'sundry',
    data() {
      return {
        dataArray: [{
          class: 'iconfont icon-bangzhushouhoufuwu',
          text: '售后服务'
        }, {
          class: 'iconfont icon-yijianfankui',
          text: '意见反馈'
        }, {
          class: 'iconfont icon-shouhuodizhi',
          text: '收货地址'
        }, {
          class: 'iconfont icon-tuichudenglu',
          text: '退出登录'
        }, {
          class: 'iconfont icon-huaban',
          text: '400-123-8888'
        }]
      };
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
.sundry{
  margin-top: 20px;
  &-item{
    position: relative;
    height: 68px;
    margin-bottom: 2px;
    display: flex;
    align-items: center;
    background-color: #fff;
    font-size: $font-size-l;
  }
  &-text{
    padding-left: 10px;
    font-weight: 800;
  }
  &-info-bottom{
    margin: 20px auto 5px 20px;
    font-size: $font-size-base;
    font-weight: 300;
  }
}
  .iconfont{
    font-size: $icon-font-size;
  }
  .icon-back{
   position: absolute;
   top: 50%;
    transform: translateY(-50%);
   right: 10px;
  }
</style>
