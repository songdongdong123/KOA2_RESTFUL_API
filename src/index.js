// import { promisify } from 'util';

// import {resolve as r} from 'path'; // 通过as给方法名/函数设置别名

// import {readFile, writeFileSync as wfs} from 'fs';

// import * as qs from 'querystring'; // 用*代表所有方法的对象，给其设置别名

// promisify(readFile)(r(__dirname, '../package.json')).then(data => {
//   data = JSON.parse(data);
//   console.log(data.name);
//   wfs(r(__dirname, './name'), String(data.name), 'utf8');
// })


import {name } from './ex';
import {getName} from './ex';
import * as ex from './ex';
console.log(name);
console.log(getName());
console.log(ex.name);
console.log(ex.getName()); 