import {Component} from 'react';
import './App.css';

class Counter extends Component {
  state = {counter: 1};
  
  render () {
    return <span>{this.props.label} : {this.state.counter}</span>;
  }
}

function App () {
  return (
    <div className="App">
      <h1>Primer componente con state</h1>
      <Counter label="Cumulative" />
    </div>
  );
}

export default App;
