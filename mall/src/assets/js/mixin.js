import storage from 'assets/js/storage';
import {SEARCH_HISTORY_KEYWORD_KEY} from 'pages/search/config';

export const searchMixin = {
  methods: {
    $_selectItem(keyWord) {
      let hotword = storage.get(SEARCH_HISTORY_KEYWORD_KEY, []); // 取得历史记录
      if (hotword.length !== 0) { hotword = hotword.filter(value => value !== keyWord); } // 如果不为空，则过滤keyWord
      hotword.unshift(keyWord);// 从数据的开头插入元素
      storage.set(SEARCH_HISTORY_KEYWORD_KEY, hotword); // 重新设置localstorage
      this.$emit('update-history');
      // 跳转第三方页面
      location.href = `https://s.m.taobao.com/h5?event_submit_do_new_search_auction=1&_input_charset=utf-8&topSearch=1&atype=b&searchfrom=1&action=home%3Aredirect_app_action&from=1&sst=1&n=20&buying=buyitnow&q=${keyWord}`;
    }
  }
};
