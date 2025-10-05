import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img2 from "../../../assets/img-2.jpg";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";

import _ from "lodash";

const ModalViewUser = (props) => {
  //Nhận hàm từ cha để tiến hành set up ẩn hiện
  const { show, setShow, dataUser } = props;
  //Ấn nút x hoặc close thì reset dữ liệu
    const handleClose = () => setShow(false);
  //Thông tin điền trong form thông tin
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [image, setImage] = useState();
  const [role, setRole] = useState("USER");
  const [previewImage, setPreviewImage] = useState();
  useEffect(() => {
    if (!_.isEmpty(dataUser)) {
      setEmail(dataUser.email);
      setUsername(dataUser.username);
      setRole(dataUser.role);
      if (dataUser.image) {
        setPreviewImage(`data:image/jpeg;base64,${dataUser.image}`);
      }
    }
  }, [dataUser]);

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button> */}

      <Modal
        show={show}
        size="xl"
        backdrop="static"
        className="modal-add-user"
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Info</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                id="inputEmail4"
                value={email}
                disabled
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                id="inputCity"
                value={username}
                disabled
              />
            </div>
            <div className="col-md-4">
              <label className="form-label">Role</label>
              <select className="form-select" disabled>
                <option selected default value="USER">
                  USER
                </option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>

            <div className="col-md-12 img-preview">
              {previewImage ? (
                <img src={previewImage} />
              ) : (
                <span> Preview Img</span>
              )}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalViewUser;
