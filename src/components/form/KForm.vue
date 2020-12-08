<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object,
      required: true
    },
    rules: {
      type: Object
    }
  },
  methods: {
    validate (cb) {
      const tasks = this.$children
        .filter(item => item.prop)
        .map(item => item.validate())
      Promise.all(tasks)
        .then(() => {
          const flag = true
          cb(flag)
        })
        .catch(() => {
          const flag = false
          cb(flag)
        })
    }
  }
}
</script>

<style>

</style>
