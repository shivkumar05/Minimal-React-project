import React from "react";
import Navbar from "./Navbar";
import '../css/Blog.css';
import SearchIcon from '@mui/icons-material/Search';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import AddIcon from '@mui/icons-material/Add';
import TextsmsRoundedIcon from '@mui/icons-material/TextsmsRounded';
import RemoveRedEyeRoundedIcon from '@mui/icons-material/RemoveRedEyeRounded';
import ShareIcon from '@mui/icons-material/Share';
import { Link } from "react-router-dom";
const Blog=()=>
{
    return(
        <>
        <Navbar/>
        <div className="container-fluid ">
                <div className="row">
                    <div className="col-sm-12 ">

                        <h4 className="h4profile">Blog</h4>
                        <a href="#" className="dashboard">Dashboard</a>
                        <FiberManualRecordIcon className="dot1"/>
                        <a href="#" className="user">Blog</a>
                        <FiberManualRecordIcon className="dot2"/>
                        <p className="ui">New Post</p>
                        <Link to="/New_post"> <button className="btn pluspostbutton"><AddIcon className="addicon"/>New Post</button></Link>
                        <SearchIcon className="blogsearchicon"/><input className="searchpost" type="Search" placeholder="Search post..."></input>
                        <select className="blogselect">
                            <option>Latest</option>
                            <option>Populer</option>
                            <option>Oldest</option>
                        </select>
                        {/* FIRST ROW CARD START */}
                         <div className="card blogcards">
                            <div className="card blog1">
                                <div className="card-body ">
                                    <img className="blog1img2" src="images\blog\market.jpg"></img>
                                    <img className="blog1img3" src="images\blog\download.jpg"></img>
                                    <img className="blog1img1" src="images\blog\avatar_1.jpg"></img>
                                    <p className="blog1p1">21 September 2022</p>
                                    <p className="blog1p2">Apply These 7 Secret Techniques To Improve Event</p>
                                    <TextsmsRoundedIcon className="blog1commenticon w3-large"/><p className="blog1commenticonp">999</p>
                                    <RemoveRedEyeRoundedIcon className="blog1eyeicon w3-large"/><p className="blog1eyeiconp">3.36k</p>
                                    <ShareIcon className="blog1shareicon w3-large"/><p className="blog1shareiconp ">4.50k</p>
                                </div>
                            </div>
                            <div className="card blog2">
                                <div className="card-body ">
                                    <img src="images\blog\avatar_2.jpg" className="blog2img1"></img>
                                    <img src="images\blog\images.jpg" className="blog2img2"></img>
                                    <img src="images\blog\download.jpg" className="blog2img3"></img>
                                    <p className="blog2p1">20 September 2022</p>
                                    <p className="blog2p2">Believing These 7 Myths About<br/> Event Keeps You From Growing</p>
                                    <TextsmsRoundedIcon className="blog2commenticon w3-large"/><p className="blog2commenticonp">976</p>
                                    <RemoveRedEyeRoundedIcon className="blog2eyeicon w3-large"/><p className="blog2eyeiconp">3.89k</p>
                                    <ShareIcon className="blog2shareicon w3-large"/><p className="blog2shareiconp ">8.18k</p>
                                </div>
                            </div>
                            <div className="card blog3">
                                <div className="card-body ">
                                    <img className="blog3img1" src="images\blog\avatar_3.jpg"></img>
                                    <img src="images\blog\cover_13.jpg" className="blog3img2"></img>
                                    <img src="images\blog\download.jpg" className="blog3img3"></img>
                                    <p className="blog3p1">19 September 2022</p>
                                    <p className="blog3p2">Don't Waste Time! 7 Facts Until<br/>You Reach Your Event</p>
                                    <TextsmsRoundedIcon className="blog3commenticon w3-large"/><p className="blog3commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog3eyeicon w3-large"/><p className="blog3eyeiconp">698</p>
                                    <ShareIcon className="blog3shareicon w3-large"/><p className="blog3shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog4">
                                <div className="card-body ">
                                    <img className="blog4img1" src="images\blog\avatar_4.jpg"></img>
                                    <img src="images\blog\cover_4.jpg" className="blog4img2"></img>
                                    <p className="blog4p1">18 September 2022</p>
                                    <p className="blog4p2">How 7 Things Will Change The<br/>Way Yoy Approach Event</p>
                                    <TextsmsRoundedIcon className="blog4commenticon w3-large"/><p className="blog4commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog4eyeicon w3-large"/><p className="blog4eyeiconp">698</p>
                                    <ShareIcon className="blog4shareicon w3-large"/><p className="blog4shareiconp ">2.38k</p> 
                                </div>
                            </div>
                            <div className="card blog5">
                                <div className="card-body ">
                                    <img className="blog5img1" src="images\blog\avatar_5.jpg"></img>
                                    <img src="images\blog\cover_5.jpg" className="blog5img2"></img>
                                    
                                    <p className="blog5p1">17 September 2022</p>
                                    <p className="blog5p2">Event Awards: 7 Reasons Why<br/> They Don't Work & What You Can</p>
                                    <TextsmsRoundedIcon className="blog5commenticon w3-large"/><p className="blog5commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog5eyeicon w3-large"/><p className="blog5eyeiconp">698</p>
                                    <ShareIcon className="blog5shareicon w3-large"/><p className="blog5shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog6">
                                <div className="card-body ">
                                    <img className="blog6img1" src="images\blog\avatar_6.jpg"></img>
                                    <img src="images\blog\cover_6.jpg" className="blog6img2"></img>
                                    
                                    <p className="blog6p1">16 September 2022</p>
                                    <p className="blog6p2">Event Doesn't Have To Be Hard.<br/> Read These 7 Tips</p>
                                    <TextsmsRoundedIcon className="blog6commenticon w3-large"/><p className="blog6commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog6eyeicon w3-large"/><p className="blog6eyeiconp">698</p>
                                    <ShareIcon className="blog6shareicon w3-large"/><p className="blog6shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog7">
                                <div className="card-body ">
                                    <img className="blog7img1" src="images\blog\avatar_7.jpg"></img>
                                    <img src="images\blog\cover_7.jpg" className="blog7img2"></img>
                                    
                                    <p className="blog7p1">15 September 2022</p>
                                    <p className="blog7p2">Event Is Your Worst Enemy. 7 <br/>Ways To Defeat It</p>
                                    <TextsmsRoundedIcon className="blog7commenticon w3-large"/><p className="blog7commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog7eyeicon w3-large"/><p className="blog7eyeiconp">698</p>
                                    <ShareIcon className="blog7shareicon w3-large"/><p className="blog7shareiconp ">2.38k</p>
                                </div>
                            </div>    
                            <div className="card blog8">
                                <div className="card-body ">
                                    <img className="blog7img1" src="images\blog\avatar_7.jpg"></img>
                                    <img src="images\blog\cover_7.jpg" className="blog7img2"></img>
                                    
                                    <p className="blog7p1">15 September 2022</p>
                                    <p className="blog7p2">Event Is Your Worst Enemy. 7 <br/>Ways To Defeat It</p>
                                    <TextsmsRoundedIcon className="blog7commenticon w3-large"/><p className="blog7commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog7eyeicon w3-large"/><p className="blog7eyeiconp">698</p>
                                    <ShareIcon className="blog7shareicon w3-large"/><p className="blog7shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog9">
                                <div className="card-body ">
                                    <img className="blog6img1" src="images\blog\avatar_6.jpg"></img>
                                    <img src="images\blog\cover_6.jpg" className="blog6img2"></img>
                                    
                                    <p className="blog6p1">16 September 2022</p>
                                    <p className="blog6p2">Event Doesn't Have To Be Hard.<br/> Read These 7 Tips</p>
                                    <TextsmsRoundedIcon className="blog6commenticon w3-large"/><p className="blog6commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog6eyeicon w3-large"/><p className="blog6eyeiconp">698</p>
                                    <ShareIcon className="blog6shareicon w3-large"/><p className="blog6shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog10">
                                <div className="card-body ">
                                    <img className="blog5img1" src="images\blog\avatar_5.jpg"></img>
                                    <img src="images\blog\cover_5.jpg" className="blog5img2"></img>
                                    
                                    <p className="blog5p1">17 September 2022</p>
                                    <p className="blog5p2">Event Awards: 7 Reasons Why<br/> They Don't Work & What You Can</p>
                                    <TextsmsRoundedIcon className="blog5commenticon w3-large"/><p className="blog5commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog5eyeicon w3-large"/><p className="blog5eyeiconp">698</p>
                                    <ShareIcon className="blog5shareicon w3-large"/><p className="blog5shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog11">
                                <div className="card-body ">
                                    <img className="blog5img1" src="images\blog\avatar_5.jpg"></img>
                                    <img src="images\blog\cover_5.jpg" className="blog5img2"></img>
                                    
                                    <p className="blog5p1">17 September 2022</p>
                                    <p className="blog5p2">Event Awards: 7 Reasons Why<br/> They Don't Work & What You Can</p>
                                    <TextsmsRoundedIcon className="blog5commenticon w3-large"/><p className="blog5commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog5eyeicon w3-large"/><p className="blog5eyeiconp">698</p>
                                    <ShareIcon className="blog5shareicon w3-large"/><p className="blog5shareiconp ">2.38k</p>
                                </div>
                            </div>
                            



                            <div className="card blog8">
                                <div className="card-body ">
                                    <img className="blog7img1" src="images\blog\avatar_8.jpg"></img>
                                    <img src="images\blog\cover_8.jpg" className="blog7img2"></img>
                                    
                                    <p className="blog7p1">15 September 2022</p>
                                    <p className="blog7p2">Event Is Your Worst Enemy. 7 <br/>Ways To Defeat It</p>
                                    <TextsmsRoundedIcon className="blog7commenticon w3-large"/><p className="blog7commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog7eyeicon w3-large"/><p className="blog7eyeiconp">698</p>
                                    <ShareIcon className="blog7shareicon w3-large"/><p className="blog7shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog9">
                                <div className="card-body ">
                                    <img className="blog6img1" src="images\blog\avatar_9.jpg"></img>
                                    <img src="images\blog\cover_9.jpg" className="blog6img2"></img>
                                    
                                    <p className="blog6p1">16 September 2022</p>
                                    <p className="blog6p2">Event Doesn't Have To Be Hard.<br/> Read These 7 Tips</p>
                                    <TextsmsRoundedIcon className="blog6commenticon w3-large"/><p className="blog6commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog6eyeicon w3-large"/><p className="blog6eyeiconp">698</p>
                                    <ShareIcon className="blog6shareicon w3-large"/><p className="blog6shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog10">
                                <div className="card-body ">
                                    <img className="blog5img1" src="images\blog\avatar_10.jpg"></img>
                                    <img src="images\blog\cover_10.jpg" className="blog5img2"></img>
                                    
                                    <p className="blog5p1">17 September 2022</p>
                                    <p className="blog5p2">Event Awards: 7 Reasons Why<br/> They Don't Work & What You Can</p>
                                    <TextsmsRoundedIcon className="blog5commenticon w3-large"/><p className="blog5commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog5eyeicon w3-large"/><p className="blog5eyeiconp">698</p>
                                    <ShareIcon className="blog5shareicon w3-large"/><p className="blog5shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog11">
                                <div className="card-body ">
                                    <img className="blog5img1" src="images\blog\avatar_11.jpg"></img>
                                    <img src="images\blog\cover_11.jpg" className="blog5img2"></img>
                                    
                                    <p className="blog5p1">17 September 2022</p>
                                    <p className="blog5p2">Event Awards: 7 Reasons Why<br/> They Don't Work & What You Can</p>
                                    <TextsmsRoundedIcon className="blog5commenticon w3-large"/><p className="blog5commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog5eyeicon w3-large"/><p className="blog5eyeiconp">698</p>
                                    <ShareIcon className="blog5shareicon w3-large"/><p className="blog5shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog12">
                                <div className="card-body ">
                                    <img className="blog5img1" src="images\blog\avatar_12.jpg"></img>
                                    <img src="images\blog\cover_12.jpg" className="blog5img2"></img>
                                    
                                    <p className="blog5p1">17 September 2022</p>
                                    <p className="blog5p2">Event Awards: 7 Reasons Why<br/> They Don't Work & What You Can</p>
                                    <TextsmsRoundedIcon className="blog5commenticon w3-large"/><p className="blog5commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog5eyeicon w3-large"/><p className="blog5eyeiconp">698</p>
                                    <ShareIcon className="blog5shareicon w3-large"/><p className="blog5shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog13">
                                <div className="card-body ">
                                    <img className="blog5img1" src="images\blog\avatar_13.jpg"></img>
                                    <img src="images\blog\cover_13.jpg" className="blog5img2"></img>
                                    
                                    <p className="blog5p1">17 September 2022</p>
                                    <p className="blog5p2">Event Awards: 7 Reasons Why<br/> They Don't Work & What You Can</p>
                                    <TextsmsRoundedIcon className="blog5commenticon w3-large"/><p className="blog5commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog5eyeicon w3-large"/><p className="blog5eyeiconp">698</p>
                                    <ShareIcon className="blog5shareicon w3-large"/><p className="blog5shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog14">
                                <div className="card-body ">
                                    <img className="blog5img1" src="images\blog\avatar_14.jpg"></img>
                                    <img src="images\blog\cover_14.jpg" className="blog5img2"></img>
                                    
                                    <p className="blog5p1">17 September 2022</p>
                                    <p className="blog5p2">Event Awards: 7 Reasons Why<br/> They Don't Work & What You Can</p>
                                    <TextsmsRoundedIcon className="blog5commenticon w3-large"/><p className="blog5commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog5eyeicon w3-large"/><p className="blog5eyeiconp">698</p>
                                    <ShareIcon className="blog5shareicon w3-large"/><p className="blog5shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog15">
                                <div className="card-body ">
                                    <img className="blog5img1" src="images\blog\avatar_15.jpg"></img>
                                    <img src="images\blog\cover_15.jpg" className="blog5img2"></img>
                                    
                                    <p className="blog5p1">17 September 2022</p>
                                    <p className="blog5p2">Event Awards: 7 Reasons Why<br/> They Don't Work & What You Can</p>
                                    <TextsmsRoundedIcon className="blog5commenticon w3-large"/><p className="blog5commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog5eyeicon w3-large"/><p className="blog5eyeiconp">698</p>
                                    <ShareIcon className="blog5shareicon w3-large"/><p className="blog5shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog16">
                                <div className="card-body ">
                                    <img className="blog5img1" src="images\blog\avatar_16.jpg"></img>
                                    <img src="images\blog\cover_16.jpg" className="blog5img2"></img>
                                    
                                    <p className="blog5p1">17 September 2022</p>
                                    <p className="blog5p2">Event Awards: 7 Reasons Why<br/> They Don't Work & What You Can</p>
                                    <TextsmsRoundedIcon className="blog5commenticon w3-large"/><p className="blog5commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog5eyeicon w3-large"/><p className="blog5eyeiconp">698</p>
                                    <ShareIcon className="blog5shareicon w3-large"/><p className="blog5shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog17">
                                <div className="card-body ">
                                    <img className="blog5img1" src="images\blog\avatar_17.jpg"></img>
                                    <img src="images\blog\cover_17.jpg" className="blog5img2"></img>
                                    
                                    <p className="blog5p1">17 September 2022</p>
                                    <p className="blog5p2">Event Awards: 7 Reasons Why<br/> They Don't Work & What You Can</p>
                                    <TextsmsRoundedIcon className="blog5commenticon w3-large"/><p className="blog5commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog5eyeicon w3-large"/><p className="blog5eyeiconp">698</p>
                                    <ShareIcon className="blog5shareicon w3-large"/><p className="blog5shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog18">
                                <div className="card-body ">
                                    <img className="blog5img1" src="images\blog\avatar_18.jpg"></img>
                                    <img src="images\blog\cover_18.jpg" className="blog5img2"></img>
                                    
                                    <p className="blog5p1">17 September 2022</p>
                                    <p className="blog5p2">Event Awards: 7 Reasons Why<br/> They Don't Work & What You Can</p>
                                    <TextsmsRoundedIcon className="blog5commenticon w3-large"/><p className="blog5commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog5eyeicon w3-large"/><p className="blog5eyeiconp">698</p>
                                    <ShareIcon className="blog5shareicon w3-large"/><p className="blog5shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog19">
                                <div className="card-body ">
                                    <img className="blog5img1" src="images\blog\avatar_19.jpg"></img>
                                    <img src="images\blog\cover_19.jpg" className="blog5img2"></img>
                                    
                                    <p className="blog5p1">17 September 2022</p>
                                    <p className="blog5p2">Event Awards: 7 Reasons Why<br/> They Don't Work & What You Can</p>
                                    <TextsmsRoundedIcon className="blog5commenticon w3-large"/><p className="blog5commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog5eyeicon w3-large"/><p className="blog5eyeiconp">698</p>
                                    <ShareIcon className="blog5shareicon w3-large"/><p className="blog5shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog20">
                                <div className="card-body ">
                                    <img className="blog5img1" src="images\blog\avatar_20.jpg"></img>
                                    <img src="images\blog\cover_20.jpg" className="blog5img2"></img>
                                    
                                    <p className="blog5p1">17 September 2022</p>
                                    <p className="blog5p2">Event Awards: 7 Reasons Why<br/> They Don't Work & What You Can</p>
                                    <TextsmsRoundedIcon className="blog5commenticon w3-large"/><p className="blog5commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog5eyeicon w3-large"/><p className="blog5eyeiconp">698</p>
                                    <ShareIcon className="blog5shareicon w3-large"/><p className="blog5shareiconp ">2.38k</p>
                                </div>
                            </div>
                             <div className="card blog21">
                                <div className="card-body ">
                                    <img className="blog5img1" src="images\blog\avatar_21.jpg"></img>
                                    <img src="images\blog\cover_21.jpg" className="blog5img2"></img>
                                    
                                    <p className="blog5p1">17 September 2022</p>
                                    <p className="blog5p2">Event Awards: 7 Reasons Why<br/> They Don't Work & What You Can</p>
                                    <TextsmsRoundedIcon className="blog5commenticon w3-large"/><p className="blog5commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog5eyeicon w3-large"/><p className="blog5eyeiconp">698</p>
                                    <ShareIcon className="blog5shareicon w3-large"/><p className="blog5shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog22">
                                <div className="card-body ">
                                    <img className="blog5img1" src="images\blog\avatar_22.jpg"></img>
                                    <img src="images\blog\cover_22.jpg" className="blog5img2"></img>
                                    
                                    <p className="blog5p1">17 September 2022</p>
                                    <p className="blog5p2">Event Awards: 7 Reasons Why<br/> They Don't Work & What You Can</p>
                                    <TextsmsRoundedIcon className="blog5commenticon w3-large"/><p className="blog5commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog5eyeicon w3-large"/><p className="blog5eyeiconp">698</p>
                                    <ShareIcon className="blog5shareicon w3-large"/><p className="blog5shareiconp ">2.38k</p>
                                </div>
                            </div>
                            <div className="card blog23">
                                <div className="card-body ">
                                    <img className="blog5img1" src="images\blog\avatar_23.jpg"></img>
                                    <img src="images\blog\cover_23.jpg" className="blog5img2"></img>
                                    
                                    <p className="blog5p1">17 September 2022</p>
                                    <p className="blog5p2">Event Awards: 7 Reasons Why<br/> They Don't Work & What You Can</p>
                                    <TextsmsRoundedIcon className="blog5commenticon w3-large"/><p className="blog5commenticonp">9.30k</p>
                                    <RemoveRedEyeRoundedIcon className="blog5eyeicon w3-large"/><p className="blog5eyeiconp">698</p>
                                    <ShareIcon className="blog5shareicon w3-large"/><p className="blog5shareiconp ">2.38k</p>
                                </div>
                            </div> 
                        </div>
                        {/* FIRST ROW CARD END */}
                    </div>
                </div>
            </div>
        </>
    )
}
export default Blog;