import '../css/Profile.css';
import Navbar from "./Navbar";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import CollectionsIcon from '@mui/icons-material/Collections';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SmsIcon from '@mui/icons-material/Sms';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';
import React, {useEffect,useState} from "react";
const Profile=()=>
{
    const [subSalonforWomen, setSubSalonforWomen] = useState([]);
    const [link, setLink] = useState([]);
    const [comment, setComment] = useState([]);
    const [commentset, setCommentSet] = useState([]);
    
    useEffect(() => {
      const requestOptions = {
        method: 'GET',
        redirect: 'follow',
      };
  
      fetch(
          'http://35.90.113.221/user_about_view/',
          // 'http://10.0.2.2:8000/user_about_view/',
  
        requestOptions,
      ).then(resp => {
       
          resp.json().then(resp => {
            console.log(resp);
          setSubSalonforWomen(resp);
        });
      });
    }, []);




    useEffect(() => {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow',
        };
    
        fetch(
            'http://35.90.113.221/user_social_view/',
            // 'http://10.0.2.2:8000/user_about_view/',
    
          requestOptions,
        ).then(resp => {
         
            resp.json().then(resp => {
              console.log(resp);
            setLink(resp);
          });
        });
      }, []);

      useEffect(() => {
        const requestOptions = {
          method: 'GET',
          redirect: 'follow',
        };
    
        fetch(
            'http://35.90.113.221/post_view/',
            // 'http://10.0.2.2:8000/user_about_view/',
    
          requestOptions,
        ).then(resp => {
         
            resp.json().then(resp => {
              console.log(resp);
              setComment(resp);
              setCommentSet(resp[0]);
          });
        });
      }, []);


    return(
        <>
        <Navbar/>
        <div className="container-fluid ">
                <div className="row">
                    <div className="col-sm-12">

                        <h4 className="h4profile">Profile</h4>
                        <a href="#" className="dashboard">Dashboard</a>
                        <FiberManualRecordIcon className="dot1"/>
                        <a href="#" className="user">User</a>
                        <FiberManualRecordIcon className="dot2"/>
                        <p className="ui">My App UI</p>
                         <div className="profilecard1">
                            <img className="river" src="images\river.jpg"></img>
                            <p className="usernamee">My App</p>
                            <p className="work">UI Designer</p>
                            <img className="profile2" src="images\profile.jpg"></img>
                            <div className="profilecard2">
                            <button className="btn profilebutton "><AccountBoxIcon/>Profile</button>
                            <button className="btn gallerybutton "><CollectionsIcon/>Gallery</button>
                            </div>
                        </div> 
                    </div>
                </div>

                <div className="card card1">
                    {
                        subSalonforWomen.map((item)=>
                        <div className="card-body">
                        <p className="p1">About</p>
                        <p className="p2"> {item.description}</p>
                        <LocationOnIcon  className="p3icon"/><p className="p3">Live at <span style={{fontWeight:700}}>{item.location}</span></p>
                        <EmailIcon  className="p4icon"/><p  className="p4">{item.email}</p>
                        <BusinessCenterIcon className="p5icon"/><p  className="p5">Manager at  <span style={{fontWeight:700}}>{item.Studied_at}</span></p>
                        <BusinessCenterIcon className="p6icon"/><p  className="p6">Studied at  {item.Studied_at}</p>
                    </div>
                        )
                    }

                </div>
                <div className="card card2">
                    <div className="card-body">
                        <input type="text" placeholder="Share what you are thinking here..."/>
                        <AddPhotoAlternateIcon className="addphoto"/>
                        <AttachFileIcon className=" attatch"/>
                        <button className="btn btn-success post">Post</button>
                    </div>
                </div>
                <div className="card card3">
                    {
                link.map((item)=>
                    <div className="card-body">
                        <p className="p13">Social</p>
                        <img className="linkedin" src="images\icons8-linkedin-a-business-and-employment-oriented-service-mobile-app-24.png"/>
                        <p className="p23"> <a href="https://www.linkedin.com/in/caitlyn.kerluke">{item.linkedin}</a> </p>
                        <img className="twitter" src="images\icons8-twitter-48.png"/>
                        <p className="p33"> <a href="https://www.linkedin.com/in/caitlyn.kerluke">{item.twitter}</a> </p>
                        <img className="instagram" src="images\icons8-instagram-48.png"/>
                        <p className="p43"> <a href="https://www.linkedin.com/in/caitlyn.kerluke">{item.instagram}</a> </p>
                        <img className="facebook" src="images\icons8-facebook-48.png"/>
                        <p className="p53"> <a href="https://www.linkedin.com/in/caitlyn.kerluke">{item.facebook}</a> </p>
                    </div>
                )}
                </div>
                                    
                    
                    
                <div className="card card4 ">



{comment.map((item)=>
                    <div className="card-body">
                        <img className="card4profile" src="images\profile.jpg"/>
                        <p className="card4ui">{item.post_header}</p>
                        <p className="card4date">{item.created_date}</p>
                        <i class="fa fa-ellipsis-v"></i>
                        <p className="card4p1">{item.post_name}</p>
                        <img className="feed" src={item.images}/>
                        <a href="#"> <i class="fa fa-heart"></i></a>
                        <img className="card4img1" src="images\avatar_1.jpg"/>
                        <img className="card4img2" src="images\avatar_2.jpg"/>
                        <img className="card4img3" src="images\avatar_3.jpg"/>
                        <p className="a36">{item.likes}</p>
                        <SmsIcon className="sms"/>
                        <ShareIcon className="share"/>
                        <img className="card4img4" src="images\avatar_2.jpg"/>
                        {commentset.comment_set.map((item)=>
                        <div className="comment1">
                        
                            <p className="resumep1">{item.text}</p>
                            <p className="resumep2">Praesent venenatis metus at</p>
                            <p className="resumep3">{item.time}</p>
                      
                        </div>
                           )}
                        {/* <img className="card4img5" src="images\avatar_3.jpg"/> */}
                        {/* <div className="comment51">
                            <p className="resumep51">Lainey Davidson</p>
                            <p className="resumep52">Etiam rhoncus. Nullam vel sem. Pellentesque libero tortor, tincidunt et, tincidunt eget, semper nec,<br/> quam. Sed lectus.</p>
                            <p className="resumep53">05 September 2022</p>
                        </div> */}
                        <img className="reply" src="images\profile.jpg"/>
                        <input className="commentfire" type="text" placeholder="Write a comment ..."/>
                        <AddPhotoAlternateIcon className="z1"/>
                        <SendIcon className="z3"/>
                        <hr/>
                    </div>      
                        
                    )}

                </div>
            </div>
        </>
    )
}
export default Profile;