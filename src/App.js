import {Component} from 'react';
import './App.css';

class App extends Component {
  handleClick (e) {
    // console.log(e.nativeEvent) // recovery the native event
    alert ('Hi, guys');
  }

  render () {
    return (
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>Hi, there!</button>
      </div>
    );
  }
}

export default App;
