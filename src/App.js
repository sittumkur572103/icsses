import './App.css';
import {Route, Routes, Navigate} from "react-router-dom"
import Home from "./routes/home"
import About from './routes/about';
import Committe from './routes/committe';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/Committees" element={<Committe/>}/>
        <Route path='/Paper-Submission' element={<Navigate to="/home" replace />}/>
        <Route path='/Registration' element={<Navigate to="/home" replace />}/>
        <Route path='/Contact-us' element={<Navigate to="/home" replace />}/>
      </Routes>
    </div>
  );
}

export default App;
