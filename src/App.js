import logo from './logo.svg';
import './App.css';
import Calculator from './components/calculator';
// this is just a test
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Calculator firstValue={6} secondValue={5} operator={"mul"}/>
      </header>
    </div>
  );
}

export default App;
