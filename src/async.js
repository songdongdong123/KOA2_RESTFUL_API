const fs = require('fs');
// 老式的回调函数形式
fs.readFile('./package.json',(err, data) => {
  if (err) return console.log(err)
  data = JSON.parse(data)
  console.log(data.name)
})