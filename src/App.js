import logo from "./logo.svg";
import "./App.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container--counter">
          <Display />
          <Buttons />
        </div>
      </header>
    </div>
  );
}

export default App;
