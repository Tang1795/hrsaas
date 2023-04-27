const getters = {
  sidebar: state => state.app.sidebar,
  device: state => state.app.device,
  token: state => state.user.token, // 在根级的getters上 开发子模块的属性给别人看 给别人用
  // avatar: state => state.user.avatar,
  name: state => state.user.userInfo.username // 建立用户名称的映射
}
export default getters
