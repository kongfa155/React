import { useState } from "react";
import "./Login.scss";
import { useNavigate } from "react-router-dom";
import {postLogin} from '../../services/apiServices'
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
import { ImSpinner10 } from 'react-icons/im';
const Login = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isLoading, setIsLoading] = useState(false);
  const handleLogin = async () => {

    setIsLoading(true);
    //submit
    let res = await postLogin(email, password);
    console.log("check res, " ,res);
    if(res && res.EC ===0){
        dispatch(doLogin(res))
        setIsLoading(false);
        toast.success(res.EM);
        navigate('/');
    } else {
        setIsLoading(false);
        toast.error(res.EM);
    }
  };
  return (
    <div className="login-container">
      <div className="header">
        <span>Don't have an account yet?</span>
        <button
          className="btn-sign-up"
          onClick={() => {
            navigate("/register");
          }}
        >
          Sign up
        </button>
      </div>
      <div className="title col-4 mx-auto">Login</div>
      <div className="welcome col-4 mx-auto">Hello, who's this</div>
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
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <span className="forgot-password">Forgot password</span>
        <div>
          <button className="btn-submit" onClick={() => handleLogin()}>
            {isLoading === true ? <ImSpinner10 className="loaderIcon"/>: ''}
            <span>Login to Web</span>
          </button>
        </div>
        <div className="text-center">
          <span
            className="back"
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            &#60;&#60;Go to Homepage
          </span>
        </div>
      </div>
    </div>
  );
};

export default Login;
