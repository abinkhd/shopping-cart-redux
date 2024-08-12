import './App.css';
import ShoppingCart from './component/ShoppingCart';
import useProducts from './services/useProducts';

function App() {
useProducts();
  return (
    <div className="App">
      {/* <Login/> */}
      <ShoppingCart/>
      {/* <RegisterForm/> */}
    </div>
  );
}

export default App;