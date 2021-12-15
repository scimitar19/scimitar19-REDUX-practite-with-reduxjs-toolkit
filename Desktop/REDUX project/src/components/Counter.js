import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterSlice } from "../store/index.js";

const Counter = () => {
  const dispatch = useDispatch();

  const counter = useSelector((state) => state.counter.counter);
  const toggle = useSelector((state) => state.counter.toggleCounter);

  const incrementHandler = () => {
    dispatch(counterSlice.actions.increment());
  };

  const decrementHandler = () => {
    dispatch(counterSlice.actions.decrement());
  };
  const increaseByFive = () => {
    dispatch(counterSlice.actions.increase(10));
  };
  const toggleCounterHandler = () => {
    dispatch(counterSlice.actions.toggleCounter());
    // useSelector((action) => action.type === "increment");
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggle && <div className={classes.value}>{counter}</div>}
      <div>
        <button disabled={!toggle} onClick={incrementHandler}>
          Increment
        </button>
        <button disabled={!toggle} onClick={increaseByFive}>
          Increase by 10
        </button>
        <button disabled={!toggle} onClick={decrementHandler}>
          Decrement
        </button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment;
//   }
//   decrementHandler() {
//     this.props.decrement;
//   }
//   toggleCounterHandler() {
//     this.props.reset;
//   }
//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler.bind(this)}>
//           Toggle Counter
//         </button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//     reset: () => dispatch({ type: "reset" }),
//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
