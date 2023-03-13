import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about' element={<About/>} />
        </Routes>
      </header>
    </div >
  );
}

export default App;
