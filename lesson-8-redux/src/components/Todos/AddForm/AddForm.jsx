import React, {Component} from "react";
import PropTypes from "prop-types";
import {v4 as uuid} from "uuid";
import {connect} from "react-redux";
import {addNewToDo} from "../../../redux/todos/todos.actions";

class AddForm extends Component {
    static propTypes = {
        addNewToDo: PropTypes.func.isRequired,
        toggleModal: PropTypes.func.isRequired,
        items: PropTypes.array
    };

    // typeof handleSubmit !== 'func' ? 'error': '';
    state = {
        term: "",
    };

    handleChange = (evt) => {
        this.setState({[evt.target.name]: evt.target.value});
    };

    // onSubmit = (evt) => {
    //   evt.preventDefault();
    //   // console.log(this.props)
    //   this.props.handleSubmit(this.state.term);
    //   this.setState({ term: "" });
    // };

    handleSubmit = (evt) => {
        evt.preventDefault();
        const {term} = this.state;

        if (!term) {
            alert("Поле не может быть пустым!");
            return;
        }

        const isDuplicate = this.props.items.some((item) => item.title === term);
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

        this.props.addNewToDo(newTodo);
        this.props.toggleModal();
        // this.setState((prevState) => {
        //   const newItems = [newTodo, ...prevState.items];
        //   return { items: newItems, showModal: false };
        // });
    };


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    name="term"
                    type="text"
                    onChange={this.handleChange}
                    value={this.state.term}
                />
                {/*<input*/}
                {/*  name="number"*/}
                {/*  type="text"*/}
                {/*  onChange={this.handleChange}*/}
                {/*  value={this.state.number}*/}
                {/*/>*/}
                <button type="submit" className="px-3 py-3 bg-blue-600 text-white rounded-md ml-2">
                    Add
                </button>
            </form>
        );
    }
}

const mapStateToProps = (state) => ({
    items: state.todos.items,
});

const mapDispatchToProps = {
    addNewToDo,
};

export default connect(mapStateToProps, mapDispatchToProps)(AddForm);
