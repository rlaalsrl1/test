import logo from './logo.svg';
import './App.css';
import Welcome from './4월3일/Welcome';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        
      </header>
      <Welcome name="Mike" />
      <Welcome name="Steve"/>
      <Welcome name="Jana"/>
      <Welcome name="인제"/>
    </div>
    
  );
  
}


export default App;
