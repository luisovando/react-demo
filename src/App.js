import './App.css';

function App () {
  const numberList = [1,1,3,4,5]

  return (
    <div className="App">
      <h4>Using lists</h4>
      {numberList.map((number, index) => {
        return <p key={index}>I'm the number {number}</p>
      })}
    </div>
  );
}

export default App;
