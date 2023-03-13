import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { About } from './components/About';
import { Navigation } from './components/Navigation';
import { CharacterList } from './components/CharacteresList';
import { Character } from './components/Character';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/characters' element={<CharacterList />} />
          <Route path='/characters/:characterId' element={<Character />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </header>
    </div >
  );
}

export default App;
