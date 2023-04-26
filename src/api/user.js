import request from '@/utils/request'

// 登录接口封装
export function login(data) {
  // 返回一个axios对象 => promise  // 返回了一个promise对象
  return request({
    url: '/sys/login',
    method: 'POST',
    data
  })
}
// 获取用户的基本资料
export function getUserInfo() {
  return request({
    url: '/sys/profile',
    method: 'post'
  })
}

export function logout() {}
