import axios from 'axios'

// 使用axios函数创建一个可以发送请求的实例对象
const instance = axios.create({
    // 请求的基础路径
    baseURL: "https://api.uomg.com/"
})

// 设置请求拦截器
instance.interceptors.request.use(
    config => {
        console.log("请求前拦截器")
        // 请求之前，数组请求信息的方法
        config.headers.Accept = "application/json, text/plain, text/html, */*"
        // 设置完毕之后，必须返回config
        return config
    },
    error => {
        console.log("请求前拦截器异常方法")
        // 返回一个失败状态的promise
        return Promise.reject("something wrong")
    }
)

// 设置响应拦截器
instance.interceptors.response.use(
    response => {
        // 响应状态码为200时要执行的方法
        // 处理响应数据
        // 最后要返回response
        console.log("response success")
        console.log(response)
        return response
    },
    error => {
        console.log("response fail")
        console.log(error)
        // 最后一定要返回一个失败状态的promise
        return Promise.reject("something wrong")
    }
)

// 使用默认导出，暴露instance
export default instance