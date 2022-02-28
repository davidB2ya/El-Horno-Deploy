import './App.css';
import { Routes, Route } from "react-router-dom";

// imports views
import Home from "./views/Home/Home.jsx"
import Products from './views/Products/Products';
import IamChef from './views/IamChef/IamChef';
import Login from "./views/Login/Login.jsx"
import Buys from './views/Buys/Buys';
import Dashboard from './views/Dashboard/Dashboard';
import RegisterUser from './views/Login/RegisterUser';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path= '/' element={<Home/>} exact/>
        <Route path= '/home' element={<Home/>} exact/>
        <Route path= '/login' element={<Login/>} exact/>
        <Route path= '/register' element={<RegisterUser/>} exact/>

        <Route path="/products" element={<Products/>}/>
        <Route path="/chef" element={<IamChef/>}/>
        <Route path="/buys" element={<Buys/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    </div>
  );
}

export default App;
