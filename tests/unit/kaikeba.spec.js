function add(num1, num2) {
  return num1 + num2
}

describe('测试一下 add 函数', () => {
  it('测试传递参数和结果是否匹配', () => {
    // 断言
    expect(add(1, 3).toBe(3))
    expect(add(1, 2).toBe(3))
    expect(add('str', 3).toBe(5))
  })
})
