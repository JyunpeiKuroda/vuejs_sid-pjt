<template>
  <element cllas= "TopMonsters">
    <h1 class="title">monster</h1>
    <tbody>
      <tr v-for="product in products" v-bind:key="product" >
        <div class="product-box">
          <div class="product-title">
            <p>{{ product.name }}</p>
          </div>
          <div class="product-monster">
            <div class="product-monster-box">
              <img class="product-monster-img" :src="product.img_path" height="180px">
            </div>
            <div class="commentary">
              <div class="commentary-box">
                <div class="commentary-box-title">容量</div>
                <p>{{ product.capacity }}</p>
              </div>
              <div class="commentary-box">
                <div class="commentary-box-title">カロリー(１本当たり)</div>
                <p>{{ product.calorie }}</p>
              </div>
              <div class="commentary-box">
                <div class="commentary-box-title">カフェイン量(１本当たり)</div>
                <p>{{ product.caffeine }}</p>
              </div>
            </div>
          </div>
          <div class="count-button">
            <v-btn @click="decrement(1)" class="mx-2" fab dark small color="indigo">
              <v-icon dark>mdi-minus</v-icon>
            </v-btn>
            <p>{{ count }}本</p>
            <v-btn @click="increment(1)" class="mx-2" fab dark small color="pink">
              <v-icon dark>mdi-plus</v-icon>
            </v-btn>
          </div>
        </div>
      </tr>
    </tbody>

  </element>
</template>

<script>
// import { mapState } from "vuex";
import { mapGetters } from "vuex";
import { mapMutations } from "vuex";

export default {
  // data: function () {
  // },
  computed: {
    products() {return this.$store.state.products.products},
    // ...mapState(["products"]),
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
/* .selection-group input[type="image"] {
  display: none;
} */

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
/* .product-monster-img {
  float: right;
} */

.product-monster{
  display: flex;
}
.product-monster-box {
  margin-top: 7px;
  margin-right: 15px;
}

.product-title{
  padding: 8px 19px;
  margin: 1em 0;
  background: #cde4ff;
  border-top: solid 5px #5fc2f5;
  border-bottom: solid 5px #5fc2f5;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.22);
}
.product-title p {
  color: #2c2c2f;
  margin: 0;
  padding: 0;
}

.product-box {
  padding: 0.5em 0.7em;
  margin: 0.3em ;
  margin-left: 7.5px;
  font-weight: bold;
  color: #6091d3;/*文字色*/
  background: #FFF;
  border: solid 3px #5fc2f5;/*線*/
  border-radius: 10px;/*角の丸み*/
}
.product-box p {
  margin: 0;
  padding: 0;
}

.commentary-box {
  margin: 0.5em 0;
  background: #f1f1f1;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.22);
}
.commentary-box p {
  margin: 0;
  padding: 0;
}
.commentary-box-title {
  font-size: 1.2em;
  background: #5fc2f5;
  padding: 4px;
  text-align: center;
  color: #FFF;
  font-weight: bold;
  letter-spacing: 0.05em;
}
.commentary-box-title p {
  margin: 0;
  padding: 0;
}

.count-button {
  display: flex;
  margin: 10 auto;
}

.mx-2 {
  margin-right: 20px;
  margin-left: 20px;
}
</style>