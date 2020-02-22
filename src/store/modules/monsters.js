const state = {
  monsters: [
    { id: 1, itemName: "モンスターエナジー", capacity: "355ml", calorie: "178kcal", caffeine: "142mg"},
    { id: 2, itemName: "モンスターアブソリュートリーゼロ", capacity: "355ml", calorie: "0kcal", caffeine: "142mg"},
    { id: 3, itemName: "モンスターキューバリブレ", capacity: "355ml", calorie: "149kcal", caffeine: "142mg"},
    { id: 4, itemName: "モンスターエナジーパイプラインパンチ", capacity: "355ml", calorie: "156kcal", caffeine: "142mg"},
    { id: 5, itemName: "モンスターカオス", capacity: "355ml", calorie: "124kcal", caffeine: "142mg"},
    { id: 6, itemName: "モンスターウルトラ", capacity: "355ml", calorie: "0kcal", caffeine: "142mg"},
    { id: 7, itemName: "モンスターエナジーM3ビン", capacity: "150ml", calorie: "65kcal", caffeine: "150mg"},
    { id: 8, itemName: "モンスターエナジーボトル缶", capacity: "500ml", calorie: "250kcal", caffeine: "200mg"}
  ]
};
const getters = {
  monsters: state => state.count + 1
};
export default {
  state,
  getters,
}