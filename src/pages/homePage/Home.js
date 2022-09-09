import React from "react";
import "./Home.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import option from "./Home.StatusOption";
import HoSo from "../../components/api/Home.DataHoSo";


function Home() {
  return (
    <div className="home">
      <div className="home-flex-box">
        <p className="home-title">Hồ sơ danh mục SCL</p>
        <div className="home-flex-box home-items-right">
          <div className="home-box-search">
            <input type="text" placeholder="Tìm kiếm ..." />
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
      <div className="home-table">
        <table>
          <tr>
            <th>Thao Tác</th>
            <th>Mã hồ sơ</th>
            <th>Tên hồ sơ danh mục SCL</th>
            <th>Đơn vị thực hiện</th>
            <th>Chuyên viên thực hiện</th>
            <th>Hạn thực hiện</th>
            <th>Trạng thái</th>
            <th>Đơn vị thẩm định</th>
            <th>Chuyên viên thẩm định</th>
          </tr>

          <tr>
            <td></td>
            <td>
              <input type="text" placeholder="Tìm kiếm......" />
            </td>
            <td>
              <input type="text" placeholder="Tìm kiếm..." />
            </td>
            <td>
              <input type="text" placeholder="Tìm kiếm..." />
            </td>
            <td>
              <input type="text" placeholder="Tìm kiếm..." />
            </td>
            <td>
              <input type="date" />
            </td>
            <td>
              <select>
                {option.map((option) => {
                  return <option value={option.value} key={option.id}>{option.content}</option>;
                })}
              </select>
            </td>
            <td>
              <input type="text" placeholder="Tìm kiếm..." />
            </td>
            <td>
              <input type="text" placeholder="Tìm kiếm..." />
            </td>
          </tr>
            {HoSo.map((HoSo) => {
              return (
                <tr key={HoSo.Id}>
                  <td className="home-table-function">{HoSo.ThaoTac}</td>
                  <td>{HoSo.MaHS}</td>
                  <td>{HoSo.TenHS}</td>
                  <td>{HoSo.DVTH}</td>
                  <td>{HoSo.CVTH}</td>
                  <td>{HoSo.HanThucHien}</td>
                  <td>{HoSo.TrangThai}</td>
                  <td>{HoSo.DVTD}</td>
                  <td>{HoSo.CVTD}</td>
                </tr>
              );
            })}
          
        </table>
      </div>
    </div>
  );
}

export default Home;
