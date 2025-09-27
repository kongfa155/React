import Example from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import TableUser from "./TableUser";

const ManageUser = (props) => {
  //Quản lý việc ẩn hiện form điền người dùng
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
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
          <TableUser />
          {/* Truyền cho modal quyền ẩn hiện */}
        </div>
        <Example show={showModalCreateUser} setShow={setShowModalCreateUser} />
      </div>
    </div>
  );
};

export default ManageUser;
