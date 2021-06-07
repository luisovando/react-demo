import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class MainTitle extends Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }

}

class Subtitle extends Component {
  render() {
    return <div>
        <p><strong>{this.props.text}</strong></p>
        <p>Total likes: {this.props.totalLikes}</p>
        <p>Is available?: {this.props.isAvailable}</p>
      </div>;
  }

}

function App() {
  return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MainTitle title='Hello world from React!' />
        <Subtitle totalLikes={2} text='Edit src/App.js and save to reload.' isAvailable={true} />
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>;
}

export default App;