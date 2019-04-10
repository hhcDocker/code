// 发送的数据在这里进行处理
import jsonp from 'jsonp';
// 要发送的数据在这里进行处理
const parseParam = param => { // param即data参数：{page：1，psize：20}
  let params = [];
  for (const key in param) {
    params.push([key, param[key]]); // params:[[page，1],[psize，20]]
  }
  return params.map(value =>
    value.join('=')
  ).join('&'); // join方法从二维数组内层开始处理
};

export default (url, data, options) => { // 请求数据  ，默认暴露出去的参数
  url += (url.indexOf('?') < 0 ? '?' : '&') + parseParam(data); // 要发送的数据
  return new Promise((resolve, reject) => { // 要返回一个promise对象，异步里处理的是jsonp这个方法
    jsonp(url, options, (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
        // console.log('jim');
      }
    });
  });
};
