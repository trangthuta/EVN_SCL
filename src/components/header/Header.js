import React, { useState } from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {   faBars ,faEnvelopeCircleCheck,faUser, faAngleDown}  from "@fortawesome/free-solid-svg-icons";


function Header(parentCallback) {
  const [width, setWidth] = useState(50) ;
  const [isShow, setIsShow] = useState(false) ;
  
  
  const handleShowMenu = (e) =>{
   setIsShow(pre=>!pre)  
  width === 50?setWidth(pre=> e) :setWidth(pre=> 50) 
  // if(isShow) LL setWidth(pre=> e) 
    //  if(status) setWidth(pre=> e) 
     console.log(isShow +"-"+ width);
     parentCallback(isShow)
     
  }
  return (
    <div className="header" style={{ paddingRight : width}}>
      <div className="header-flex">
        <div className="header-flex">
          <FontAwesomeIcon icon={faBars} className= "header-icon header-icon-menu" onClick={()=>handleShowMenu(300)}/>
          <p className="header-title">Quy trình phê duyệt danh mục sửa chữa lớn</p>
        </div>
        <div className="header-flex">
          <FontAwesomeIcon icon={faEnvelopeCircleCheck}  className= "header-icon"/>
          <FontAwesomeIcon icon={faUser} className= "header-icon"/>
          <div className="header-user-info">
            <p>
              Nguyễn Văn A
            </p>
            <p>
            Chuyên viên
            </p>
          </div>
          <FontAwesomeIcon icon={faAngleDown}  className= "header-icon-arrow-down"/>
        </div>
      </div>
    </div>
  );
}

export default Header;
