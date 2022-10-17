import React,{useState} from "react";
import './Forget1.css';
import { Link } from "react-router-dom";
const Forgot1 = () =>
{
    const [email,setEmail]=useState("");
    const postUser = () =>
    {
        let item={email}
        console.log(item)
        const requestOptions = {
        method: 'POST',
        headers: 
        {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(
        (item)
        ),
      };
  
      fetch(
        'http://35.90.113.221/forget_password/',
        requestOptions,
      )
        .then(detail => detail.json())
        .then(resp => {
          if (resp) {
              console.log('item post ', resp)}
        })
        .catch(error => {
          console.error(error);
        });
    };
    const onpress=()=>{
      myFunction();
      postUser();
    }
    function myFunction() {
      alert("Your file is being uploaded!")
    }
    return(
        <>
        {/* Sign in form start */}
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-4 div4">
                    <div className="card signincard">
                         <img src="images\logo.png" className="logo"/>
                         <h1><b>Hi, Welcome Back</b></h1>
                         <img src="images\illustration_login.png" className="book"/>
                    </div>
                 </div>

                 <div className="col-sm-8 div8">
                    <p className="createaccount">Don't have an account? <Link to="/"><b><span style={{color:"#f45ca5"}}>Get started</span></b></Link></p>
                    <h1>Enter Email address</h1>
                    <p className="enterdetail">Link will be sent on email address. </p>
                    <input type="email" className="form-control forgetemail" placeholder="Enter Email Address :" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    <button onClick={onpress}  type="submit" className="btn forgetsubmit"><b style={{color:"white"}}>Submit</b></button>
                 </div>
            </div>
        </div>
         {/* Sign in form End */}
        </>
    )
}
export default Forgot1;

