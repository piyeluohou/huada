Promise.resolve(1)
  .then((res) => {
    console.log(3333);

    return res + 1;
  }) // 返回普通值
  .then((res) => {
    console.log(4444);

    return res + 1;
  }) // 返回普通值
  .then((res) => {
    throw new Error("出错1");
  }) // 抛出错误
  .then((res) => {
    console.log(55555);

    return res + 1;
  }) // 返回普通值
  .catch((err) => console.log(err.message)) // 错误冒泡到这里
  .then((res) => Promise.resolve(res + 1)) // 返回 Promise
  .then((res) => {
    throw new Error("出错2");
  }) // 抛出错误
  .catch((err) => console.log(err.message)); // 错误冒泡到这里
