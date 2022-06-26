
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Contact } from './components/pages/Contact';
import { Navbar } from './components/com-comp/Navbar';
function App() {
  return (
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home></Home>}/>
        <Route path="/about" element={<About></About>}/>
        <Route path="/contact" element={<Contact></Contact>}/>
      </Routes>
    </Router>
  );
}

export default App;
