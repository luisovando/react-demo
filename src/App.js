import {Component} from 'react';
import './App.css';

class Counter extends Component {
  constructor () {
    super ();
    this.state = {counter: 1};
    /**
     * State facts
     * 1. Is an inmmutable property
     * 2. Is asynchronous
     * 3. Just can be updated from setState method
     */

    // Update counter property every second
    setInterval(() => {
      this.setState({counter : this.state.counter + 1})
    }, 1000)
  }
  render () {
    return <CounterTemplate label={this.props.label} counter={this.state.counter} />
  }
}

class CounterTemplate extends Component {
  render() {
    return <span>{this.props.label} : {this.props.counter}</span>;
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
