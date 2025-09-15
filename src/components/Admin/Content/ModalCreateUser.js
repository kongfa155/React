import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import img2 from "../../../assets/img-2.jpg";
import { FcPlus } from "react-icons/fc";
const Example = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [image, setImage] = useState();
  const [role, setRole] = useState("USER")
  const handleUploadImage = (event)=>{
    if(event.target && event.target.files && event.target.files[0]){
    setPreviewImage(URL.createObjectURL(event.target.files[0]));
        setImage(event.target.files[0]);
    }
  }
  const [previewImage, setPreviewImage] = useState();
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="xl"
        backdrop="static"
        className="modal-add-user"
      >
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label
                className="form-label"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              >
                Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label
                className="form-label"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              >
                Password
              </label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-md-6">
              <label
                className="form-label"
                value={username}
                onChange={(event) => setUsername(event.target.value)}
              >
                Username
              </label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-4">
              <label
                className="form-label"
                onChange={(event) => setRole(event.target.value)}
              >
                Role
              </label>
              <select className="form-select">
                <option selected default value="USER">
                  USER
                </option>
                <option value="ADMIN">ADMIN</option>
              </select>
            </div>
            <div className="col-md-12">
              <label className="form-label label-upload" htmlFor="labelUpload">
                <FcPlus />
                Upload File Image
              </label>
              <input
                type="file"
                hidden
                id="labelUpload"
                onChange={(event) => handleUploadImage(event)}
              />
            </div>

            <div className="col-md-12 img-preview">
              {previewImage ? <img src={previewImage} /> : <span> Preview Img</span>}
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Example;
