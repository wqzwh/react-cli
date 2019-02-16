import API from '@/public/utils/api'

export default {
  // 用户信息
  getInfo: (params = {}) => API.get(`/info`, params, { MOCK: true }),
  // 菜单信息
  getMenu: (params = {}) => API.get(`/menu`, params, { MOCK: true })
}
