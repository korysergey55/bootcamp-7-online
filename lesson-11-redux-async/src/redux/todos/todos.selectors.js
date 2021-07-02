import { createSelector } from "@reduxjs/toolkit";

const selectAllTodos = (state) => state.todos.items;
const selectAllTodosCount = (state) => selectAllTodos(state).length;
const selectFilter = (state) => state.todos.filter;

// const formattedFilter = filter.toLowerCase().trim();
// const filteredItems = items.filter((item) =>
//   item.title.toLowerCase().includes(formattedFilter)
// );

const selectFilteredItems = createSelector(
  [selectAllTodos, selectFilter],
  (items, filter) => {
    const formattedFilter = filter.toLowerCase().trim();
    return items.filter((item) =>
      item.title.toLowerCase().includes(formattedFilter)
    );
  }
);

const selectToDoCompletedCount = createSelector([selectAllTodos], (items) =>
  items.reduce((acc, item) => (item.completed ? acc + 1 : acc), 0)
);

export {
  selectFilter,
  selectAllTodosCount,
  selectAllTodos,
    selectFilteredItems,
  selectToDoCompletedCount,
};
