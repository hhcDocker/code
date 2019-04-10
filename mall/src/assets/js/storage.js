const storage = window.localStorage;

export default {
  set(key, val) {
    if (val === undefined) {
      return;
    }
    storage.setItem(key, serialize(val)); // 将serialize(val)存储在key字段
  },
  get(key, def) { // 反序列化
    const val = deserialize(storage.getItem(key));
    return val === undefined ? def : val;
  },
  remove(key) {
    storage.removeItem(key);// 删除指定key本地存储的值
  },
  clear() {
    storage.clear();// 清除所有的key/value
  }
};

function serialize(val) {
  return JSON.stringify(val); // 将json对象转成字符串
}

function deserialize(val) {
  if (typeof val !== 'string') {
    return undefined;
  }
  try {
    return JSON.parse(val);// 将字符串转成json对象
  } catch (e) {
    return val || undefined;
  }
}
