import request from "@/utils/request";
// 获取话题信息
const reqTopics = params => {
  return request({
    url: "/topics",
    method: 'get',
    params
  })
}

// 


// 获取 用户详情
const reqUserByName = loginName => {
  return request({
    url: `/user/${loginName} `,
    method: 'get'
  })
}

export { reqTopics, reqUserByName}