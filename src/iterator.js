// function makeIterator (arr) {
//   let nextIndex = 0;
//   // 返回一个迭代器
//   return {
//     next: () => {
//       // next()方法还会的结果对象
//       if (nextIndex < arr.length) {
//         return {value: arr[nextIndex++], done: false}
//       } else {
//         return {done: true}
//       }
//     }
//   }
// }
// // 迭代器总有一个next方法，next总会返回一个对象，包括当前状态
// const it = makeIterator(['吃饭', '睡觉', '打豆豆']);
// console.log('首先', it.next().value)
// console.log('其次', it.next().value)
// console.log('然后', it.next().value)
// console.log('最后', it.next().done)


// *生成器的作用就是简化，我们创建迭代器的过程
// function*关键字可以在表达式内部定义一个生成器函数。
function *makeIterator (arr) {
  for(let i = 0; i < arr.length; i++) {
    yield arr[i] // 定义通过迭代器协议从生成器函数返回的值。如果省略，则返回undefined。
    // 返回传递给生成器的next()方法的可选值，以恢复其执行。
    /**
      yield关键字使生成器函数执行暂停，yield关键字后面的表达式的值返回给生成器的调用者。它可以被认为是一个基于生成器的版本的return关键字。

      yield关键字实际返回一个IteratorResult对象，它有两个属性，value和done。value属性是对yield表达式求值的结果，而done是false，表示生成器函数尚未完全完成。

      一旦遇到 yield 表达式，生成器的代码将被暂停运行，直到生成器的 next() 方法被调用。每次调用生成器的next()方法时，生成器都会恢复执行，直到达到以下某个值：

      yield，导致生成器再次暂停并返回生成器的新值。 下一次调用next()时，在yield之后紧接着的语句继续执行。
      throw用于从生成器中抛出异常。这让生成器完全停止执行，并在调用者中继续执行，正如通常情况下抛出异常一样。
      到达生成器函数的结尾；在这种情况下，生成器的执行结束，并且IteratorResult给调用者返回undefined并且done为true。
      到达return 语句。在这种情况下，生成器的执行结束，并将IteratorResult返回给调用者，其值是由return语句指定的，并且done 为true。
      如果将可选值传递给生成器的next()方法，则该值将成为生成器当前yield操作返回的值。

      在生成器的代码路径中的yield运算符，以及通过将其传递给Generator.prototype.next()指定新的起始值的能力之间，生成器提供了强大的控制力。
    */
  }
}

const gen = makeIterator(['吃饭', '睡觉', '打豆豆']);
console.log('首先', gen.next().value)
console.log('其次', gen.next().value)
console.log('然后', gen.next().value)
console.log('最后', gen.next().done)

