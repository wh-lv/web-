// 完成一个指令
import store from '@/store/index.js'

export default {
  inserted (el, binding) {
    const { value: permissionRoles } = binding
    const roles = store.getters.roles
    console.log('roles: ', roles)
    if (permissionRoles && permissionRoles instanceof Array && permissionRoles.length > 0) {
      const hasPermission = roles.some(role => {
        return permissionRoles.includes(role)
      })
      if (!hasPermission) {
        el.parentNode && el.parentNode.removeChild(el)
      }
    } else {
      throw new Error('需要指定数组类型的权限，如：v-permission=xxx')
    }
  }
}
