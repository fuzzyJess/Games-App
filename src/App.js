import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from "react";
import Header from './components/Header';
import NavBar from './components/Nav_bar';
import Home from './components/Home'
import Reviews from './components/Reviews';
import Review from './components/Review';
import Categories from './components/Categories';
import Category from './components/Category';
import SignIn from './components/SignIn';
import ErrorPage from './components/ErrorPage';

function App() {
  const [user, setUser] = useState({
    username: 'guest',
    name: 'Guest',
    avatar_url:
      'https://sysnative.nyc3.cdn.digitaloceanspaces.com/data/avatars/h/33/33931.jpg?1563048380',
  });

  return (

  <BrowserRouter> 
    <div className="App">
      <Header />
      <NavBar  user={user} />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/reviews'element={<Reviews />} />
          <Route path='/reviews/:review_id' element={<Review user={user} />} />
          <Route path='/categories' element={<Categories />} />
          <Route path='/categories/:category' element={<Category />} />
          <Route path='/users' element={<SignIn user={user} setUser={setUser} />}/>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
    </div>
  </BrowserRouter> 
  );
}

export default App;
