import classes from "./Counter.module.css";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.count);

  const toggle = useSelector((state) => state.toggleCounter);

  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch({ type: "increment" });
  };

  const decrementHandler = () => {
    dispatch({ type: "decrement" });
  };
  const increaseByFive = () => {
    dispatch({ type: "increase-by-five", payload: 10 });
  };
  const toggleCounterHandler = () => {
    dispatch({ type: "toggle", payload: false });
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
