
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Footer from './components/Footer';
import Contact from './pages/Contact';
function App() {
  return (
    // Install npm install react-router-dom
    // https://script.google.com/macros/s/AKfycbxAxzNh2zOv50G45hO6J-76ykwi8d_-jeOp1e3I4uuih95zSo79FBO4lZvOXLiDBURAdQ/exec
    <div className="App">
        <Router> 
          <Navbar/>
             <Routes>
                  <Route path='/' exact Component={Home} />
                  <Route path='/menu' exact Component={Menu} />
                  <Route path='/about' exact Component={About} />
                  <Route path='/contact' exact Component={Contact} />
                
             
             </Routes>
             <Footer/>
        </Router>  



    </div>
  );
}

export default App;
