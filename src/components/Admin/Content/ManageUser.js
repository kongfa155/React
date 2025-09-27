import Example from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiServices.js";

const ManageUser = (props) => {
  //Quản lý việc ẩn hiện form điền người dùng
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);

    const [listUser, setListUser] = useState([]);
  const fetchListUser = async () => {
    let res = await getAllUser();
    if (res.EC === 0) {
      setListUser(res.DT);
    }
  };
  useEffect(() => {
    fetchListUser();
  }, []);
  return (
    <div className="manage-user-container">
      <div className="title">Manage User</div>
      <div className="user-content">
        <div className="btn-add-new">
          <button
            className="btn btn-primary"
            onClick={() => setShowModalCreateUser(true)}
          >
            {" "}
            <FcPlus />
            Add new user
          </button>
        </div>
        <div className="table-users-container">
          <TableUser listUser={listUser}/>
          {/* Truyền cho modal quyền ẩn hiện */}
        </div>
        <Example show={showModalCreateUser} setShow={setShowModalCreateUser} 
        fetchListUser = {fetchListUser}/>
      </div>
    </div>
  );
};

export default ManageUser;
