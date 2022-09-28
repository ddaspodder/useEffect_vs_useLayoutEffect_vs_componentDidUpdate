import "./App.css";
import WithUseEffect from "./lifecycle/WithUseEffect";
import WithUseLayoutEffect from "./lifecycle/WithUseLayoutEffect";
import WithComponentDidUpdate from "./lifecycle/WithComponentDidUpdate";

function App() {
  return (
    <div className="App">
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-evenly",
        }}
      >
        <WithUseEffect />
        <WithUseLayoutEffect />
        <WithComponentDidUpdate />
      </div>
    </div>
  );
}

export default App;
