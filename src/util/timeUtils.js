/*
* 时间操作工具库
* */

/**
 * 计算时间类
 * @param {d1}: 需要计算的时间
 */
export default function friendlyTimeFormat(d) {
  if (!d) {
    window.console.error('输入时间出错');
    return;
  }
  let str = '';

  /* 转化成毫秒数时间戳 */
  const d1 = d.getTime();
  /* 当前时间的毫秒数 */
  const d2 = new Date().getTime();

  const now = new Date();

  /* 判断是否是同一天 */
  if (d.getMonth() === now.getMonth() && d.getDate() === now.getDate()) {
    const hour = (d2 - d1) / 3600000;
    /* 一小时以内 */
    if (Math.floor(hour) === 0) {
      /* 一分钟以内 */
      if (Math.floor((d2 - d1) / 60000) === 0) {
        str = '刚刚';
      } else {
        str = `${Math.floor((d2 - d1) / 60000)}分钟前`;
      }
    } else {
      /* 一小时以后 */
      str = `${Math.floor(hour)}小时前`;
    }
  } else {
    /* 相距的天数 */
    const day = (d2 - d1) / 86400000;

    if (Math.floor(day) < 7) {
      /* 一周以内 */
      str = `${Math.floor(day)}天之前`;
    } else if (Math.floor(day) >= 7 && Math.floor(day) <= 30) {
      /* 一周之外一月之内 */
      str = `${Math.floor(day / 7)}周之前`;
    } else if (Math.floor(day) > 30 && Math.floor(day) < 365) {
      /* 一个月之外一年之内 */
      str = `${Math.floor(day / 30)}月之前`;
    } else {
      /* 一年之后 */
      str = `${Math.floor(day / 365)}年之前`;
    }
  }

  return str;
}
