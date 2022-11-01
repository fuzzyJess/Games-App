import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header';
import NavBar from './components/Nav_bar';
import Home from './components/Home'
import Reviews from './components/Reviews';
import Review from './components/Review';
import Categories from './components/Categories';
import Category from './components/Category';

function App() {
  return (

  <BrowserRouter> 
    <div className="App">
      <Header />
      <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reviews' element={<Reviews />} />
          <Route path='/reviews/:review_id' element={<Review />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:category' element={<Category />} />
        </Routes>
    </div>
  </BrowserRouter> 
  );
}

export default App;
