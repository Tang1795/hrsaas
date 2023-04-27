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
// 获取用户的基本信息，现在写它完全是为了显示头像
export function getUserDetailById(id) {
  return request({
    url: `/sys/user/${id}`
  })
}

export function logout() {}
