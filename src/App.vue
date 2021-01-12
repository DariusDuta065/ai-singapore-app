<template>
  <Header />
  <Main />
</template>

<script>
import Header from '@C/Header.vue'
import Main from '@C/Main.vue'

export default {
  name: 'App',
  components: {
    Header,
    Main,
  }
}
</script>

<style>
#app {
  font-family: 'Lato', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  /* color: #2c3e50; */
  padding: 0;
  margin: 0;
}
</style>
