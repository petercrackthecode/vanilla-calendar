import "./App.css";
import Day from "./components/Day";

function App() {
  return (
    <div className="App">
      <Day date={new Date()} />
    </div>
  );
}

export default App;
