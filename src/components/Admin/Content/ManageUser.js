import ModalCreateUser from "./ModalCreateUser";
import "./ManageUser.scss";
import { FcPlus } from "react-icons/fc";
import TableUser from "./TableUser";
import { useEffect, useState } from "react";
import {
  getAllUser,
  getListUserWithPaginate,
} from "../../../services/apiServices.js";
import ModalUpdateUser from "./ModalUpdateUser.js";
import ModalViewUser from "./ModalViewUser.js";
import ModalDeleteUser from "./ModalDeleteUser.js";
import TableUserPaginate from "./TableUserPaginate.js";

const ManageUser = (props) => {
  const [pageCount, setPageCount] = useState(0);
  const LIMIT_USER = 6;
  const [currentPage, setCurrentPage] = useState(1);
  //Quản lý việc ẩn hiện form điền người dùng
  const [showModalCreateUser, setShowModalCreateUser] = useState(false);
  const [showModalDeleteUser, setShowModalDeleteUser] = useState(false);
  //Quản lý việc ẩn hiện form cap nhat
  const [showModalUpdateUser, setShowModalUpdateUser] = useState(false);
  const [showModalViewUser, setShowModalViewUser] = useState(false);
  const [listUser, setListUser] = useState([]);
  const [dataUser, setdataUser] = useState([]);

  //Dùng để reset danh sách khi cập nhật, thêm, xóa
  //   const fetchListUser = async () => {
  //     let res = await getAllUser();
  //     if (res.EC === 0) {
  //       setListUser(res.DT);
  //     }
  //   };

  const fetchListUserWithPaginate = async (page) => {
    let res = await getListUserWithPaginate(page, LIMIT_USER);
    if (res.EC === 0) {
      setListUser(res.DT.users);
      setPageCount(res.DT.totalPages);
    }
  };
  useEffect(() => {
    fetchListUserWithPaginate(1);
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
          {/* <TableUser
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
          /> */}
          <TableUserPaginate
            listUser={listUser}
            handleClickBtnUpdate={handleClickBtnUpdate}
            handleClickBtnView={handleClickBtnView}
            handleClickBtnDelete={handleClickBtnDelete}
            pageCount={pageCount}
            fetchListUserWithPaginate={fetchListUserWithPaginate}
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
          />
          {/* Truyền cho modal quyền ẩn hiện */}
        </div>
        <ModalCreateUser
          show={showModalCreateUser}
          setShow={setShowModalCreateUser}
          fetchListUserWithPaginate={fetchListUserWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
        <ModalUpdateUser
          show={showModalUpdateUser}
          setShow={setShowModalUpdateUser}
          dataUser={dataUser}
          resetUpdateData={resetUpdateData}
          fetchListUserWithPaginate={fetchListUserWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
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
          fetchListUserWithPaginate={fetchListUserWithPaginate}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ManageUser;
