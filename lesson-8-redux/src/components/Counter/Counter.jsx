import {connect} from 'react-redux';
import {decrement, increment} from "../../redux/counter/counter.actions";


const Increment = ({handleIncrement}) => (
    <button className="bg-blue-500 text-white px-2 py-2" onClick={handleIncrement}>
        +
    </button>
);

const Decrement = ({handleDecrement}) => (
    <button className="bg-red-500 text-white px-2 py-2" onClick={handleDecrement}>
        -
    </button>
);

const Value = ({value}) => <span>{value}</span>

const Counter = ({value, increment, decrement}) => {
    // const handleIncrement = (evt) => {
    //   console.log("click");
    //   // dispatch(increment)
    // };
    //
    // const handleDecrement = (evt) => {
    //   console.log("click");
    //   // dispatch(decrement)
    // };

    return (
        <div className="container">
            <div className="row">
                <div className="col-6 offset-3 text-center">
                    <Decrement handleDecrement={decrement}/>
                    <Value value={value}/>
                    <Increment handleIncrement={increment}/>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    // console.log(state);
    return {
        value: state.counter,
    }
}

const mapDispatch = (dispatch) => ({
    increment: () => dispatch(increment),
    decrement: () => dispatch(decrement),
})

// const mapDispatch = {
//   increment,
//   decrement
// }

export default connect(mapStateToProps, mapDispatch)(Counter);
