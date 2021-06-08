import {Component} from 'react';
import './App.css';

class Box extends Component {
  render () {
    return <div style={{border: '1px solid #090', margin: 5, padding: 5}}>
      {this.props.children}
    </div>;
  }
}

class App extends Component {
  render () {
    // The children props should use to create layouts
    return (
      <div className="App">
        <h4>Children props</h4>
        <Box>Hi, I'm a children</Box>
        <Box>Hi, I'm a other children</Box>
      </div>
    );
  }
}

export default App;
