import { useReducer } from "react";

type stateAc = {
  count: number;
};
type UpdateCount = {
  type: "increment" | "decrement";
  payload: number;
};
type resetCount = {
  type: "reset";
};
//discriminated union
type ActionAc = UpdateCount | resetCount;
const initialState = {
  count: 0,
};

function reducerHook(state: stateAc, action: ActionAc) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };
    case "decrement":
      return { count: state.count - action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Reducers = () => {
  const [state, dispatch] = useReducer(reducerHook, initialState);
  return (
    <>
      <div> Using Reducers</div>
      Count: {state.count}
      <button
        onClick={() => {
          dispatch({ type: "increment", payload: 10 });
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch({ type: "decrement", payload: 10 });
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch({ type: "reset" });
        }}
      >
        Decrement
      </button>
    </>
  );
};

export default Reducers;
