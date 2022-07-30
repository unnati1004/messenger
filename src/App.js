// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";
import {Auth} from './components/context/auth';
import { useContext } from 'react';
import { Home } from './components/Home';
import Profile  from './components/Profile';
import  CollapsibleExample from './components/CollapsibleExample';
import { auth } from './firebase';
// import PrivateRoute from './components/PrivateRoute';
function App() {
  const {user} = useContext(Auth);
  return (
    <div className="App">
      <CollapsibleExample/>
      <Routes>
        {user?<Route exact path="/home" element={<Home/>}/>:<Route exact path="/profile" element={<Profile/>}/>}
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/" element={<Login/>}/>
      </Routes>
    </div>
  );
}

export default App;
