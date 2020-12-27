<template>
  <div>
    <k-form :model="model" :rules="rules" ref="formLogin">
      <k-form-item label="用户名" prop="username">
        <k-input v-model="model.username"></k-input>
      </k-form-item>
      <k-form-item label="密码" prop="password">
        <k-input v-model="model.password" type="password"></k-input>
      </k-form-item>
      <k-form-item>
        <button @click="onLogin">登录</button>
      </k-form-item>
    </k-form>
    {{ model }}
  </div>
</template>

<script>
import KInput from './KInput'
import KFormItem from './KFormItem'
import KForm from './KForm'
import Notice from '../Notice/index'
import create from '../../utils/create'
export default {
  components: {
    KInput,
    KFormItem,
    KForm
  },
  data () {
    return {
      model: {
        username: 'tom',
        password: ''
      },
      rules: {
        username: [{ required: true, message: '用户名必填' }],
        password: [{ required: true, message: '密码必填' }]
      }
    }
  },
  methods: {
    onLogin () {
      let notice
      this.$refs.formLogin.validate((isValid) => {
        if (isValid) {
          notice = create(Notice, {
            title: 'title',
            message: 'Login...',
            duration: 1000
          })
        } else {
          notice = create(Notice, {
            title: 'title',
            message: 'Error...',
            duration: 2000
          })
        }
        notice.show()
      })
    }
  }
}
</script>

<style>

</style>
