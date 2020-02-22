<template>
  <element cllas= "TopMonsters">
    <h1 class="title">monster</h1>

    <input type="checkbox" id="a" name="rate" value="a">
    <label for="a">
      <img src="@/assets/monster/monster1.jpg">
      <div id="example">

          <v-btn @click="decrement(1)" class="mx-2" fab dark small color="indigo">
            <v-icon dark>mdi-minus</v-icon>
          </v-btn>
          <v-btn @click="increment(1)" class="mx-2" fab dark small color="pink">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        <p>{{ count }}</p>

      </div>
    </label>

    <input type="checkbox" id="b" name="rate" value="b">
    <label for="b">
      <img src="@/assets/monster/monster2.jpg">
      <div id="example">

          <v-btn @click="decrement(1)" class="mx-2" fab dark small color="indigo">
            <v-icon dark>mdi-minus</v-icon>
          </v-btn>
          <v-btn @click="increment(1)" class="mx-2" fab dark small color="pink">
            <v-icon dark>mdi-plus</v-icon>
          </v-btn>
        <p>{{ count }}</p>

      </div>
    </label>

    <input type="checkbox" id="c" name="rate" value="c">
    <label for="c">
      <img src="@/assets/monster/monster7.jpg">
    </label>

    <input type="checkbox" id="d" name="rate" value="d">
    <label for="d">
      <img src="@/assets/monster/monster8.jpg">
    </label>

    <input type="checkbox" id="e" name="rate" value="e">
    <label for="e">
      <img src="@/assets/monster/monster6.jpg">
    </label>

    <input type="checkbox" id="f" name="rate" value="f">
    <label for="f">
      <img src="@/assets/monster/monster3.jpg">
    </label>

    <input type="checkbox" id="g" name="rate" value="g">
    <label for="g">
      <img src="@/assets/monster/monster4.jpg">
    </label>

    <input type="checkbox" id="h" name="rate" value="h">
    <label for="h">
      <img src="@/assets/monster/monster5.jpg">
    </label>

  </element>
</template>

<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["monsters"]),
    ...mapGetters(["count"]),
  },
  methods: {
    ...mapMutations(["increment", "decrement"])
  }
};


</script>

<style scoped>


/* カテゴリー題名（monster） */
h1 {
  background-color: chartreuse;
}

/*ラジオボタンを見えないようにする。 */
.selection-group input[type="image"] {
  display: none;
}

/* 画像部分に余白を持たせる */
label img {
  width: 85px;
  margin: 8px;
  padding: 10px;
}

/* 選択されたラジオボタンの画像の背景をオレンジ色に変える */
.selection-group input[type="checkbox"]:checked + label img {
  background: orange;
}
</style>