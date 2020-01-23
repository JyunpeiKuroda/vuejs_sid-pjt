<template>
  <div cllas= "tp_page">
    <h1>{{ msg }}</h1>
    <TopMonsters @logout="handleLogout" />
    <TopRedbulls @logout="handleLogout" />
  </div>
</template>

<script>
import TopMonsters from '@/components/TopMonsters.vue'
import TopRedbulls from '@/components/TopRedbulls.vue'
export default {
  name: 'TopPage',

  components: {
    TopMonsters,
    TopRedbulls
  },
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