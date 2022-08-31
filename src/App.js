import React from "react";
import "./App.scss";
import Menu from "./components/menu/Menu";
import Header from "./components/header/Header";
import Home from "./pages/home/Home";
import { useState } from "react";

function App() {
  
  const [isShowMenu, setIsShowMenu] = useState(true);

  const callbackFunction = (childData) => {
    setIsShowMenu(pre => childData)
    console.log(isShowMenu)
  }
  

  return (
    <div className="App">
      <Header parentCallback={() => callbackFunction}/>
      <Menu />
      <Home />
    </div>
  );
}

export default App;
