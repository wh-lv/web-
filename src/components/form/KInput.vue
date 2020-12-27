<template>
  <div>
    <!-- 自定义组件要实现 v-model，就必须实现 :value @input -->
    <input :value="value" @input="onInput" v-bind="$attrs">
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // 避免顶层元素继承属性
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  methods: {
    onInput (e) {
      this.$emit('input', e.target.value)
      this.$parent.$emit('validate')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
