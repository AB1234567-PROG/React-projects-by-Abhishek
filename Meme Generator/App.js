import { Routes,Route } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Home from './pages/Home';
import MemeCard from './components/Card';
import Edit from './pages/Edit';

function App() {
  return (
    <div className="App">
      <h1>Meme Generator</h1>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/edit' element={<Edit/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
