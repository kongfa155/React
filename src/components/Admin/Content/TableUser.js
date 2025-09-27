import { useEffect, useState } from "react";
import {getAllUser} from "../../../services/apiServices.js";
const TableUser = (props) => {
  const [listUser, setListUser] = useState([]);
const fetchListUser = async () => {
    let res = await getAllUser();
    if(res.EC === 0) {
        setListUser(res.DT);
    }
}
  useEffect(()=> {
fetchListUser();
  }, []);

  return (
    <>
      <table className="table table-hover table-bordered">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Username</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        </thead>
        <tbody>
          {listUser &&
            listUser.length > 0 &&
            listUser.map((user, index) => {
              return (
                <tr key={`table-user ${index}`}>
                  <td>{index + 1}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    <button className="btn btn-secondary">View</button>
                    <button className="btn btn-warning mx-3">Update</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              );
            })}
          {listUser && listUser.length === 0 &&
            <td colSpan={"4"}>not found</td>
          }
        </tbody>
      </table>
    </>
  );
};

export default TableUser;
