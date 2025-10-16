import { useState } from "react";
import "./Register.scss";
import { useNavigate } from "react-router-dom";
import { postRegister } from "../../services/apiServices";
import { toast } from "react-toastify";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState("text");
  const navigate = useNavigate();

    const handleShowHidePassword = ()=>{
        document.getElementById('password-reg').type = showPassword;
        if(showPassword === 'text'){
            setShowPassword('password');
        } else {
            setShowPassword('text');
        }

    }
  const handleRegister = async () => {
    //validate
    if(!email){
        toast.error("Vui lòng nhập email");
        return ;
    }
    if (!password) {
      toast.error("Vui lòng nhập password");
      return;
    }
    //submit
    let res = await postRegister(email,username, password);
    console.log("check res, ", res);
    if (res && res.EC === 0) {
      toast.success(res.EM);
      navigate("/login");
    } else {
      toast.error(res.EM);
    }
  };
  return (
    <div className="register-container">
      <div className="title col-4 mx-auto">Register</div>
      <div className="welcome col-4 mx-auto">Hello, Wanna Join Us</div>
      <div className="content-form col-4 mx-auto">
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            className="form-control"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <div className="form-group">
          <label>Password</label>
          <input
            id="password-reg"
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
          <input type="checkbox" onClick={()=> {handleShowHidePassword()}}></input>
          <span >Show password</span>
        </div>
        <div>
          <button className="btn-submit" onClick={() => handleRegister()}>
            Register
          </button>
        </div>
        <div className="text-center">
          <span
            className="back"
            onClick={() => {
              navigate("/login");
            }}
          >
            {" "}
            &#60;&#60;Go to Login
          </span>
        </div>
      </div>
    </div>
  );
};

export default Register;
