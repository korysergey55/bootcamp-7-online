import { Component } from "react";
import { v4 as uuid } from "uuid";
import AddForm from "./AddForm/AddForm";

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
    items: [
      {
        id: uuid(),
        title: "Learning ReactJS!",
        completed: true,
        createdAt: Date.now(),
      },
      {
        id: uuid(),
        title: "Learning Ember!",
        completed: false,
        createdAt: Date.now(),
      },
    ],
    // term: "",
    filter: "",
    // number: '',
  };

  handleDelete = (id) => {
    // ???
    console.log(id);
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id),
    }));
  };

  //

  // toggleCompleted = (id) => {
  //   this.setState((prevState) => {
  //     const newItems = prevState.items.map((item) => {
  //       if (item.id === id) {
  //         return {
  //           ...item,
  //           completed: !item.completed
  //         };
  //       }
  //       return item;
  //     });
  //     // console.log(newItems);
  //     return {
  //       items: newItems,
  //     };
  //   });
  // };

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
    // evt.preventDefault();
    // alert(JSON.stringify(this.state, null, 2));
    if (!term) {
      alert("Поле не может быть пустым!");
      return;
    }

    const isDuplicate = this.state.items.some(
      (item) => item.title === term
    );
    // const isDuplicate = this.contacts.items.some(item => item.name === this.state.name || item.number === this.state.number );
    // console.log(isDuplicate, 'isDuplicate');
    if (isDuplicate) {
      // some code
      alert("Такок дело уже существует " + term);
      return;
    }

    const newTodo = {
      id: uuid(),
      title: term,
      completed: false,
      createdAt: Date.now(),
    };
    // console.log(newTodo);

    this.setState((prevState) => {
      // console.log([newTodo, ...prevState.items]);
      const newItems = [newTodo, ...prevState.items];
      // const newArray = [...prevState.items, newTodo];
      // const deepCopy = JSON.parse(JSON.stringify(newTodo));
      return { items: newItems };
    });
  };

  render() {
    const { items, filter } = this.state;
    const itemsCount = items.length;
    // const toDoCompletedCount = this.state.items.filter(item => item.completed).length;
    const toDoCompletedCount = items.reduce(
      (acc, item) => (item.completed ? acc + 1 : acc),
      0
    );
    const formattedFilter = filter.toLowerCase().trim();
    const filteredItems = items.filter((item) =>
      item.title.toLowerCase().includes(formattedFilter)
    );
    // dbhello
    // console.log(toDoCompletedCount);

    return (
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 text-center">
            <h3>
              All: {itemsCount} || Completed: {toDoCompletedCount}
            </h3>


            <AddForm handleSubmit={this.handleSubmit} />

            <input
              name="filter"
              type="text"
              onChange={this.handleChange}
              value={this.state.filter}
            />
            <ul>
              {filteredItems.map((item) => (
                <li
                  key={item.id}
                  className={
                    item.completed ? "text-decoration-line-through" : ""
                  }
                >
                  <div className="flex justify-content-between">
                    <span onClick={() => this.toggleCompleted(item.id)}>
                      {item.title}
                    </span>
                    {/*<button onClick={() => this.toggleCompleted(item.id)}>*/}
                    {/*  Toggle*/}
                    {/*</button>*/}
                    <button onClick={() => this.handleDelete(item.id)}>
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default Todos;
