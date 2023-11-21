import './App.css';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Menu from './Menu';
import {Routes, Route, BrowserRouter} from 'react-router-dom';
function App() {
  return (
    < BrowserRouter >
    <Header />
    <Header />
    <Routes>
      <Route path="/"  element={<Home />}  />
      <Route path="/menu"  element={<Menu />}  />
    </ Routes >
    <Footer />
  </ BrowserRouter >  

  );
}

export default App;
