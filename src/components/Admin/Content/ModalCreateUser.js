import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FcPlus } from "react-icons/fc";
import { toast } from "react-toastify";
import { postCreateNewUser } from "../../../services/apiServices";
import AvatarCropper from "../../AvatarCropper/AvatarCropper";

const ModalCreateUser = (props) => {
  const { show, setShow } = props;

  const handleClose = () => {
    setShow(false);
    setEmail("");
    setPassword("");
    setUsername("");
    setImage("");
    setPreviewImage("");
    setCroppedImage(null);
    setRole("USER");
  };

  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [image, setImage] = useState();
  const [role, setRole] = useState("USER");
  const [previewImage, setPreviewImage] = useState();
  const [isDragging, setIsDragging] = useState(false);
const [croppedImage, setCroppedImage] = useState(null);

  // Upload ảnh bằng input file
  const handleUploadImage = (event) => {
    if (event.target && event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      setPreviewImage(URL.createObjectURL(file));
      setImage(file);
    }
  };

  // Kéo thả ảnh
  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);

    const file = event.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      setPreviewImage(URL.createObjectURL(file));
      setImage(file);
      toast.success("Đã thả ảnh thành công!");
    } else {
      toast.error("File không hợp lệ! Hãy chọn ảnh.");
    }
  };

  // Dán ảnh (Ctrl + V)
  const handlePaste = (event) => {
    const items = event.clipboardData.items;
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") !== -1) {
        const file = items[i].getAsFile();
        setPreviewImage(URL.createObjectURL(file));
        setImage(file);
        toast.success("Dán ảnh thành công!");
        break;
      }
    }
  };

  // Gửi form
  const handleSubmit = async () => {
    if (!validateEmail(email)) {
      toast.error("Invalid email");
      return;
    }
    if (!password) {
      toast.error("Invalid password");
      return;
    }

    let data = await postCreateNewUser(email, password, username, role, image);
    if (data && data.EC === 0) {
      toast.success(data.EM);
      handleClose();
      props.setCurrentPage(1);
      await props.fetchListUserWithPaginate(1);
    }
    if (data && data.EC !== 0) {
      toast.error(data.EM);
    }
  };

  return (
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
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Role</label>
            <select
              className="form-select"
              value={role}
              onChange={(event) => setRole(event.target.value)}
            >
              <option value="USER">USER</option>
              <option value="ADMIN">ADMIN</option>
            </select>
          </div>

          <div className="col-md-12">
            <label className="form-label label-upload" htmlFor="labelUpload">
              <FcPlus /> Upload File Image
            </label>
            <input
              type="file"
              hidden
              id="labelUpload"
              onChange={handleUploadImage}
              accept="image/*"
            />
          </div>

          {/* Khu vực preview + drag-drop + paste */}
          <div
            className="col-md-12 img-preview"
            onDragOver={(e) => {
              e.preventDefault();
              setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={handleDrop}
            onPaste={handlePaste}
            style={{
              border: isDragging ? "2px solid #007bff" : "2px dashed #ccc",
              borderRadius: "10px",
              minHeight: "420px", // cho đủ chỗ cropper
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              transition: "all 0.2s",
              cursor: "pointer",
              backgroundColor: isDragging ? "#e9f2ff" : "#fafafa",
            }}
          >
            {previewImage && !croppedImage ? (
              <AvatarCropper
                image={previewImage}
                onCrop={(croppedUrl) => {
                  setPreviewImage(croppedUrl);
                  setCroppedImage(croppedUrl);
                }}
                onCancel={() => setPreviewImage(null)}
              />
            ) : croppedImage ? (
              <div
                style={{
                  width: 320,
                  height: 320,
                  borderRadius: "50%",
                  overflow: "hidden",
                  boxShadow: "0 0 10px rgba(0,0,0,0.2)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={croppedImage}
                  alt="avatar"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            ) : (
              <span>Kéo, dán hoặc upload ảnh</span>
            )}
          </div>
        </form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => handleSubmit()}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalCreateUser;
