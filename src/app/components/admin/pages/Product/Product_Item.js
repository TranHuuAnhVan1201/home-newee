import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "./../../../../_actions/custommer/isDisplayForm/DisplayForm";
import * as action from "./../../../../_actions/custommer/products/product";

function to_slug(str) {
  // Chuyển hết sang chữ thường
  if (str) {
    str = str.toLowerCase();

    // xóa dấu
    str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, "a");
    str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, "e");
    str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, "i");
    str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, "o");
    str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, "u");
    str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, "y");
    str = str.replace(/(đ)/g, "d");

    // Xóa ký tự đặc biệt
    str = str.replace(/([^0-9a-z-\s])/g, "");

    // Xóa khoảng trắng thay bằng ký tự -
    str = str.replace(/(\s+)/g, "-");

    // xóa phần dự - ở đầu
    str = str.replace(/^-+/g, "");

    // xóa phần dư - ở cuối
    str = str.replace(/-+$/g, "");

    // return
    return str;
  }
}

function Product_Item(props) {
  let { value } = props;
  console.log(value);
  const dispatch = useDispatch();
  const { register } = useForm();
  const onDelete = (id) => {
    props.onDeleteId(id);
  };
  const onEdit = (id) => {
    let value = true;
    props.onEdit(id, value);
    dispatch(actions.openForm());
  };
  const getIDName = (item) => {
    dispatch(action.IDName(item));
  };
  return (
    <tr>
      <td style={{ textAlign: "center" }}>
        <input
          type="checkbox"
          placeholder="Deleted"
          name="Deleted"
          ref={register}
        />
      </td>
      <td className="name">
        <img
          src={value.url}
          alt="Mountain"
          width="80px"
          height="80px"
          style={{ objectFit: "contain" }}
        ></img>
        <div className="product-name">
          <p>{value.name}</p>
        </div>
      </td>

      <td>x{value.quantity_in_stock}</td>
      <td>{value.price}</td>
      <td>{value.price}</td>
      <td>{2} %</td>

      <td>
        {/* <button
          type="button"
          onClick={() => onDelete(value.id)}
          class="btn btn-danger"
          style={{ padding: "5px 10px" }}
        >
          Xóa
        </button> */}

        <Link
          to={"/product-detail/" + to_slug(value.name) + "." + value.id}
          onClick={() => getIDName(value)}
          className="vertion2020 large"
        >
          <button
            type="button"
            // onClick={() => onEdit(value.id)}
            class="btn btn-primary"
            style={{ padding: "5px 10px" }}
          >
            Xem chi tiết
          </button>
        </Link>
      </td>
    </tr>
  );
}

export default Product_Item;
