import './App.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import About from './component/about';
import Home from './component/home';
import Profile from './component/profile';
import Navbar from './component/navbar';
// import Nopage from './component/nopage';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='*' element={<Nopage />} /> */}
        </Routes>
        <h1>this is a footer</h1>
      </Router>
    </div>
  );
}

export default App;
