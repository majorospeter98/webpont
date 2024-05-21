export default {
  users(state) {
    console.log(state);
    return state.users;
  },
  hasUsers(state) {
    return state.users.length > 0;
  },
  isUser(state, rootGetters) {
    const users = state.users;
    const userId = rootGetters.userToken;
    return users.some((user) => user.token === userId);
  },
};
