import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import NavBar from './components/Nav_bar';
import Home from './components/Home'

function App() {
  return (

  <BrowserRouter> 
    <div className="App">
      <Header />
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
    </div>
  </BrowserRouter> 
  );
}

export default App;
