import React from "react";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import GroupIcon from '@mui/icons-material/Group';
import { Link } from "react-router-dom";
import '../css/Navbar.css';
const Navbar=()=>
{
    return(
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <nav class="navbar navbar-expand-sm navbar-dark sticky-top">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><SearchIcon className="searchicon"/></a>
                                </li>
                                
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><img className="flag" src="images\india.png"/> </a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><NotificationsIcon  className="notificationicon"/></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#"><GroupIcon  className="groupicon"/></a>
                                </li>
                                <li class="nav-item">
                                   <Link to="/Profile"> <a class="nav-link" href=""><img className="profile" src="images\profile.jpg"/> </a></Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Navbar;