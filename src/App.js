import React from "react";
import "./App.scss";
import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Home from "./pages/homePage/Home";
import AddHM from "./pages/addHM/AddHM";
import { useState } from "react";


function App() {
  
  const [isShowMenu, setIsShowMenu] = useState(true);


  let callbackFunction = (childData) => {
    setIsShowMenu(childData)
  }
  

  return (
    <div className="App">
      <Header parentCallback={callbackFunction}/>
      <Menu onShowmenu = {isShowMenu}/>
      {/* <Home /> */}
      <AddHM/>
      
    </div>
  );
}

export default App;
