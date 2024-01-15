/* 定义共享的pinia数据 */
import { defineStore } from "pinia"

// 定义一个Person共享
export const definePerson = defineStore(
    "personPinia",// id不用写在内部，可以提出去
    {
        // id: "personPinia", // 当前数据的id，必须全局唯一
        state: () => {
            return { // 状态 其实就是响应式数据
                username: "zhangsan",
                age: 0,
                hobbies: ["唱歌", "跳舞"]
            }
        },
        getters: { // 专门定义一些获得数据或者是使用数据计算结构的一些函数，这里函数不要修改数据
            // getAge() { // 访问该该方法时通过属性的方式，不需要加 ()
            //     return this.age // 可以改为箭头函数
            // },
            getAge: (state) => state.age,
            getHobbiesCount() {
                return this.hobbies.length
            }
        },
        actions: {
            doubleAge() { // 专门定义一些修改数据的函数
                this.age = this.age * 2
            }
        }
    }
)