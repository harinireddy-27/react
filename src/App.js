import logo from './logo.svg';
import './App.css';
import Hello from './components/Greet';
import Message from './components/Deconstruct';
import Event from './components/Event';
import Child from './components/Child';
import Name from './components/Props';
import UserGreeting from './components/Conditional';
import NameList from './components/ListKeys';
import Index from './components/Index';
import Inline from './components/Inline';
import Forms from './components/Forms';
import Likes from './components/State';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Likes />
        <Name name = 'Harini Reddy' />
        <Name name = 'Virat Kohli' />
        <Name name = 'Padikal'/>
        <Event />
        <Hello />
        <Message name="BOB" />
        <Child showMessage={() => alert("Hello from Parent!")} />
        <UserGreeting />
        <NameList />
        <Index />
        <Inline />
        <Forms />
        <p>
          hello-world!
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
    </div>
  );
}


export default App;
