import logo from './logo.svg';
import './App.css';
import Header from './components/Header/images/Header';
import Products from './components/Products/Products';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(0)
    function setCartCount (){
        const newCount = count + 1;
        setCount(newCount)
    }
  return (
    <div className="App">
      <Header cartValue={count}></Header>
      <Products setCartCount={setCartCount}></Products>
      <Footer></Footer>
    </div>
  );
}

export default App;
