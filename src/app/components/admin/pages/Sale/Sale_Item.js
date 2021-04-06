import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as actions from "../../../../_actions/custommer/isDisplayForm/DisplayForm";
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
  return (
    <tr className="order">
      <td style={{ textAlign: "center" }}>
        <input
          type="checkbox"
          placeholder="Deleted"
          name="Deleted"
          ref={register}
        />
      </td>
      <td className="td-id" onClick={() => onEdit(value.id)}>{value.id}</td>
      {/* <td className="name">
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
        <div className="product-quantity">x{value.quantity_in_stock}</div>
      </td> */}
      <td>{value.created_at}</td>
      <td>{value.total_price}đ</td>
      <td>{value.status}</td>

      <td className="td-button-group">
        <button
          type="button"
          onClick={() => onDelete(value.id)}
          class="btns"

        >
          Xóa
        </button>

        <button
          type="button"
          onClick={() => onEdit(value.id)}
          class="btn btn-primary"
        
        >
          Sửa
        </button>
      </td>
    </tr>
  );
}

export default Product_Item;
