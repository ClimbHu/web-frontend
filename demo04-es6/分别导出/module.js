// 变量
export const PI = 3.14
// 方法
export function sum(a,b) {
    return a + b
}
// 类
export class Person{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    sayHello(){
        console.log(`hello ,my name is ${this.name}, I'm ${this.age} years old`)
    }
}