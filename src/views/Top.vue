<template>
  <div class="top">
    <TopPage msg= "-Caffeine-  Intake Management Book"/>

    <button @click="toAbout">
      <img class="monster1_img" alt="monster1" src="../assets/monster/monster1.jpg">
    </button>

    <button @click="toAbout">
      <img class="monster2_img" alt="monster2" src="../assets/monster/monster2.jpg">
    </button>

    <button @click="toAbout">
      <img class="monster3_img" alt="monster3" src="../assets/monster/monster3.jpg">
    </button>

    <button @click="toAbout">
      <img class="monster4_img" alt="monster4" src="../assets/monster/monster4.jpg">
    </button>

    <button @click="toAbout">
      <img class="monster5_img" alt="monster5" src="../assets/monster/monster5.jpg">
    </button>

    <button @click="toAbout">
      <img class="monster6_img" alt="monster6" src="../assets/monster/monster6.jpg">
    </button>

    <button @click="toAbout">
      <img class="monster7_img" alt="monster7" src="../assets/monster/monster7.jpg">
    </button>

    <button @click="toAbout">
      <img class="monster8_img" alt="monster8" src="../assets/monster/monster8.jpg">
    </button>

  </div>
</template>

<script>
// @ is an alias to /src
import TopPage from '@/components/TopPage.vue'

export default {
  name: 'top',
  components: {
    TopPage
  }
}
</script>