import React, { useState } from "react";
import Navbar from "./Navbar";
import '../css/New_post.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatClearIcon from '@mui/icons-material/FormatClear';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import AddLinkIcon from '@mui/icons-material/AddLink';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import TheatersIcon from '@mui/icons-material/Theaters';
import RttIcon from '@mui/icons-material/Rtt';
const New_post = () => {
    const [post_header, setPost_header] = useState("");
    const [post_content, setPost_content] = useState("");
    const [images, setImages] = useState("");
    const [tag_name, setTag_name] = useState("");
    const [post_name, setPost_name] = useState("");
    const [blog, setBlog] = useState("");
    const [document, setDocument] = useState("");
    const [user, setUser] = useState("");

    const postUser = () => {
        let item = { post_header,post_content }
        console.log(item)
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                
                Accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjY1OTkxNDA1LCJpYXQiOjE2NjU5OTA4MDUsImp0aSI6ImM3MWY4YmQ1ZTMzZjQzMzI5OTM1MmQ2M2I4Mzc3ZGZlIiwidXNlcl9pZCI6NTZ9.yxZUjYnIFWHOX-AIA171WyfobSquejVL4t09_zQvju0',
            },
            body: JSON.stringify(
                (item)
            ),
        };

        fetch(
            'http://35.90.113.221/user_post/',
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
            <Navbar />

            <div className="container-fluid ">
                <div className="row">
                    <div className="col-sm-12">
                        <h4 className="h4profile">Create a new post</h4>
                        <a href="#" className="dashboard">Dashboard</a>
                        <FiberManualRecordIcon className="dot1" />
                        <a href="#" className="user">Blog</a>
                        <FiberManualRecordIcon className="dot2" />
                        <p className="ui">New Post</p>

                        <div className="card postcard">
                            <div className="card-body">
                                <input className="postinput" type="text" placeholder="Post Title" name="post_header" value={post_header} onChange={(e) => setPost_header(e.target.value)} />
                                <input className="discriptioninput" type="text" placeholder="Discription" />
                                <p className="content">Content</p>
                                <div className="card">
                                    <div className="card-header selectheader ">
                                        <select>
                                            <option className="op1">Normal</option>
                                            <option className="op2">Heading 1</option>
                                            <option className="op3">Heading 2</option>
                                            <option className="op4">Heading 3</option>
                                            <option className="op5">Heading 4</option>
                                            <option className="op6">Heading 5</option>
                                            <option className="op7">Heading 6</option>
                                        </select>
                                        <FormatBoldIcon className="B" />
                                        <FormatItalicIcon className="I" />
                                        <FormatUnderlinedIcon className="U" />
                                        <FormatClearIcon className="U1" />
                                        <FormatListNumberedIcon className="font1" />
                                        <FormatListBulletedIcon className="font2" />
                                        <FormatAlignJustifyIcon className="font3" />
                                        <FormatAlignRightIcon className="font4" />
                                        <AddLinkIcon className="font5" />
                                        <InsertPhotoIcon className="font6" />
                                        <TheatersIcon className="font7" />
                                        <RttIcon className="font8" />
                                    </div>
                                    <input className="card-body selectbody" placeholder="Write something awesome..." name="post_content" value={post_content} onChange={(e) => setPost_content(e.target.value)}></input>
                                </div>
                                <p className="cover">Cover</p>
                                <input className="browse" type="file"  name="images" value={images} onChange={(e) => setImages(e.target.value)}   ></input>
                                <label for="file">
                                    <b>Drop or select file</b><br /><br />
                                    <p>Drop files here or click <span style={{ color: "green", textDecoration: "underline" }}>browse </span> through your machine</p>
                                    <img src="images\Screenshot (147).png" />
                                </label>
                            </div>
                        </div>

                        <div className="card publishcard">
                            <div className="card-body">
                                <p className="publish">Publish</p>
                                <label className="switch buttonn1">
                                    <input type="checkbox" /><span class="slider round"></span>
                                </label>
                                <p className="enablecomments">Enable comments</p>
                                <label className="switch buttonn2">
                                    <input type="checkbox" /><span class="slider round"></span>
                                </label>
                                <input className="tagsinput" type="text" placeholder="Tags" name="tag_name" value={tag_name} onChange={(e) => setTag_name(e.target.value)}/>
                                <input className="metainput" type="text" placeholder="Meta title" />
                                <input className="description" type="text" placeholder="Meta discription" />
                                <input className="ketakeyinput" type="text" placeholder="Meta keywords" />
                            </div>
                        </div>
                        <button className="btn btn-light previewbutton">Preview</button>
                        <button onClick={postUser} type="submit" className="btn postbutton">Post</button>
                    </div>
                </div>
            </div>
        </>
    )
}
export default New_post;