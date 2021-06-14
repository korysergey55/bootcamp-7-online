import PropTypes from "prop-types";

const TodosFilter = ({ handleChange, filter }) => {
  return (
    <div className="my-3">
      <label htmlFor="filter">Filter:</label>
      <input
        id="filter"
        name="filter"
        type="text"
        className="px-4 py-3 rounded-md"
        onChange={handleChange}
        value={filter}
      />
    </div>
  );
};

TodosFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
  filter: PropTypes.string.isRequired,
};

export default TodosFilter;