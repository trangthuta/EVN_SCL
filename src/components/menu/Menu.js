import React from "react";
import "./Menu.scss";
import categories from "./Menu.Items";
import {useLayoutEffect, useRef, useState} from 'react';
// import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Menu() {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);


  useLayoutEffect(() => {
    setWidth(ref.current.offsetWidth);
  }, []);

  return (
    <div className="menu"  ref={ref}>
      {window.screen.availWidth- width}
      <img
        className="menu-logo"
        src="https://www.genco3.com/Data/Sites/1/media/logo/logo.png"
      />
      {categories.map((menu) => {
        return (
          <ul key={menu.id} className="menu-level1">
            <li>
              <a> {menu.name}</a>
            <ul className="menu-level2">
            {menu.children.map((menuChild) => {
                return (
                 
                    <li key={menuChild.id} className = "menu-level2-name">
                      <span>
                        <FontAwesomeIcon
                          icon={menuChild.icon}
                          className="menu-icon"
                        />
                      </span>
                      <a>{menuChild.name}</a>
                    </li>
                  
                );
              })}
            </ul>
            </li>
          </ul>
        );
      })}
    </div>
  );
}

export default Menu;
