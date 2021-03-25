import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import * as actions from "../../../../_actions/custommer/isDisplayForm/DisplayForm";
function Comment_Item(props) {
  let { value } = props;
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
      <td>{value.id}</td>
      <td className="name">
        {value.txt_comment}
        <div className="product-name">
          <p>{value.name}</p>
        </div>
        <div className="product-quantity">{value.quantity_in_stock}</div>
      </td>
      <td>{value.user_id}</td>
      <td>{value.product_id}</td>
      <td>{value.created_at}</td>
      <td>
        <button
          type="button"
          onClick={() => onDelete(value.id)}
          class="btn btn-danger"
          style={{ padding: "5px 10px" }}
        >
          Xóa
        </button>

        <button
          type="button"
          onClick={() => onEdit(value.product_id)}
          class="btn btn-primary"
          style={{ padding: "5px 10px" }}
        >
          Xem
        </button>
        <button
          type="button"
          onClick={() => onEdit(value.product_id)}
          class="btn btn-primary"
          style={{ padding: "5px 10px" }}
        >
          Sửa
        </button>
      </td>
    </tr>
  );
}

export default Comment_Item;
