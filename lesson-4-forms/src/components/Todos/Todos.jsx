import { Component } from "react";
import { v4 as uuid } from "uuid";
import AddForm from "./AddForm/AddForm";
import TodosStats from "./TodosStats/TodosStats";
import TodosFilter from "./TodosFilter/TodosFilter";
import TodosList from "./TodosList/TodosList";
import TodosStatusFilter from "./TodosStatusFilter/TodosStatusFilter";
import { TodosStatusEnum } from "./todos-status.enum";
import Modal from "../../shared/components/Modal/Modal";

/*
interface ITodos {
id: uuid or shortId;
title: string;
completed: boolean;
createdAt: Date;
}
*/

// const Section = ({ title = 'Hi', children }) => (
//     <section className="container">
//       <h3>{title}</h3>
//       {children}
//     </section>
// )

// <Section>Hello</Section>

class Todos extends Component {
  state = {
    items: [],
    filter: "",
    status: TodosStatusEnum.ALL,
    showModal: false,
  };

  componentDidMount() {
    console.log("[componentDidMount]");
    const items = localStorage.getItem("items");
    if (items) {
      const parsedItems = JSON.parse(items);
      // console.log(parsedItems);
      this.setState({ items: parsedItems });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("[componentDidUpdate]");
    if (prevState.items !== this.state.items) {
      // console.log(prevState.items, "prevState");
      // console.log(this.state.items, "state");
      localStorage.setItem("items", JSON.stringify(this.state.items));
    }
  }

  handleDelete = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id),
    }));
  };

  toggleCompleted = (id) => {
    this.setState((prevState) => ({
      items: prevState.items.map((item) =>
        item.id === id
          ? {
              ...item,
              completed: !item.completed,
            }
          : item
      ),
    }));
  };

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = (term) => {
    if (!term) {
      alert("Поле не может быть пустым!");
      return;
    }

    const isDuplicate = this.state.items.some((item) => item.title === term);
    if (isDuplicate) {
      alert("Такок дело уже существует " + term);
      return;
    }

    const newTodo = {
      id: uuid(),
      title: term,
      completed: false,
      createdAt: Date.now(),
    };

    this.setState((prevState) => {
      const newItems = [newTodo, ...prevState.items];
      return { items: newItems, showModal: false };
    });
  };

  toggleModal = () => {
    this.setState((prevState) => ({ showModal: !prevState.showModal }));
  };

  render() {
    console.log("[render()]");
    const { items, filter, status } = this.state;
    const itemsCount = items.length;
    const toDoCompletedCount = items.reduce(
      (acc, item) => (item.completed ? acc + 1 : acc),
      0
    );

    const formattedFilter = filter.toLowerCase().trim();
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(formattedFilter)
    );

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
                <AddForm handleSubmit={this.handleSubmit} />
              </Modal>
            )}
            <TodosFilter filter={filter} handleChange={this.handleChange} />
            <TodosStatusFilter
              status={status}
              handleChange={this.handleChange}
            />
            <TodosList
              items={filteredItems}
              handleDelete={this.handleDelete}
              toggleCompleted={this.toggleCompleted}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Todos;
