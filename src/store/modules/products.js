export default {
  state: {
    message: "Welcome to products page",
    products: [
      { id: 1, name: "Redmi1", price: 8000 },
      { id: 2, name: "Redmi2", price: 8000 },
      { id: 3, name: "Redmi3", price: 9000 },
      { id: 4, name: "Redmi4", price: 10000 },
      { id: 5, name: "Redmi5", price: 12000 },
      { id: 6, name: "Redmi6", price: 15000 },
    ],
  },
  mutations: {
    addProduct(state, payload) {
      state.products.push(payload);
    },
  },
  actions: {
    addProduct({ commit }) {
      commit("addProduct", {
        id: 7,
        name: "redmi7",
        price: 170000,
      });
    },
  },
  getters: {
      countProducts(state){
          return state.products.length;
      }
  },
};
