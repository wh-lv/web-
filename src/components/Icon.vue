<template>
  <svg>
    <use :xlink:href="iconName" :class="['svg-icon', className]"></use>
  </svg>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: ''
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName () {
      return `#icon-${this.icon}`
    }
  }
}
</script>

<style scoped>
  .svg-icon {
    width: 1em;
    height: 1em;
    font-size: 1em;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
