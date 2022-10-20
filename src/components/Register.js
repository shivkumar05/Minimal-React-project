import React, { useState } from "react";
import './Register.css'
import { Link, } from "react-router-dom";
import { useNavigate } from "react-router-dom"

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [first_name, setFirst] = useState("");
  const [last_name, setLast] = useState("");
  const [number, setNumber] = useState("");
  const navigate = useNavigate();
  const [msg, setMsg] = useState();
  const [tok, setTok] = useState();

  const postUser = () => {
    let item = { email, username, password, first_name, last_name, number }
    console.log(item)
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(
        (item)
      ),
    };

    fetch(
      'http://35.90.113.221/register/',
      requestOptions,
    )
      .then(detail => detail.json())
      .then(resp => {
        if (resp) {
          if (resp.id) {

            localStorage.setItem('user', JSON.stringify(resp));
            console.log(resp.access)
            // console.log(resp.message)
            navigate("/About_social")

            // console.log(tok)

          }
          else {
            // alert(resp.email)
            setMsg(resp.email)
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
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-4 div4">
            <div className="card signincard">
              <img src="images\logo.png" className="logo" />
              <h1><b>Manage the job more effectively with My App</b></h1>
              <img src="images\illustration_register.png" className="book" />
            </div>
          </div>

          <div className="col-sm-8 div8">
            <p className="createaccount">Already have an account? <Link to="/Login"><b><span style={{ color: "#f45ca5" }}>Login</span></b></Link></p>
            {/* <h1>meratoken{tok}</h1> */}
            <h1>Get started absolutely free.</h1>

            <p className="enterdetail">Free forever. No credit card needed..</p>

            <p style={{ color: "red", fontWeight: 500, position: "relative", top: 130, left: 240 }}>{msg}</p>

            <input type="text" className="form-control registerfname" placeholder="First Name:" name="email" value={first_name} onChange={(e) => setFirst(e.target.value)} />

            <input type="text" className="form-control lname" placeholder="Last Name:" name="email" value={last_name} onChange={(e) => setLast(e.target.value)} />

            <input type="email" className="form-control email" placeholder="Email Id:" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />

            <input className="form-control username" type="text" placeholder="Username:" value={username} onChange={(e) => setUsername(e.target.value)} /><br /><br />

            <input type="password" className="form-control pwd" placeholder="Password:" name="pwd" value={password} onChange={(e) => setPassword(e.target.value)} />

            <button onClick={postUser} type="submit" className="submit"><b style={{ color: "white" }}>Register</b></button>

            <p className="lastpara">By registering, I agree to Minimal <span><a style={{ color: "black" }} href="">Terms of Service</a></span> and<span><a style={{ color: "black" }} href=""> Privacy Policy.</a></span></p>
          </div>
        </div>
      </div>
    </>
  )
}
export default Register;