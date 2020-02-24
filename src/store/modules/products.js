const state = {
  products: [
    { id: 1,
      name: "モンスターエナジー",
      capacity: "355ml",
      calorie: "178kcal",
      caffeine: "142mg",
      img_path: require("@/assets/monster/monster1.jpg")
    },
    { id: 2,
      name: "モンスターアブソリュートリーゼロ",
      capacity: "355ml",
      calorie: "0kcal",
      caffeine: "142mg",
      img_path: require("@/assets/monster/monster2.jpg")
    },
    { id: 3,
      name: "モンスターキューバリブレ",
      capacity: "355ml",
      calorie: "149kcal",
      caffeine: "142mg",
      img_path: require("@/assets/monster/monster7.jpg")
    },
    { id: 4,
      name: "モンスターエナジーパイプラインパンチ",
      capacity: "355ml",
      calorie: "156kcal",
      caffeine: "142mg",
      img_path: require("@/assets/monster/monster8.jpg")
    },
    { id: 5,
      name: "モンスターカオス",
      capacity: "355ml",
      calorie: "124kcal",
      caffeine: "142mg",
      img_path: require("@/assets/monster/monster6.jpg")
    },
    { id: 6,
      name: "モンスターウルトラ",
      capacity: "355ml",
      calorie: "0kcal",
      caffeine: "142mg",
      img_path: require("@/assets/monster/monster3.jpg")
    },
    { id: 7,
      name: "モンスターエナジーM3ビン",
      capacity: "150ml",
      calorie: "65kcal",
      caffeine: "150mg",
      img_path: require("@/assets/monster/monster4.jpg")
    },
    { id: 8,
      name: "モンスターエナジーボトル缶",
      capacity: "500ml",
      calorie: "250kcal",
      caffeine: "200mg",
      img_path: require("@/assets/monster/monster5.jpg")
    }
  ]
};
const getters = {
  id: state => state.products.id
};
export default {
  state,
  getters,
}