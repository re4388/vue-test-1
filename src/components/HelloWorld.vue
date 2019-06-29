<template>
  <div class="hello item">
    <h1>{{message}}</h1>
    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    message: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item {
  padding: 20px;
}
</style>
