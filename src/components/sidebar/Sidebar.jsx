import React from 'react'
import { Assessment, ChatBubbleOutlineRounded, FeedbackOutlined, Group, InsertChart, LineStyle, MailOutline, MapRounded, Person, Receipt, ShowChart, StoreMallDirectory, Timeline, TrendingUp } from '@material-ui/icons'
import "./sidebar.css"
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashdashboard</h3>              
                    <ul className="sidebarList">
                        <li className="sidebarListItem active">
                            <Link to="/" className="link">
                            <LineStyle className="sidebarIcon"/>
                            Home
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales
                        </li>
                        <li className="sidebarListItem">
                            <MapRounded className="sidebarIcon"/>
                            Geotargets
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Link to="/users" className="link">
                                <Person className="sidebarIcon" />
                                Users
                            </Link>
                        </li>
                        <li className="sidebarListItem">
                            <Link to="/products" className="link">
                                <StoreMallDirectory  className="sidebarIcon"/>
                                Products
                            </Link>                            
                        </li>
                        <li className="sidebarListItem">
                            <Receipt className="sidebarIcon"/>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <InsertChart className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <FeedbackOutlined className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <ChatBubbleOutlineRounded className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Team</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <Group className="sidebarIcon"/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <ShowChart className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <Assessment className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
