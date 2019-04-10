<template>
  <div class="hot">
    <h4 class="hot-title">热门搜索</h4>
    <div class="loading-container" v-if="!hots.length">
      <me-loading/>
    </div>
    <ul class="hot-list" v-else>
      <li
        class="hot-item"
        v-for="(item, index) in hots"
        :key="index"
        @click="$_selectItem(item.hotWord)"
      >{{item.hotWord}}</li>
    </ul>
  </div>
</template>

<script>
  import MeLoading from 'base/loading';
  import {getSearchHotKeyword} from 'api/search';
  import {searchMixin} from 'assets/js/mixin';

  export default {
    name: 'SearchHot',
    components: {
      MeLoading
    },
    mixins: [searchMixin],
    data() {
      return {
        hots: []
      };
    },
    created() {
      this.getHotKeyword().then(() => { // 成功后传出已加载
        this.$emit('loaded');
      });
    },
    methods: {
      getHotKeyword() { // 获取数据
        return getSearchHotKeyword().then(data => {
          return new Promise(resolve => {
            if (data) { // 取得数据，决议为成功
              this.hots = data;
              console.log(this.hots.length);
              resolve();
            }
          });
        });
      }
      // ,
      // selectItem(keyWord) {
      //   let hotword = storage.get(SEARCH_HISTORY_KEYWORD_KEY, []); // 取得历史记录
      //   if (hotword.length !== 0) { hotword = hotword.filter(value => value !== keyWord); } // 如果不为空，则过滤keyWord
      //   hotword.unshift(keyWord);// 从数据的开头插入元素
      //   storage.set(SEARCH_HISTORY_KEYWORD_KEY, hotword); // 重新设置localstorage
      //   //跳转第三方页面
      //   location.href = `https://s.m.taobao.com/h5?event_submit_do_new_search_auction=1&_input_charset=utf-8&topSearch=1&atype=b&searchfrom=1&action=home%3Aredirect_app_action&from=1&sst=1&n=20&buying=buyitnow&q=${keyWord}`
      // }

    }
  };
</script>

<style lang="scss" scoped>
@import "~assets/scss/mixins";

  .hot {
    padding-left: 10px;
    background-color: #fff;
    border-bottom: 1px solid $border-color;
    margin-bottom: 10px;

    &-title {
      height: 34px;
      line-height: 34px;
      font-size: $font-size-l;
      font-weight: bold;
    }

    &-list {
      display: flex;
      flex-wrap: wrap;
    }

    &-item {
      padding: 8px;
      background-color: #f0f2f5;
      border-radius: 4px;
      margin: 0 10px 10px 0;
      color: #686868;
    }
  }

  .loading-container {
    padding: 10px 0;
  }
</style>
