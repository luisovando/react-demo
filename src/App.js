import {Component} from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super ();
    this.state = {mouseX: 0, mouseY: 0};
    // this.handleMouseMove = this.handleMouseMove.bind(this)
  }

  handleMouseMove = (e) => {
    const {clientX, clientY} = e;
    /**
     * TypeError: Cannot read property 'setState' of undefined
     * Context of `this` is wrong
     * Fixed
     * 1. Binding context using bind() method on constructor method: this.handleMouseMove = this.handleMouseMove.bind(this)
     * 2. Using arrow function. This always bind the context from declaration
     */
    this.setState ({mouseX: clientX, mouseY: clientY});
  }

  handleClick (e) {
    alert ('Hi, guys');
  }

  render () {
    return (
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>Hi, there!</button>
        <div
          onMouseMove={this.handleMouseMove}
          style={{border: '1px solid #000', marginTop: 10, padding: 10}}
        >
          <p>{this.state.mouseX}, {this.state.mouseY}</p>
        </div>
      </div>
    );
  }
}

export default App;
