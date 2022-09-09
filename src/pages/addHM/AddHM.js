import "./AddHM.scss";
import {Years , DropDownData} from "./AddHM.DataDropdown";

function AddHM() {
    console.log(Years);
  return (
    <div className="add-hs">
      <p className="add-hs-title">Thêm mới hồ sơ danh mục SCL</p>
      <form add-hs-form>
        <div className="add-hs-form-row">
          {DropDownData.map((data) => {
            return (
              <div className="row-item" key={data.id}>
                <p>{data.title}</p>
                <select>
                {data.items.map((data) => <option key={ data.id}>{data.value}</option>)}
                </select>
              </div>
            );
          })}
          <div className="row-item">

          </div>
        </div>
      </form>
    </div>
  );
}
export default AddHM;
