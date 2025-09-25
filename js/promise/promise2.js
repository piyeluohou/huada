const p = Promise.resolve(1);

p.then((value) => {
  throw new Error("oops");
}).then(
  (v) => console.log("成功", v),
  (err) => console.log("失败", err.message)
);
