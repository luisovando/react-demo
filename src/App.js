import logo from './logo.svg';
import './App.css';

function MainTitle (props) {
  return <h1>{props.title}</h1>
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MainTitle title='Hello world from React!'/>
        <strong>
          Edit <code>src/App.js</code> and save to reload.
        </strong>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
