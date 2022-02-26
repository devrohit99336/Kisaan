import { createStore } from "vuex";
import products from "./modules/products";

export default createStore({
    modules:{
        products:products
    },
  state: {
    firstName: "Rohit",
    lastName: "Doe",
  },
  mutations: {
    updateName(state) {
      state.firstName = "Rohit kumar";
    },
  },
  actions: {
    updateName(context) {
      context.commit("updateName");
    },
  },
  getters: {
    getUser(state) {
      return state.firstName == "Rohit" ? "Rohit kumar" : "Unavailable";
    },
  },
});
