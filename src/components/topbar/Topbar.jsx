import React from 'react'
import "./topbar.css"
import { NotificationsNone,Language,Settings } from '@material-ui/icons'
import { Link } from 'react-router-dom'
import  Logo from "../../assets/img/dashdashboard.png"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                <Link to="/" className="link">
                    {/* <span className="logo">dashdashboard</span> */}
                    <img src={Logo} alt="dashdashboard" className="mainLogo"/>
                </Link>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone/>
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language/>
                    </div>
                    <div className="topbarIconContainer">
                        <Settings/>
                    </div>
                    <img src="https://picjumbo.com/wp-content/uploads/sexy-girl-wearing-bikini-swimsuit-in-a-sea-free-photo-2210x1473.jpg" alt="" className="topAvatar" />
                </div>
            </div>
        </div>
    )
}
