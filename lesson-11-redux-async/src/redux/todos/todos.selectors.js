const selectAllTodos = (state) => state.todos.items;
const selectAllTodosCount = (state) => selectAllTodos(state).length;
const selectFilter = (state) => state.todos.filter;

export { selectFilter, selectAllTodosCount, selectAllTodos };