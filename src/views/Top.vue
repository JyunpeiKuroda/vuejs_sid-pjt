<template>
  <div class="top">
    <TopPage msg= "-Caffeine-  Intake Management"/>
  </div>
</template>

<script>
// @ is an alias to /src
import TopPage from '@/components/templates/TopPage.vue'

export default {
  data() {
    return {
    }
  },
  name: 'top',
  components: {
    TopPage
  }
}
</script>


<style>
/* カテゴリー題名（monster） */
h1 {
  background-color: chartreuse;
}
</style>