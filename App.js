//import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './component/navbar';
import About from './component/about';
import Login from './component/login';
import Profile from './component/profile';
import Service from './component/service';
import Home from './component/home';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='element' element={<Login/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
