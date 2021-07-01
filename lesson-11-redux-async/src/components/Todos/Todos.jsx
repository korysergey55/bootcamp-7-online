import { Component } from "react";
import { connect } from "react-redux";

import AddForm from "./AddForm/AddForm";
import TodosStats from "./TodosStats/TodosStats";
import TodosFilter from "./TodosFilter/TodosFilter";
import TodosList from "./TodosList/TodosList";
import TodosStatusFilter from "./TodosStatusFilter/TodosStatusFilter";
import Modal from "../../shared/components/Modal/Modal";
import { getAllTodos, removeTodo, toggleCompleted } from '../../redux/todos/todos.operations'
import {selectAllTodos, selectAllTodosCount, selectFilter} from "../../redux/todos/todos.selectors";

class Todos extends Component {
  state = {
    showModal: false,
  };

  componentDidMount() {
    this.props.getAllTodos();
  }


  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  render() {
    const { status } = this.state;
    const { items, toDoCompletedCount, itemsCount } = this.props;

    return (
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 text-center">
            <TodosStats
              itemsCount={itemsCount}
              toDoCompletedCount={toDoCompletedCount}
            />
            <button onClick={this.toggleModal}>Create New Task</button>
            {this.state.showModal && (
              <Modal open={this.state.showModal} onClose={this.toggleModal}>
                <h3>Add new task!</h3>
                <AddForm toggleModal={this.toggleModal} />
              </Modal>
            )}

            {this.props.originalItems.length > 2 && <TodosFilter />}

            <TodosStatusFilter
              status={status}
              handleChange={this.handleChange}
            />

            <TodosList
              items={items}
              handleDelete={this.props.handleDelete}
              toggleCompleted={this.props.toggleCompleted}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  const items = selectAllTodos(state);
  const filter = selectFilter(state);
  const itemsCount = selectAllTodosCount(state);

  const toDoCompletedCount = items.reduce(
      (acc, item) => (item.completed ? acc + 1 : acc),
      0
  );

  const formattedFilter = filter.toLowerCase().trim();
  const filteredItems = items.filter((item) =>
    item.title.toLowerCase().includes(formattedFilter)
  );
  return {
    items: filteredItems,
    originalItems: items,
    itemsCount,
    toDoCompletedCount,
    loading: state.todos.loading,
    // filter: state.todos.filter,
  };
};

// const mapDispatch = (dispatch) => {
//   return {
//     addNewToDo: (payload) => dispatch(addNewToDo(payload))
//   }
// }


const mapDispatch = {
  handleDelete: removeTodo,
  toggleCompleted,
  getAllTodos,
};

export default connect(mapState, mapDispatch)(Todos);
