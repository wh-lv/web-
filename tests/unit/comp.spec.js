import Vue from 'vue'
import Kaikeba from '@/components/Kaikeba.vue'
import { mount } from '@vue/test-utils'

describe('Kaikeba.vue', () => {
  // 检查原始组件选项
  it('由 created 生命周期', () => {
    expect(typeof Kaikeba.created).toBe('function')
  })

  // 评估原始组件选项中的函数的结果
  it('初始 data 是 vue-text', () => {
    // 检查 data 函数的存在性
    expect(typeof Kaikeba.data).toBe('function')
    // 检查 data 返回的默认值
    const defaultData = Kaikeba.data()
    expect(defaultData.message).toBe('hello')
  })

  // 检查 mounted 之后 data 数据
  it('mount 之后测 data 是开课吧', () => {
    const vm = new Vue(Kaikeba).$mount()
    expect(vm.message).toBe('开课吧')
  })

  it('按钮点击后', () => {
    const wrapper = mount(Kaikeba)
    wrapper.find('button').trigger('click')
    // 测试数据变化
    expect(wrapper.vm.message).toBe('按钮点击')
    // 测试 html 渲染结果
    expect(wrapper.find('span').html()).toBe('<span>开课吧</span>')
    expect(wrapper.find('span').text()).toBe('开课吧')
  })
})
