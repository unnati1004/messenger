// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Register from "./components/Register";
import Login from "./components/Login";
import { Home } from './components/Home';
import  CollapsibleExample from './components/CollapsibleExample';

function App() {
  return (
    <div className="App">
      <CollapsibleExample/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
