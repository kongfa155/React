import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import { getAllUser } from "../../../services/apiServices.js";
import ModalUpdateUser from "./ModalUpdateUser.js";
import ModalViewUser from "./ModalViewUser.js";
import ModalDeleteUser from "./ModalDeleteUser.js";

const ManageUser = (props) => {
  //Quản lý việc ẩn hiện form điền người dùng
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  //Quản lý việc ẩn hiện form cap nhat
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [listUser, setListUser] = useState([]);
  const [dataUser, setdataUser] = useState([]);
  const fetchListUser = async () => {
    let res = await getAllUser();
    if (res.EC === 0) {
      setListUser(res.DT);
    }
  };
  useEffect(() => {
    fetchListUser();
  }, []);

  const handleClickBtnUpdate = (user) => {
    setShowModalUpdateUser(true);
    setdataUser(user);
  };
  const handleClickBtnDelete = (user) => {
    setShowModalDeleteUser(true);
    setdataUser(user);
  };
  const handleClickBtnView = (user) => {
    setShowModalViewUser(true);
    setdataUser(user);
  };
  const resetUpdateData = () => {
    setdataUser({});
  };
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
          <TableUser
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
          />
          {/* Truyền cho modal quyền ẩn hiện */}
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUser={fetchListUser}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUser={dataUser}
          fetchListUser={fetchListUser}
          resetUpdateData={resetUpdateData}
        />
        <ModalViewUser
          show={showModalViewUser}
          setShow={setShowModalViewUser}
          dataUser={dataUser}
        />
        <ModalDeleteUser
          show={showModalDeleteUser}
          setShow={setShowModalDeleteUser}
          dataUser={dataUser}
          fetchListUser={fetchListUser}
        />
      </div>
    </div>
  );
};

export default ManageUser;
