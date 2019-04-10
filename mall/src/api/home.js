// 与接口相关的函数设置
import axios from 'axios';
import { Success_code, Time_Out, Home_Recommend_Page_Size, Jsonp_Options } from './config';
import jsonp from 'assets/js/jsonp';

// 打乱数组
const shuffle = arr => {
  const arrlength = arr.length;
  let i = arrlength;
  let rndNum;
  while (i--) {
    if (i !== (rndNum = Math.floor(Math.random() * arrlength))) {
      [arr[i], arr[rndNum]] = [arr[rndNum], arr[i]];
    }
  }
  return arr;
};
// 获取幻灯片数据--ajax,定义获取数据函数
export const getHomeSlider = () => {
  return axios.get('http://www.imooc.com/api/home/slider', {
    timeout: Time_Out // 设置延迟时间
  }).then(res => {
    if (res.data.code === Success_code) {
      // console.log(res.data.slider);
      let sliders = res.data.slider;
      const slider = [sliders[Math.floor(Math.random() * sliders.length)]];// 随机取出其中之一
      sliders = shuffle(sliders.filter(() => Math.random() > 0.5)); // 没有传入值，但箭头函数如果返回真，即该元素符合条件
      if (sliders.length === 0) {
        sliders = slider;
      }
      // console.log(sliders);
      return sliders;
    }
    throw new Error('没有成功获取到数据'); // 处理错误
  }).catch(err => { // 捕捉错误
    if (err) {
      console.log(err);
    }
    // 处理错误
    return [
      {
        'linkUrl': 'https://www.imooc.com',
        'picUrl': require('assets/img/404.png')
      }
    ];
  });
};
// 获取热门推荐数据--jsonp
export const getHomeRecommend = (page = 1, psize = Home_Recommend_Page_Size) => {
  const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
  const params = {
    page,
    psize,
    type: 0,
    frontCatId: ''
  };
  return jsonp(url, params, Jsonp_Options).then(res => {
    // console.log(res)
    if (res.code === '200') {
      return res;
    }
    throw new Error('没有成功获取到数据');// 处理错误
  }).catch(err => { // 捕捉错误
    if (err) {
      console.log(err);
    }
  });
};
