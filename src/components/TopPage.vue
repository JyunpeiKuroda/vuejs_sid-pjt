<template>
  <div cllas= "tp_page">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'TopPage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-size: 40px;
  color: yellow;
  background-color: red;
  margin: 0 auto;
}
</style>