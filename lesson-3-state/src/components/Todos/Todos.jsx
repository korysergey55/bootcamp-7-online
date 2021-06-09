import { Component } from "react";
import { v4 as uuid } from "uuid";

/*
interface ITodos {
id: uuid or shortId;
title: string;
completed: boolean;
createdAt: Date;
}
*/

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
  };

  handleDelete = (id) => {
    // ???
    console.log(id);
    this.setState((prevState) => ({
      items: prevState.items.filter((item) => item.id !== id),
    }));
  };

  render() {
    const itemsCount = this.state.items.length;
    // const toDoCompletedCount = this.state.items.filter(item => item.completed).length;
    const toDoCompletedCount = this.state.items.reduce((acc, item) =>
      item.completed ? acc + 1 : acc,
        0
    );
    console.log(toDoCompletedCount);

    return (
      <div className="container">
        <div className="row">
          <div className="col-6 offset-3 text-center">
            <h3>All: {itemsCount} || Completed: {toDoCompletedCount}</h3>
            <ul>
              {this.state.items.map((item) => (
                <li
                  key={item.id}
                  className={
                    item.completed ? "text-decoration-line-through" : ""
                  }
                >
                  <div className="flex justify-content-between">
                    <span>{item.title}</span>
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
