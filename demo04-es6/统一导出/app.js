/* 导入module.js文件
    * 代表module.js的所有成员
    无论何种方式导入，导入的内容都会被当成一个对象处理
    使用一个对象来接受所有的成员
*/
/* import * as m1 from './module.js'

console.log(m1.PI)
console.log(m1.sum(10,20))

let person = new m1.Person("张三",10)
person.sayHello()
 */
import {PI,PI as pi,sum,Person} from './module.js'

console.log(PI)
console.log(pi)
console.log(sum(10,20))

let person = new Person("张三",10)
person.sayHello()