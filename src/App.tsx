import "./App.css";
import { useDispatch } from "react-redux";
import { State } from "./state";
import { useSelector } from "react-redux";
import { deposit, withdraw, bankrupt } from "./state/action-creators";

function App() {
  const dispatch = useDispatch();
  const { bank } = useSelector((state: State) => state);

  return (
    <div className="App">
      <h1>{bank}</h1>
      <button onClick={() => dispatch(deposit(100))}>Deposit</button>
      <button onClick={() => dispatch(withdraw(100))}>Withdraw</button>
      <button onClick={() => dispatch(bankrupt())}>Bankrupt</button>
    </div>
  );
}

export default App;
