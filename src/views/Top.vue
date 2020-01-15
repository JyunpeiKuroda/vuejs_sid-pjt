<template>
  <div class="top">
    <TopPage msg= "-Caffeine-  Intake Management Book"/>
    <div class="selection-group">
      <input id="a" type="radio" name="rate" value="a">
      <label for="a">
        <img src="../assets/monster/monster1.jpg">
      </label>

      <input id="b" type="radio" name="rate" value="b">
      <label for="b">
        <img src="../assets/monster/monster2.jpg">
      </label>

      <input id="c" type="radio" name="rate" value="c">
      <label for="c">
        <img src="../assets/monster/monster7.jpg">
      </label>

      <input id="d" type="radio" name="rate" value="d">
      <label for="d">
        <img src="../assets/monster/monster8.jpg">
      </label>

      <input id="e" type="radio" name="rate" value="e">
      <label for="e">
        <img src="../assets/monster/monster6.jpg">
      </label>

      <input id="f" type="radio" name="rate" value="f">
      <label for="f">
        <img src="../assets/monster/monster3.jpg">
      </label>

      <input id="g" type="radio" name="rate" value="g">
      <label for="g">
        <img src="../assets/monster/monster4.jpg">
      </label>

      <input id="h" type="radio" name="rate" value="h">
      <label for="h">
        <img src="../assets/monster/monster5.jpg">
      </label>
    </div>
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

<style>
/* 画像部分に余白を持たせる */
label img {
  margin: 3px;
  padding: 8px;
}

/* 選択されたラジオボタンの画像の背景をオレンジ色に変える */
.selection-group input[type="radio"]:checked + label img {
  background: orange;
}
</style>