//基于axios封装请求模块
import axios from 'axios'

//创建一个axios实例，说白了就是复制一个axios。通过这个实例区发请求，把需要的配置配置给这个实例来处理
const request = axios.create({
    baseURL: 'http://ttapi.research.itcast.cn/', // 请求的基础路径
})





//请求拦截器(官方文档https://github.com/axios/axios拦截器部分)
request.interceptors.request.use(function (config) {
    //所有请求会经过这里

    //可以在允许请求出去之前定制统一业务功能处理，例如：统一的设置token
    const user=JSON.parse(window.localStorage.getItem('user'))
        //如果有登录用户信息，则统一设置token
    if(user){
        config.headers.Authorization=`Bearer ${user.token}`
    }


    //当这里return config;之后请求才会真正的发送出去
    return config;
}, function (error) {
    //请求失败时
    return Promise.reject(error);
})




//导出请求方法
export default request 