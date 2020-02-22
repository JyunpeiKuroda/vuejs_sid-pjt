const state = {
  count: 0
};
const getters = {
  count: state => state.count + 1
};
const mutations = {
  increment(state, number) {
    state.count += number;
  },
  decrement(state, number) {
    state.count -= number;
  },
};
export default {
  state,
  getters,
  mutations,
}