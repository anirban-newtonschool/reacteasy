import logo from './logo.svg';
import './App.css';
import TextBox from './component/textBox'
import Table from './component/table';
function App() {
  // var data=[
  //   {name:"anirban",roll:12},
  //   {name:"vasudha",roll:13},
  //   {name:"Ram",roll:14}
  // ]
  return (
    <div className="App">
      {/* <TextBox namedata={data}/> */}
      <Table />
      

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload changing.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
