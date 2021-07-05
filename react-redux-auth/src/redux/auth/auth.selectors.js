const selectIsAuth = (state) => Boolean(state.auth.token);

export { selectIsAuth };