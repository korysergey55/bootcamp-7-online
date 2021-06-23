import {Component} from "react";
import {v4 as uuid} from "uuid";
import {connect} from "react-redux";

import AddForm from "./AddForm/AddForm";
import TodosStats from "./TodosStats/TodosStats";
import TodosFilter from "./TodosFilter/TodosFilter";
import TodosList from "./TodosList/TodosList";
import TodosStatusFilter from "./TodosStatusFilter/TodosStatusFilter";
// import {TodosStatusEnum} from "./todos-status.enum";
import Modal from "../../shared/components/Modal/Modal";
import {addNewToDo, removeToDo, toggleCompleted} from "../../redux/todos/todos.actions";

class Todos extends Component {
    state = {
        // items: [],
        // filter: "",
        // status: TodosStatusEnum.ALL,
        showModal: false,
    };

    // componentDidMount() {
    //   console.log("[componentDidMount]");
    //   const items = localStorage.getItem("items");
    //   if (items) {
    //     const parsedItems = JSON.parse(items);
    //     // console.log(parsedItems);
    //     this.setState({ items: parsedItems });
    //   }
    // }
    //
    // componentDidUpdate(prevProps, prevState) {
    //   console.log("[componentDidUpdate]");
    //   if (prevState.items !== this.state.items) {
    //     // console.log(prevState.items, "prevState");
    //     // console.log(this.state.items, "state");
    //     localStorage.setItem("items", JSON.stringify(this.state.items));
    //   }
    // }
    //
    // handleDelete = (id) => {
    //   this.setState((prevState) => ({
    //     items: prevState.items.filter((item) => item.id !== id),
    //   }));
    // };

    // toggleCompleted = (id) => {
    //     this.setState((prevState) => ({
    //         items: prevState.items.map((item) =>
    //             item.id === id
    //                 ? {
    //                     ...item,
    //                     completed: !item.completed,
    //                 }
    //                 : item
    //         ),
    //     }));
    // };

    handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value});
    };

    // handleSubmit = (term) => {
    //     if (!term) {
    //         alert("Поле не может быть пустым!");
    //         return;
    //     }
    //
    //     const isDuplicate = this.props.originalItems.some((item) => item.title === term);
    //     if (isDuplicate) {
    //         alert("Такок дело уже существует " + term);
    //         return;
    //     }
    //
    //     const newTodo = {
    //         id: uuid(),
    //         title: term,
    //         completed: false,
    //         createdAt: Date.now(),
    //     };
    //
    //     this.props.addNewToDo(newTodo);
    //     this.setState({showModal: false})
    //     // this.setState((prevState) => {
    //     //   const newItems = [newTodo, ...prevState.items];
    //     //   return { items: newItems, showModal: false };
    //     // });
    // };

    toggleModal = () => {
        this.setState((prevState) => ({showModal: !prevState.showModal}));
    };

    render() {
        // console.log("[render()]");
        const {status } = this.state;
        const {items, toDoCompletedCount, itemsCount} = this.props;

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

                        {
                            this.props.originalItems.length > 2 && (
                                <TodosFilter/>
                            )
                        }

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
    const items = state.todos.items;
    const filter = state.todos.filter;

    const itemsCount = items.length;
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
        // filter: state.todos.filter,
    }
}

// const mapDispatch = (dispatch) => {
//   return {
//     addNewToDo: (payload) => dispatch(addNewToDo(payload))
//   }
// }

const mapDispatch = {
    handleDelete: removeToDo,
    toggleCompleted
}

export default connect(mapState, mapDispatch)(Todos);
