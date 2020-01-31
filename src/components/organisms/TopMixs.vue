<template>
  <div class="TopMixs">
    <TopMonsters></TopMonsters>
    <TopRedbulls></TopRedbulls>
    <router-view/>
  </div>
</template>

<script>
import TopMonsters from '@/components/organisms/TopMonsters.vue'
import TopRedbulls from '@/components/organisms/TopRedbulls.vue'

export default {
  name: "TopMixs",

  components: {
    TopMonsters: TopMonsters,
    TopRedbulls: TopRedbulls
  },
}
</script>

<style scoped>
</style>