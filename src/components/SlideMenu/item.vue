<template>
  <li v-if="!model.hidden">
    <div @click="toggle">
      <Icon v-if="model.meta && model.meta.icon" :icon="model.meta.icon"></Icon>
      <span v-if="isFolder">
        <span v-if="model.meta && model.meta.title">{{ model.meta.title }}</span>
        <span>[{{ open ? '-' : '+' }}]</span>
      </span>
      <template v-else>
        <router-link v-if="model.meta && model.meta.title" :to="resolvePath(model.path)">{{ model.meta.title }}</router-link>
      </template>
    </div>
    <ul v-show="open" v-if="isFolder">
      <item
        class="item"
        v-for="route in model.children"
        :key="route.path"
        :model="route"
        :base-path="resolvePath(model.path)"
      ></item>
    </ul>
  </li>
</template>

<script>
import path from 'path'
export default {
  name: 'Item',
  props: {
    model: Object,
    basePath: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      open: false
    }
  },
  computed: {
    isFolder () {
      return this.model.children && this.model.children.length > 0
    }
  },
  methods: {
    toggle () {
      if (this.isFolder) {
        this.open = !this.open
      }
    },
    // 拼接父 path 和子 path 为完整的 path
    resolvePath (routePath) {
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>

<style>

</style>
