export default {
  SET_CONST (state, args) {
    state[args.name] = args.result;
  },
  SET_AUTH_INFO (state, args) {
    state[args.name] = args.result;
  }
};
