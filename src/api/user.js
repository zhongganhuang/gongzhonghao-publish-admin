import request from '@/utils/request.js'

//用户相关请求模块

//用户登录
export const login = data => {
  return request({
    method: 'POST',
    url: '/mp/v1_0/authorizations',
    // data 用来设置 POST 请求体
    data
  })
}

//获取用户信息
export const getUserProfile=()=>{
    return request({
        methods:"GET",
        url:'/mp/v1_0/user/profile',
        // 后端要求把需要授权的用户身份放到请求头中,axios可以通过headers选项设置请求头
        headers:{
            //属性名和值都得看接口的要求
            //属性名：Authorization.接口要求的
            //属性值：Bearer空格token数据
            Authorization:'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE2Mzc1NzAxNjAsInVzZXJfaWQiOjEsInJlZnJlc2giOmZhbHNlLCJ2ZXJpZmllZCI6dHJ1ZX0.HYnX4n5gtHXOONe1fMMctEIKPqenlTvK1mkl4OMrWxs'
        }
    })
}

//修改用户信息
// export const updateUser=()=>{

// }