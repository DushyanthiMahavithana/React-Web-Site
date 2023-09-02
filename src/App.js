import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Pages/Home';
import Recipes from './Pages/Recipes';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from './Pages/About';
import Contact from './Pages/Contact';


function App() {
  return (
    <div className="App">
      <Router>
       <Navbar/>
         <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/recipes' element={<Recipes/>} />
         <Route path='/about' element={<About/>} />
         <Route path='/contact' element={<Contact/>} />
         </Routes>
         <Footer/>
      </Router>
      
    </div>
  );
}

export default App;
