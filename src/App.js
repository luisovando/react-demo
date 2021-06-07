import {Component} from 'react';
import './App.css';

class Counter extends Component {
  constructor (props) {
    super (props);
    this.state = {counter: this.props.initialCounter};
    /**
     * State facts
     * 1. Is an inmmutable property
     * 2. Is asynchronous
     * 3. Just can be updated from setState method
     */

    // Update counter property every second
    setInterval (() => {
      this.setState ({counter: this.state.counter + 1});
    }, 1000);
  }

  render () {
    return (
      <CounterTemplate label={this.props.label} counter={this.state.counter} />
    );
  }
}

class CounterTemplate extends Component {
  render () {
    return <span>{this.props.label} : {this.props.counter}</span>;
  }
}

Counter.defaultProps = {
  initialCounter: 0
}

function App () {
  return (
    <div className="App">
      <h1>Primer componente con state</h1>
      <Counter label="Cumulative" initialCounter={50} />
    </div>
  );
}

export default App;
