// 箭头函数的几种写法
// const arrow = function (param) {};
// const arrow = (param) => {};
// const arrow = param => {};
// const arrow = param => console.log(param);
// const arrow = param => ({param:param});
// const arrow = (param1, param2) => {};
// // {id:1, movie:123}
// const arrow = ({id, movie}) => {console.log(id, movie)}

const luke = {
  id: 2,
  say: function () {
    setTimeout(function () {
      console.log('id:', this.id); // nudefined
    }, 50)
  },
  sayWithThis: function () {
    const _self = this;
    setTimeout(function () {
      console.log('this id:', _self.id); // 2
    }, 500)
  },
  sayWithArrow: function () {
    setTimeout(() => {
      console.log('arrow id:', this.id) // 2
    }, 1000)
  },
  sayWithGlobalArrow: () => {
    // 箭头函数中的this指向定义时候的所属，而不是运行时候的所属
    console.log(this, '...........')
    setTimeout(() => {
      console.log('global arrow id:', this.id) // undefined
    }, 1500)
  }
}
luke.say();
luke.sayWithThis();
luke.sayWithArrow();
luke.sayWithGlobalArrow();