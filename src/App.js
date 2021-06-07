import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class MainTitle extends Component {
  render() {
    return <h1>{this.props.title}</h1>;
  }

}

class CardInfo extends Component {
  render() {
    const {description, discount, doctorInfo, isAvailable, imageProfile, prices, totalLikes} = this.props
    const availableStatus = (isAvailable) ? 'Si' : 'No'
    const mappedPrices = prices.map(discount)
    
    return <div>
        <p><strong>{description}</strong></p>
        <p>Total likes: {totalLikes}</p>
        <p>Is available?: {availableStatus}</p>
        <p>Prices: {mappedPrices.join(', ')}</p>
        <p>Speciality: {doctorInfo.speciality}</p>
        {imageProfile}
      </div>;
  }

}

function App() {
  return <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MainTitle title='Hello world from React!' />
        <CardInfo 
          description='Edit src/App.js and save to reload.' /* String prop */
          discount={(price) => price - ((price * 10) / 100)} /* Function prop */
          isAvailable={true} /* Boolean prop, true default value if doesn't have */
          imageProfile={
            <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
              Learn React
            </a>
          } /* Element prop */
          prices={[1000,2000,3000]} /* Array prop */
          doctorInfo = {{name: 'First value', speciality: 'Second value'}} /* Object prop */
          totalLikes={2} /* Number prop */
        />
      </header>
    </div>;
}

export default App;