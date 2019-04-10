import axios from 'axios';
import {Success_code, Time_Out} from './config';
const CancelToken = axios.CancelToken;
let Cancel;
export const getCategoryContent = (id) => {
  Cancel && Cancel('取消前一次的请求');
  Cancel = null;
  return axios.get(`http://www.imooc.com/api/category/content/${id}`, {
    timeout: Time_Out, // 设置延迟时间
    cancelToken: new CancelToken(function executor(c) {
      Cancel = c;
    })
  }).then(res => {
    if (res.data.code === Success_code) {
      console.log(res.data.content);
      return res.data.content;
    }
    throw new Error('没有成功获取到数据'); // 处理错误
  }).catch(err => { // 捕捉错误
    if (axios.isCancel(err)) {
      console.log(err);
    } else {
      console.log(err);
    }
  });
};
