import React, { useState } from "react";
import './Login.css';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

const Login = () => {
  var user_token = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(user_token.id);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [msg, setMsg] = useState();


  const postUser = () => {
    console.log(user_token)
    let token = user_token.access
    let item = {user, email, password }
    console.log(item)
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization:
          'Bearer ' + token,

      },
      body: JSON.stringify(
        (item)
      ),
    };

    fetch(
      'http://35.90.113.221/login/',
      requestOptions,
    )
      .then(detail => detail.json())
      .then(resp => {
        if (resp) {
          if (resp.message === "login successfully") {
            navigate("/Blog")
            console.log(resp.message)
          }
          else {
            setMsg(resp.message)
          }
          console.log('item post ', resp)
        }
      })
      .catch(error => {
        console.error(error);
      });
  };
  return (
    <>
      {/* Sign in form start */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 div4">
            <div className="card signincard">
              <img src="images\logo.png" className="logo" />
              <h1><b>Hi, Welcome Back</b></h1>
              <img src="images\illustration_login.png" className="book" />
            </div>
          </div>

          <div className="col-sm-8 div8">
            <p className="createaccount">Don't have an account? <Link to="/"><b><span style={{ color: "#f45ca5" }}>Get started</span></b></Link></p>

            <h1>Sign in to My App</h1>
            <p style={{ color: "red", fontWeight: 500, position: "relative", top: 130, left: 240 }}>{msg}</p>

            <p className="enterdetail">Enter your details below.</p>

            <input type="email" className="form-control loginemail" placeholder="Email Id:" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <input type="password" className="form-control loginpwd" placeholder="Password:" name="pwd" value={password} onChange={(e) => setPassword(e.target.value)} />

            <CheckBoxIcon style={{ color: "#f45ca5", left: "245" }} className="remember" />

            <p className="rme">Remember me</p>

            <button onClick={postUser} type="submit" className=" loginsubmit"><b style={{ color: "white" }}>Login</b></button>

            <Link to="/Forgot1"><a style={{ color: "#f45ca5" }} className="forgot" href="#">Forgot password?</a></Link>
          </div>
        </div>
      </div>
      {/* Sign in form End */}
    </>
  )
}
export default Login;