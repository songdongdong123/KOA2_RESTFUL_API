const fs = require('fs');
// 老式的回调函数形式
// fs.readFile('./package.json',(err, data) => {
//   if (err) return console.log(err)
//   data = JSON.parse(data)
//   console.log(data.name)
// })

// promise形式
// function readFileAsync (path) {
//   return new Promise((resolve, reject) => {
//     fs.readFile(path,(err, data) => {
//       if (err) reject(err)
//       else resolve(data)
//     })
//   })
// }
// readFileAsync('./package.json').then(data => {
//   data = JSON.parse(data)
//   console.log(data.name)
// }).catch(err => {
//   console.log(err)
// })


// 引入util包 promisify返回一个promise函数
const util = require('util');
util.promisify(fs.readFile)('./package.json').then(JSON.parse).then(data => {
  console.log(data.name)
}).catch(err => {
  console.log(err)
})
