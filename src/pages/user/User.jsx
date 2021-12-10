import { CalendarToday, EmailOutlined, PermIdentity, PhoneAndroidOutlined, PinDrop, Publish } from "@material-ui/icons"
import { Link } from "react-router-dom"
import "./user.css"

export default function User({userId}) {
    return (
        <div className="user">
            <div className="userTitleContainer">
                <h1 className="userTitle">Edit User</h1>
                <Link to="/createUser">
                    <buttop className="userAddButton">Create</buttop>
                </Link>
            </div>
            <div className="userContainer">
                <div className="userShow">
                    <div className="userShowTop">
                        <img 
                        src="https://images.unsplash.com/photo-1585250047310-592b1805a8aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" 
                        alt="" className="userShowImg" />
                        <div className="userShowTopTitle">
                            <span className="userShowUsername">Anna</span>
                            <span className="userShowUsertitle">Software Engineer</span>
                        </div>
                    </div>
                    <div className="userShowBottom">
                        <span className="userShowTitle">Account Details</span>
                        <div className="userShowInfo">
                            <PermIdentity className="userShowIcon"/>
                            <span className="userShowInfoTitle">annbabe33</span>
                        </div>
                        <div className="userShowInfo">
                            <CalendarToday className="userShowIcon"/>
                            <span className="userShowInfoTitle">12.04.1989</span>
                        </div>
                        <span className="userShowTitle">Contact Details</span>
                        <div className="userShowInfo">
                            <PhoneAndroidOutlined className="userShowIcon"/>
                            <span className="userShowInfoTitle">+33 778 555 8526</span>
                        </div>
                        <div className="userShowInfo">
                            <EmailOutlined className="userShowIcon"/>
                            <span className="userShowInfoTitle">annbabe33@gmail.com</span>
                        </div>
                        <div className="userShowInfo">
                            <PinDrop className="userShowIcon"/>
                            <span className="userShowInfoTitle">Paris | France</span>
                        </div>
                    </div>
                    
                </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">Edit </span>
                    <form className="userUpdateForm">
                        <div className="userUpdateLeft">
                            <div className="userUpdateItem">
                                <label>Username</label>
                                <input type="text" placeholder="annbabe33" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Full Name</label>
                                <input type="text" placeholder="Anna Sun" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Email </label>
                                <input type="text" placeholder="annbabe33@gmail.com" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Phone</label>
                                <input type="text" placeholder="+33 778 555 8526" className="userUpdateInput"/>
                            </div>
                            <div className="userUpdateItem">
                                <label>Address </label>
                                <input type="text" placeholder="Paris | France" className="userUpdateInput"/>
                            </div>
                        </div>
                        <div className="userUpdateRight">
                            <div className="userUpdateUpload">
                                <img src="https://images.unsplash.com/photo-1585250047310-592b1805a8aa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
                                 alt="" className="userUpdateImage" />
                                <label htmlFor="file">
                                    <Publish className="userUpdateIcon"/>
                                </label>
                                <input type="file" id="file" style={{display:"none"}}/>
                            </div>
                            <button className="userUpdateButton">Update</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
