import PropTypes from "prop-types";
import {connect} from "react-redux";
import {filterChange} from "../../../redux/todos/todos.actions";

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

const mapState = (state) => {
    return {
        filter: state.todos.filter
    }
}

const mapDispatch = {
    handleChange: filterChange
}

export default connect(mapState, mapDispatch)(TodosFilter);