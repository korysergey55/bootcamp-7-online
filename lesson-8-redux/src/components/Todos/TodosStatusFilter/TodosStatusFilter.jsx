import PropTypes from "prop-types";

import { TodosStatusEnum } from "../todos-status.enum";

const buttons = [
  {
    name: "status",
    value: TodosStatusEnum.ALL,
    label: "All",
  },
  {
    name: "status",
    value: TodosStatusEnum.COMPLETED,
    label: "Completed",
  },
  {
    name: "status",
    value: TodosStatusEnum.NOT_COMPLETED,
    label: "Not Completed",
  },
];

const TodosStatusFilter = ({ handleChange, status }) => {
  return (
    <div className="flex gap-x-2">
      {buttons.map(({ name, value, label }) => (
        <label key={value}>
          {label}
          <input
            name={name}
            type="radio"
            checked={value === status}
            onChange={handleChange}
            value={value}
          />
        </label>
      ))}
    </div>
  );
};

TodosStatusFilter.propTypes = {
  handleChange: PropTypes.func.isRequired,
};

export default TodosStatusFilter;
