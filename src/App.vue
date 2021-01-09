<template>
  <div id="app">
    <!-- <svg>
      <use xlink:href="#icon-wx"></use>
    </svg>
    <svg><use xlink:href="#icon-qq"></use></svg> -->
    <!-- <icon icon="wx" class-name="wx"></icon>
    <Icon icon="qq" class-name="qq"></Icon>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view/>
  </div>
</template>

<script>
// import '@/icons/svg/wx.svg'
export default {

}
</script>

<style>

</style>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.bs { box-shadow: inset 0px 0px 5px 0.1px red; }
</style>
