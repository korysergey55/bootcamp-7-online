import PropTypes from "prop-types";
import TodosListItem from "../TodosListItem/TodosListItem";

const TodosList = ({ items, toggleCompleted, handleDelete }) => {
  return (
    <ul>
      {items.map((item) => (
        <TodosListItem
          key={item.id}
          item={item}
          toggleCompleted={() => toggleCompleted(item.id)}
          handleDelete={() => handleDelete(item.id)}
        />
      ))}
    </ul>
  );
};

TodosList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.string.isRequired }))
    .isRequired,
  toggleCompleted: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default TodosList;
