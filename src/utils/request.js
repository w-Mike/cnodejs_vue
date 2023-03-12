
import axios from "axios"
import {Loading, Message } from "element-ui"


let loadingInstance 
function startLoading() {
  loadingInstance = Loading.service({
    text:"is loading...",
    background:"rgba(0, 0, 0, 0.8)"
  })
}

function errorAlert(){
  Message({
    message:"error!",
    type:"error",
    duration: 2*1000
  })
}

function endLoading(){
  loadingInstance.close()
}


const request = axios.create({
  baseURL:"https://cnodejs.org/api/v1",
  timeout:5000
})
// 实现加载功能
// 请求拦截器
request.interceptors.request.use(config=>{
  startLoading()
  return config
},error=>{
  endLoading()
  errorAlert()
  return Promise.reject(error)
})
// 响应拦截器
request.interceptors.response.use(response=>{
  endLoading()
  return response
},error=>{
  endLoading()
  errorAlert()
  return Promise.reject(error)      //不清楚返回值的作用  ?
})


export default request

