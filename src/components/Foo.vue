<template>
  <div>
    <div class="message">{{ message }} </div>Enter your username:
    <input type="text" name="username" id="username" v-model="username">

    <div v-if="error" class="error">
      Please enter the user name at least 7 letters
    </div>
  </div>
</template>

<script>
export default {
  name:'Foo',
  data () {
    return {
      message:'Hello World',
      username:'',
    }
  },
  computed: {
    error () {
      return this.username.trim().length < 7
    }
  }
};
</script>

<style>
</style>
