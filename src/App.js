import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class CardInfo extends Component {
  render() {
    return <h2>{this.props.description}</h2>;
  }
}

/**
 * Set CardInfo default prop values
 */
CardInfo.defaultProps = {
  description: 'default value'
}

function App() {
  return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CardInfo />
      </header>
    </div>;
}

export default App;