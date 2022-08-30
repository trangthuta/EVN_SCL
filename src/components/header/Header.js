import React from "react";
import "./Header.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase} from "@fortawesome/free-solid-svg-icons";


function Header() {
  return (
    <div className="header">
      <div className="header-flex">
        <div className="header-flex">
          <FontAwesomeIcon icon={faBars} className= "header-icon"/>
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
