import React from "react";
import "./Home.scss";
// import Menu from "../../components/menu/Menu";
// import Header from "../../components/header/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <div className="home">
      <div className="home-flex-box">
        <p className="home-title">Hồ sơ danh mục SCL</p>
        <div className="home-flex-box home-items-right">
          <div className="home-box-search">
            <input type="text"  placeholder="Tìm kiếm ..."/>
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="home-search-icon"
            />
          </div>
          <button className="home-button-add ">
            <span className="home-button-add-icon">+</span>
            <span>Thêm mới</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
