const co = require('co');
const fetch = require('node-fetch');

// co用来实现内部每一个暂停的函数，都能够一步一步的执行
// 也就是实现了生成器的自动执行
// co(function *() {
//   const res = yield fetch('https://api.douban.com/v2/movie/1291843'); // yield实现一个函数的暂停，并且返回当前的状态
//   const movie = yield res.json();
//   const summary = movie.summary;
//   console.log(movie);
//   console.log(summary);
// })


// 模拟co内部执行原理
// 由一下代码可以看出，co主要是帮我们自动执行了生成器内部的左右promise链路
// 而co主要解决的问题也是，promise链路太长，而导致代码复杂度过高的问题
function run (generator) {
  const iterator = generator();
  const it = iterator.next();
  const promise = it.value;
  promise.then(data => {
    const it2 = iterator.next(data);
    const promise2 = it2.value;
    promise2.then(data2 => {
      iterator.next(data2)
    })
  })
}

run(function *() {
  const res = yield fetch('https://api.douban.com/v2/movie/1291843'); // yield实现一个函数的暂停，并且返回当前的状态
  const movie = yield res.json();
  const summary = movie.summary;
  console.log(movie);
  console.log(summary);
})