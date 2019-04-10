<template>
    <div class="nav">
      <ul class="nav-list">
        <li
          class="nav-item"
          v-for="(item, index) in navList"
          :key="index">
          <a href="item.linkUrl" class="nav-link">
            <img :src="item.picUrl" alt="" class="nav-img">
            <span class="nav-text">{{item.text}}</span>
          </a>
        </li>
      </ul>
    </div>
</template>

<script>
  import {navItems} from './config';
  export default {
    name: 'HomeNav',
    created() {
      this.navList = navItems;
    }
  };
</script>

<style lang="scss" scoped>
  @import "~assets/scss/mixins";
  .nav{
    width: 100%;
    padding-top: 15px;
    background-color: #fff;
   &-list{
      display: flex;
      flex-wrap: wrap; /*多出部分换行*/
      }
   &-item{
     width: 20%;
     margin-bottom: 10px;
     }
   &-link{
    @include flex-center(column)
     }
   &-img{
     width: 60%;
     margin-bottom: 5px;
     }
  }
</style>
