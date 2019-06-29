<template>
  <div class="container">
    <div class="message item">{{ message }}</div>
    <div class="item">
      <label for="username">Enter your user name</label>
      <input type="text"
        name="username"
        id="username"
        v-model="username" />
    </div>
    <div v-if="error"
      class="error">
      Please enter the user name at least 7 letters
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Foo',
    data() {
      return {
        message: 'Hello World',
        username: '',
      }
    },
    computed: {
      error() {
        return this.username.trim()
          .length < 7
      },
    },
  }

</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    font-size: 20px;
  }

  .item {
    padding: 10px;
  }

</style>
