import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import "./history.scss";

function History(props) {
    const listCarts = useSelector((state) => state.GetCarts);
    const api = axios.create({
      baseURL: `http://localhost:4333/bill/`,
    })
    const [list, setList] = useState([]);
    useEffect(() => {
       const history = async () => {
           let res = await api.get();
         setList(res.data.bills);
        };
        history();
    }, [])
    return (
      <div>
        <h2>History</h2>
        <div className="table">
          <table className="col-auto">
            <thead className="title">
              <tr>
                <th>ID</th>
                <th>USER_ID</th>
                <th>shipping_address_id</th>
                <th>created_at</th>
                <th>total_price</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {list.length !== 0
                ? list.map((value, key) => {
                    if (listCarts.userID === value.user_id) {
                      return (
                        <tr key={key}>
                          <td>{value.id}</td>
                          <td>{value.user_id}</td>
                          <td>{value.shipping_address_id}</td>
                          <td>{value.created_at}</td>
                          <td>{value.total_price}</td>
                          <td className="td-group">
                            <span className="btn delete">Xóa</span>
                            <span className="btn edit">Sửa</span>
                          </td>
                        </tr>
                      );
                    }
                  })
                : null}
            </tbody>
          </table>
        </div>
      </div>
    );
}

export default History;