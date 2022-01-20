import axios from 'axios'
const config = {
    baseUrl: "http://127.0.0.1/"
}
// create an axios instance
const service = axios.create({
    baseURL: config.baseUrl, // url = base url + request url
    // withCredentials: true, // 当异步请求时发送cookies
    timeout: 5000 // request timeout
})

service.interceptors.request.use(
    config => {
        // todo
        return config
    },
    error => {
        // do something with request error
        console.log(error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    /**
     * If you want to get http information such as headers or status
     * Please return  response => response
     */

    /**
     * Determine the request status by custom code
     * Here is just an example
     * You can also judge the status by HTTP Status Code
     */
    response => {
        const res = response.data // 请求的data数据，由于封装了Result层，数据类型为Response

        // if the custom code is not 20000, it is judged as an error.
        if (res.code !== 20000) {
            alert("Request error!") // 之后若开发MessageBox则调用MessageBox
            console.error(res) // 出错后用于debug
            return Promise.reject(new Error(res.message || 'Error'))
        } else {
            return res
        }
    },
    error => {
        alert("Request error!") // 之后若开发MessageBox则调用MessageBox
        console.error(error) // 出错后用于debug
        return Promise.reject(error)
    }
)

export {service}
