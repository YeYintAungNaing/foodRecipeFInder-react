import "./style.css"
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home"
import Favourites from "./pages/Favourites"
import Nav from "./components/Nav";
import Information from "./pages/Information";

function App(){

  return ( 
    <div className="whole-container">
      <Nav className="navBar"/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/favourites" element={<Favourites/>}/>
        <Route path="/recipe-item/:id" element={<Information/>}/>
      </Routes>
    </div>
  );
}

export default App





