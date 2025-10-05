import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { deleteUser } from "../../../services/apiServices";
import { toast } from "react-toastify";
const ModalDeleteUser = (props) => {
  const { show, setShow, dataUser, fetchListUser } = props;

  const handleClose = () => setShow(false);
    const handleDeleteUser = async () => {
        let data = await deleteUser(dataUser.id);;
            if (data && data.EC === 0) {
            toast.success(data.EM);
            handleClose();
            await fetchListUser();
            }
            if (data && data.EC !== 0) {
            toast.error(data.EM);
            }
        
    }

  return (
    <>
      <Modal show={show} onHide={handleClose} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Bạn có chắc muốn xóa user{" "}
          <b>{dataUser.email ? dataUser.email : "Email này"}</b> không
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancle
          </Button>
          <Button variant="primary" onClick={handleDeleteUser}>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalDeleteUser;
