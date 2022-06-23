
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import {Outlet, Route,Routes} from 'react-router';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Login from './Pages/Login';
import SignUp from './Pages/Signup';
import Products from './Pages/Products';
import Navigation from './components/navigationcomp/Navigation';
function App() {
  return (
    <div className="App">
    
     <BrowserRouter>
      <Routes>
      <Route path="/" element={<Navigation/>}>
      <Route index element={<Home />} />
      <Route path='/home'  element={<Home />} />
      <Route path="/cart" element={<Cart/>} ></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<SignUp/>}></Route>
      <Route path="/products" element={<Products/>}></Route>
      </Route>
      </Routes>
     </BrowserRouter>
     <Outlet></Outlet>
    </div>
  );
}

export default App;
