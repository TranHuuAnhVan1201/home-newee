import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "../scss/pageAdmin.scss";
import "./Sale.scss";
import Sale_Item from "./Sale_Item";
import FormNewee from "./page/Form/FormNewee";
import * as actions from "../../../../_actions/custommer/isDisplayForm/DisplayForm";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
function Sale(props) {
  const dispatch = useDispatch();
  // hiển thị khi true
  const [logged, setlogged] = useState(false);
  const [id, setID] = useState("");
  const { register } = useForm();
  // phân trang
  //biến currentpage này như số trang...1 là trang 1, 2 là trang 2, 3 là trang 3
  const [currentpage, setCurrentpage] = useState(1);
  // biến postperpage này như size dị...
  //ví dụ danh sách 10 phần tử cho nó là 2 thì hiển thị danh sách 2 còn 8 phần tử kia phần trang ra 1,2,3,4,5
  //gồm 5 trang hỏng tin thử đi
  const [postperpage, setPostperpage] = useState(25);
  // biến totalPages này để set mảng chứa số trang bị cắt
  const [totalPages, setTotalPages] = useState([]);
  const [arr, setArr] = useState([]);
  const [count, setCount] = useState(0);

  //useEffect
  useEffect(() => {
    getUser();
    if (currentpage) {
      getUser();
    }
  }, [currentpage]);

  // xóa
  async function onDeleteId(id) {
    Swal.fire({
      title: "Bạn có muốn xóa không?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Đồng ý",
      cancelButtonText: "Hủy",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:4333/bill/sale/${id}`).then(
          (data) => {
            setTimeout(function () {
              console.log(data);

              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Xóa thành công",
                showConfirmButton: false,
                timer: 1500,
              });
            }, 1000);
            getUser();
          },
          (err) => {
            console.log("Delelte");
          }
        );
      }
    });
  }
  // sửa
  const onEdit = (id, value) => {
    setlogged(true);
    setID(id);
  };
  const onSetLogged = () => {
    setlogged(false);
  };
  const onReloadPage = (name) => {
    getUser();
    setlogged(false);
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: name,
      showConfirmButton: false,
      timer: 1500,
    });
  };
  //viets một hàm onAdd
  const onAdd = (id) => {
    setID(id);
    setlogged(true);
    dispatch(actions.openForm());
  };
  const onAddPage = (page) => {
    setTimeout(function () {
      setCurrentpage(page);
    }, 1000);
  };
  async function getUser() {
    //khai báo phần tử cuối
    const indexofLastPost = currentpage * postperpage;
    //khai báo phần tử đầu
    const indexofFirstPost = indexofLastPost - postperpage;
    try {
      let arrPage = [];
      const response = await axios.get("http://localhost:4333/bill/sale");
      // const bills = await axios.get("http://localhost:4333/bill/detail");
      // const cancel = await axios.get("http://localhost:4333/bill/cancel");
      // const returnlist = await axios.get("http://localhost:4333/bill/returnlist");

      setCount(response.data.count);
      // cắt danh sách mảng bằng slice phần tử đầu phần tử cuối
      const Post = response.data.result.slice(
        indexofFirstPost,
        indexofLastPost
      );
      setArr(Post);
      console.log(arr);
      //này e mấy e tính số trang page để hiển thị ra cho người dùng
      // Math.ceil là mấy e lấy 5/2 =2.5 thì mình lấy 3 dị đó
      // response.data.length só phần tử của mảng danh sách lấy về chia cho số phần mình cần hiển thị ra giao diện
      for (
        let i = 1;
        i <= Math.ceil(parseInt(response.data.result.length) / postperpage);
        i++
      ) {
        arrPage.push({ item: i });
      }
      // rảnh log mảng arrPage ra xem...
      setTotalPages(arrPage);
      //setTotalPages là cái mảng bị cắt rồi đó a e.....
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className="body-cate sales-container">
      <nav>
        <Link to={"/admin/all"}>Tất Cả</Link>
        <Link to={"/admin/all"}>Chờ xác nhận</Link>
        <Link to={"/admin/all"}>Chờ lấy hàng</Link>
        <Link to={"/admin/all"}>Đang giao</Link>
        <Link to={"/admin/all"}>Đã giao</Link>
        <Link to={"/admin/all"}>Đơn hủy</Link>
        <Link to={"/admin/all"}>Trả hàng/Hoàn tiền</Link>
      </nav>
      <div className="form-group av" style={{ marginBottom: "16px" }}>
        <label htmlFor="exampleInputEmail1">Tên sản phẩm</label>
        <input
          type="text"
          name="search"
          className="form-control"
          placeholder="Nhập vào"
        />
        <button className="btn" type="submit">
          Tìm kiếm
        </button>
      </div>

      <button
        type="button"
        class="btn btn-primary mt-16 larger"
        onClick={() => onAdd(null)}
      >
        Thêm hóa đơn mới
      </button>

      <h3 className="mt-16"> {count} đơn hàng</h3>
      {logged === true ? (
        <FormNewee id={id} onReload={onReloadPage} onSetLogged={onSetLogged}></FormNewee>
      ) : null}
      <table class="table table-hover">
        <thead>
          <tr>
            <th>
              <input
                type="checkbox"
                placeholder="Deleted"
                name="Deleted"
                ref={register}
              />
            </th>
            <th>Mã đơn hàng</th>

            <th>Ngày mua </th>

            <th>Tổng Tiền</th>
            <th>Trạng thái đơn hàng</th>
            <th>Thao tác</th>
          </tr>
        </thead>
        <tbody>
          {arr.length > 0
            ? arr.map((value, index) => {
                return (
                  <>
                    <Sale_Item
                      value={value}
                      index={index}
                      key={index}
                      onDeleteId={onDeleteId}
                      onEdit={onEdit}
                    />
                  </>
                );
              })
            : null}
        </tbody>
      </table>

      <nav aria-label="Page navigation example">
        {totalPages.map.length > 0
          ? totalPages.map((value, index) => {
              return (
                <ul className="pagination" key={index}>
                  <li
                    onClick={() => onAddPage(value.item)}
                    className="page-item"
                  >
                    <span className="page-link-ad">{value.item}</span>
                  </li>
                </ul>
              );
            })
          : null}
      </nav>
    </div>
  );
}

export default Sale;
