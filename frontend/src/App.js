import logo from './logo.svg';
import './App.css';
import LandingPage from './Components/LandingPage';
import Navbar from './Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import YourSong from './Components/Algorithm';
function App() {
  return (
<>
    <Navbar/>
    <Routes>
    <Route path="/" element={<LandingPage/>}/>
    <Route path="find-your-song" element={<YourSong/>}/>
    </Routes>
</>
  );
}

export default App;
