//基于axios封装请求模块
import axios from 'axios'

//创建一个axios实例，说白了就是复制一个axios。通过这个实例区发请求，把需要的配置配置给这个实例来处理
const request= axios.create({
    baseURL: 'http://ttapi.research.itcast.cn/', // 请求的基础路径
})

//到处请求方法
export default request 