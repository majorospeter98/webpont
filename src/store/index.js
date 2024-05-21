import { createStore } from "vuex";
import usersModule from "./modules/users/index";

const store = createStore({
  modules: {
    users: usersModule,
  },
  state() {
    return {
      userToken: "’SpjcYz8xQyY7w9Jz-DRU’,",
    };
  },
  getters: {
    userToken(state) {
      return state.userToken;
    },
  },
});

export default store;
