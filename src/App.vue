<template>
  <div id="app">
    <MessageList :messages="messages" />

  </div>
</template>

<script>
  import MessageList from './components/MessageList.vue'

  export default {
    name: 'app',
    data() {
      return ({
        messages: ['Ben Hu', 'Sabrina']
      })
    },
    components: {
      MessageList
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

</style>
