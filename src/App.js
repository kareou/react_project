//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './component/navbar';
import All from './component/all';
import './component/component.css'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <All/>
      </Router>
    </div>
  );
}

export default App;
