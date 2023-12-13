import * as m1 from './module.js'

console.log(m1.default(10, 20))

// import {default as add} from './module.js'
import add from './module.js'
console.log(add(20, 20))