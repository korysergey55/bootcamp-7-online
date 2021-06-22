import PropTypes from "prop-types";

const TodosStats = ({ itemsCount, toDoCompletedCount }) => (
    <h3>
      All: {itemsCount} || Completed: {toDoCompletedCount}
    </h3>
);

TodosStats.propTypes = {
  itemsCount: PropTypes.number.isRequired,
  toDoCompletedCount: PropTypes.number.isRequired,
};

export default TodosStats;