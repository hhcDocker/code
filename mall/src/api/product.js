import {Jsonp_Options} from './config';
import jsonp from 'assets/js/jsonp';

export const getData = id => {
  const url = 'https://unszacs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/';
  const params = {
    api: 'mtop.taobao.detail.getdetail',
    ttid: '2017%40taobao_h5_6.6.0',
    data: `%7B"itemNumId"%3A"${id}"%7D"`,
    appKey: 12574478,
    dataType: 'jsonp',
    type: 'jsonp',
    v: 6.0
  };
  return jsonp(url, params, Jsonp_Options).then(res => {
    res = res.data;
    console.log(res);
    if (res.item) {
      // console.log(res.data);
      // console.log(res.data.item);
      // console.log(typeof (res.data.item));
      const apiStack = res.apiStack[0].value;// 非json类型
      // console.log(apiStack);
      let data = JSON.parse(apiStack);// 转成json格式
      console.log(data);
      let params = {};
      params.address = data.delivery.from;// 地址
      params.postage = data.delivery.postage;// 快递说明
      params.sellCount = data.item.sellCount;// 销售数量

      params.title = res.item.title;// 标题
      params.images = res.item.images;// 图片
      params.keywords = res.rate.keywords;// 主要评论
      params.commentCount = res.rate.totalCount;// 评论数量
      params.commentContent = res.rate.rateList[0].content;// 评论内容
      params.commentTime = res.rate.rateList[0].dateTime;// 评论时间
      params.commentHeadpic = res.rate.rateList[0].headPic;// 评论者头像
      params.commentName = res.rate.rateList[0].userName;// 评论者昵称
      params.commentSkuInfo = res.rate.rateList[0].skuInfo;// 评论者购买项目

      params.fbt2User = res.seller.fbt2User;// 卖家名称
      params.shopIcon = res.seller.shopIcon;// 卖家头像
      params.creditLevelIcon = res.seller.creditLevelIcon; // 卖家平台
      params.evaluates = res.seller.evaluates; // 卖家总体评价
      return params;
    }
    throw new Error('没有成功获取到数据');// 处理错误
  }).catch(err => { // 捕捉错误
    if (err) {
      console.log(err);
    }
  });
};
