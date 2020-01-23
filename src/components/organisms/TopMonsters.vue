<template>
  <element cllas= "selection-group">
    <h1 class="title">monster</h1>
    <input
      type="radio"
      id="a"
      name="rate"
      value="a"
      v-model="monsters"
    >
    <label for="a">
      <img src="../assets/monster/monster1.jpg">
    </label>

    <input
      type="radio"
      id="b"
      name="rate"
      value="b"
      v-model="monsters"
    >
    <label for="b">
      <img src="../assets/monster/monster2.jpg">
    </label>

    <input type="radio" id="c" name="rate" value="c">
    <label for="c">
      <img src="../assets/monster/monster7.jpg">
    </label>

    <input type="radio" id="d" name="rate" value="d">
    <label for="d">
      <img src="../assets/monster/monster8.jpg">
    </label>

    <input type="radio" id="e" name="rate" value="e">
    <label for="e">
      <img src="../assets/monster/monster6.jpg">
    </label>

    <input type="radio" id="f" name="rate" value="f">
    <label for="f">
      <img src="../assets/monster/monster3.jpg">
    </label>

    <input type="radio" id="g" name="rate" value="g">
    <label for="g">
      <img src="../assets/monster/monster4.jpg">
    </label>

    <input type="radio" id="h" name="rate" value="h">
    <label for="h">
      <img src="../assets/monster/monster5.jpg">
    </label>
    <p>{{ monsters }}</p>
  </element>
</template>

<script>
export default {
  name: 'Top_Monsters'
}
</script>

<style>
/* カテゴリー題名（monster） */
h1 {
  background-color: chartreuse;
}

/*ラジオボタンを見えないようにする。 */
.selection-group input[type="radio"] {
  display: none;
}

/* 画像部分に余白を持たせる */
label img {
  margin: 8px;
  padding: 10px;
}

/* 選択されたラジオボタンの画像の背景をオレンジ色に変える */
.selection-group input[type="radio"]:checked + label img {
  background: orange;
}
</style>