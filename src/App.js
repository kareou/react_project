//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Navbar from './component/navbar';
import All from './component/all';

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
