import React, { useState } from "react";
import '../css/About_social.css';
import './Login.css';
import { Link } from "react-router-dom";
const About_social = () => {
  var user_token = JSON.parse(localStorage.getItem('user'));
  const [user, setUser] = useState(user_token.id);
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [email, setEmail] = useState("");
  const [workad_at, setWorkad_at] = useState("");
  const [Studied_at, setStudied_at] = useState("");

  const postUser = () => {
    console.log(user_token)
    let token = user_token.access
    let item = { user, description, location, email, workad_at, Studied_at }
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
      'http://35.90.113.221/user_about/',
      requestOptions,
    )
      .then(detail => detail.json())
      .then(resp => {
        if (resp) {

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
              <h1><b>Hi, Welcome Back</b></h1>
              <img src="images\illustration_login.png" className="book" />
            </div>
          </div>

          <div className="col-sm-8 div8">
            <h1>About details</h1>
            {/* <input type="hidden" className="form-control about1" placeholder="user:" name="user" value={user_token.id} }/> */}
            <input type="text" className="form-control about1" placeholder="Description:" name="discription" value={description} onChange={(e) => setDescription(e.target.value)} />
            <input type="text" className="form-control about2" placeholder="Location:" name="location" value={location} onChange={(e) => setLocation(e.target.value)} />
            <input type="email" className="form-control about3" placeholder="Email:" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="text" className="form-control about4" placeholder="Worked at:" name="workedat" value={workad_at} onChange={(e) => setWorkad_at(e.target.value)} />
            <input type="text" className="form-control about5" placeholder="Studied at:" name="studiedat" value={Studied_at} onChange={(e) => setStudied_at(e.target.value)} />
            <Link to="/About_social2"><button onClick={postUser} type="submit" className="btn aboutsubmit"><b style={{ color: "white" }}>Next</b></button></Link>
          </div>
        </div>
      </div>
    </>
  )
}
export default About_social;