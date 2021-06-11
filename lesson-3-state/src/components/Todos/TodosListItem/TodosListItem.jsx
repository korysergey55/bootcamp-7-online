import PropTypes from "prop-types";
import toLocaleTime from "../../../lib/to-locale-time";

const TodosListItem = ({ item, handleDelete, toggleCompleted }) => {
  const { completed = false, title, createdAt } = item;

  return (
    <li className={completed ? "text-decoration-line-through" : ""}>
      <div className="flex justify-content-between">
        <span onClick={toggleCompleted}>
          {toLocaleTime(createdAt)} {title}
        </span>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </li>
  );
};

TodosListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    completed: PropTypes.bool,
    title: PropTypes.string.isRequired,
    createdAt: PropTypes.number.isRequired,
  }).isRequired,
};

export default TodosListItem;
