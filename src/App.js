import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Register from './pages/Register';
import Signin from './pages/Signin';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element ={<Register />}/>
          <Route path="/Signin" element ={<Signin />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
