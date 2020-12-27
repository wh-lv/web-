<template>
  <div>
    <label v-if="label">{{ label }}</label>
    <slot></slot>
    <!-- 校验信息 -->
    <p v-if="errorMessage">{{ errorMessage }}</p>
  </div>
</template>

<script>
import Schema from 'async-validator'
export default {
  inject: ['form'],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: String
  },
  data () {
    return {
      errorMessage: ''
    }
  },
  mounted () {
    this.$on('validate', () => {
      this.validate()
    })
  },
  methods: {
    validate () {
      // 1. 获取校验规则
      const rules = this.form.rules[this.prop]
      // 2. 获取数据
      const value = this.form.model[this.prop]
      // 3. 执行校验
      const desc = { [this.prop]: rules }
      const schema = new Schema(desc)
      return schema.validate({ [this.prop]: value }, errors => {
        if (errors) {
          this.errorMessage = errors[0].message
        } else {
          this.errorMessage = ''
        }
      })
    }
  }
}
</script>

<style>

</style>
