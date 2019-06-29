<template>
  <div id="app"
    class="container">
    <HelloWorld message="Welcome to Vue.js App" />
    <Foo />
  </div>
</template>

<script>
  import HelloWorld from './components/HelloWorld.vue'
  import Foo from './components/Foo.vue'

  export default {
    name: 'app',
    components: {
      HelloWorld,

      Foo,
    },
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 20px;
  }

  .container {
    display: flex;
    flex-direction: column;
  }

</style>
